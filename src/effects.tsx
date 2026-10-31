import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { motion, useMotionValue, useSpring, useScroll, useReducedMotion, type HTMLMotionProps } from 'motion/react';

const Enabled = createContext(false);
export function MotionProvider({enabled,children}:{enabled:boolean;children:ReactNode}){
  const reduced=useReducedMotion();
  const active=enabled&&!reduced;
  useEffect(()=>{document.documentElement.dataset.motion=active?'on':'off'},[active]);
  return <Enabled.Provider value={active}>{children}</Enabled.Provider>;
}

export function PageEffects(){
  const enabled=useContext(Enabled);
  const {scrollYProgress}=useScroll();
  const progress=useSpring(scrollYProgress,{stiffness:180,damping:35});
  const x=useSpring(-500,{stiffness:75,damping:25});
  const y=useSpring(-500,{stiffness:75,damping:25});
  const opacity=useMotionValue(0);
  useEffect(()=>{
    if(!enabled)return;
    const move=(e:PointerEvent)=>{if(e.pointerType==='mouse'){x.set(e.clientX-180);y.set(e.clientY-180);opacity.set(1)}};
    const leave=(e:PointerEvent)=>{if(!e.relatedTarget)opacity.set(0)};
    window.addEventListener('pointermove',move,{passive:true});
    window.addEventListener('pointerout',leave);
    return()=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerout',leave);opacity.set(0)};
  },[enabled,x,y,opacity]);
  if(!enabled)return null;
  return <><motion.div className="reading-progress" style={{scaleX:progress}} aria-hidden="true"/><motion.div className="cursor-halo" style={{x,y,opacity}} aria-hidden="true"/></>;
}

export function AnimatedTitle({title,accent}:{title:string;accent:string}){
  const enabled=useContext(Enabled);
  return <h1 id="hero-title" aria-label={`${title} ${accent}`} key={`${title}-${enabled}`}>
    {[title,accent].map((line,row)=><span className={row?'title-line title-gradient':'title-line'} key={line} aria-hidden="true">{line.split(' ').map((word,i)=><motion.span className="title-word" key={i} initial={enabled?{opacity:0,y:35,filter:'blur(8px)'}:false} animate={{opacity:1,y:0,filter:'blur(0px)'}} transition={{duration:enabled?.65:0,delay:enabled?(row*.2+i*.09):0,ease:[.22,1,.36,1]}}>{word}{' '}</motion.span>)}</span>)}
  </h1>;
}

export function MagneticLink({children,...props}:HTMLMotionProps<'a'>){
  const enabled=useContext(Enabled);
  const x=useSpring(0,{stiffness:230,damping:18});
  const y=useSpring(0,{stiffness:230,damping:18});
  useEffect(()=>{if(!enabled){x.jump(0);y.jump(0)}},[enabled,x,y]);
  return <motion.a {...props} style={{x:enabled?x:0,y:enabled?y:0}} onPointerMove={e=>{if(!enabled||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)*.16);y.set((e.clientY-r.top-r.height/2)*.22)}} onPointerLeave={()=>{x.set(0);y.set(0)}} whileTap={enabled?{scale:.96}:undefined}>{children}</motion.a>;
}

export function InteractiveCard({children,className,index=0}:{children:ReactNode;className:string;index?:number}){
  const enabled=useContext(Enabled);
  const rotateX=useSpring(0,{stiffness:180,damping:23});
  const rotateY=useSpring(0,{stiffness:180,damping:23});
  useEffect(()=>{if(!enabled){rotateX.jump(0);rotateY.jump(0)}},[enabled,rotateX,rotateY]);
  return <motion.article className={`${className} motion-card`} style={{rotateX:enabled?rotateX:0,rotateY:enabled?rotateY:0,transformPerspective:1100}} initial={enabled?{opacity:0,y:32}:false} animate={enabled?undefined:{opacity:1,y:0}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.08}} transition={{duration:enabled?.55:0,delay:enabled?(index%4)*.055:0}} onPointerMove={e=>{if(!enabled||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();rotateX.set(-(e.clientY-r.top-r.height/2)/r.height*7);rotateY.set((e.clientX-r.left-r.width/2)/r.width*9)}} onPointerLeave={()=>{rotateX.set(0);rotateY.set(0)}}>{children}</motion.article>;
}

export function HeroScene({children}:{children:ReactNode}){
  const enabled=useContext(Enabled);
  const x=useSpring(0,{stiffness:70,damping:20});
  const y=useSpring(0,{stiffness:70,damping:20});
  useEffect(()=>{if(!enabled){x.jump(0);y.jump(0)}},[enabled,x,y]);
  return <div className="hero-scene" onPointerMove={e=>{if(!enabled||e.pointerType!=='mouse')return;const r=e.currentTarget.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)*.06);y.set((e.clientY-r.top-r.height/2)*.06)}} onPointerLeave={()=>{x.set(0);y.set(0)}}>
    <div className="constellation" aria-hidden="true">{Array.from({length:14},(_,i)=><motion.i key={i} style={{left:`${(i*37+9)%100}%`,top:`${(i*23+7)%100}%`}} animate={enabled?{y:[0,-14,0],opacity:[.2,.8,.2],scale:[.8,1.3,.8]}:{y:0,opacity:.35,scale:1}} transition={{duration:enabled?4+i%4:0,repeat:enabled?Infinity:0,delay:i*.17}}/>)}</div>
    <motion.div className="hero-parallax" style={{x:enabled?x:0,y:enabled?y:0}}>{children}</motion.div>
  </div>;
}
