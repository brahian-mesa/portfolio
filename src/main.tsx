import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { projects, type Language } from './projects';
import './style.css';

const copy = {
  es: {work:'Proyectos', eyebrow:'PORTAFOLIO / BRAHIAN MESA',title:'Ideas que toman',accent:'forma en código.',intro:'Una selección de mi trabajo en aplicaciones web, desarrollo móvil e IoT.',selected:'Trabajo seleccionado', all:'Todos', web:'Web', mobile:'Móvil', iot:'IoT', backend:'Backend', search:'Buscar proyecto o tecnología', count:'proyectos',private:'Repositorio privado',empty:'Repositorio vacío', source:'Fuentes y notas',noResults:'No hay proyectos que coincidan con tu búsqueda.',footer:'Brahian Mesa · Desarrollo de software'},
  en: {work:'Projects',eyebrow:'PORTFOLIO / BRAHIAN MESA',title:'Ideas taking',accent:'shape in code.',intro:'A selection of my work in web applications, mobile development and IoT.',selected:'Selected work',all:'All',web:'Web',mobile:'Mobile',iot:'IoT',backend:'Backend',search:'Search projects or technology',count:'projects',private:'Private repository',empty:'Empty repository',source:'Sources and notes',noResults:'No projects match your search.',footer:'Brahian Mesa · Software development'}
};

const aboutCopy = {
  es: {
    label: 'Sobre mí', title: 'Soy Brahian Mesa.',
    text: 'Desarrollo proyectos web, aplicaciones móviles y soluciones IoT. Mi portafolio reúne trabajo en gestión académica, tesorería, herramientas para contadores y monitoreo energético.',
    detail: 'En proyectos como FrancentrIA y EnerMind exploro cómo conectar interfaces, servicios y dispositivos para resolver necesidades concretas.',
    focus: 'Áreas de trabajo', areas: ['Desarrollo web', 'Aplicaciones móviles', 'Backend e integración', 'IoT y monitoreo energético'],
    link: 'Conoce mis proyectos'
  },
  en: {
    label: 'About me', title: 'I’m Brahian Mesa.',
    text: 'I develop web projects, mobile applications and IoT solutions. My portfolio brings together work in academic management, treasury, tools for accountants and energy monitoring.',
    detail: 'Through projects such as FrancentrIA and EnerMind, I explore how to connect interfaces, services and devices to address practical needs.',
    focus: 'Areas of work', areas: ['Web development', 'Mobile applications', 'Backend and integration', 'IoT and energy monitoring'],
    link: 'Explore my projects'
  }
};

function App(){
  const [lang,setLang]=useState<Language>('es');
  const [filter,setFilter]=useState('all');
  const [query,setQuery]=useState('');
  const t=copy[lang];
  const about=aboutCopy[lang];
  const visible=projects.filter(p=>(filter==='all'||p.category===filter)&&`${p.name} ${p.description[lang]} ${p.technologies.join(' ')}`.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  function changeLanguage(){const next=lang==='es'?'en':'es';setLang(next);document.documentElement.lang=next;document.title=`Brahian Mesa · ${copy[next].work}`;}
  return <>
    <a className="skip" href="#projects">{t.work}</a>
    <header className="flex items-center justify-between"><a className="brand" href="#">BM<span>.</span></a><nav className="flex items-center gap-6" aria-label={lang==='es'?'Principal':'Main'}><a href="#about">{about.label}</a><a href="#projects">{t.work}</a><a href="https://github.com/brahian-mesa" target="_blank" rel="noreferrer">GitHub ↗</a><button className="language" onClick={changeLanguage} aria-label={lang==='es'?'Switch to English':'Cambiar a español'}>{lang==='es'?'EN':'ES'}</button></nav></header>
    <main>
      <section className="hero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.title}<br/><span>{t.accent}</span></h1><p className="intro">{t.intro}</p><a className="hero-link" href="#projects">{t.work} <span aria-hidden="true">↓</span></a><div className="hero-mark" aria-hidden="true">{'{ }'}<small>WEB / MOBILE / IoT</small></div></section>
      <section id="about" className="about" aria-labelledby="about-title">
        <div><p className="eyebrow">01 / {about.label.toUpperCase()}</p><h2 id="about-title">{about.title}</h2><p className="about-text">{about.text}</p><p className="about-text">{about.detail}</p><a className="hero-link" href="#projects">{about.link} <span aria-hidden="true">↓</span></a></div>
        <aside className="about-focus" aria-label={about.focus}><p className="eyebrow">{about.focus.toUpperCase()}</p><ul>{about.areas.map((area,index)=><li key={area}><span aria-hidden="true">0{index+1}</span>{area}</li>)}</ul></aside>
      </section>
      <section id="projects" aria-labelledby="work-title"><div className="section-head"><div><p className="eyebrow">02 / {t.work.toUpperCase()}</p><h2 id="work-title">{t.selected}</h2></div><p role="status">{visible.length} {visible.length === 1 ? (lang === 'es' ? 'proyecto' : 'project') : t.count}</p></div>
        <div className="toolbar"><div className="filters" aria-label={lang==='es'?'Filtrar proyectos':'Filter projects'}>{(['all','web','mobile','iot','backend'] as const).map(category=><button key={category} aria-pressed={filter===category} onClick={()=>setFilter(category)}>{t[category]}</button>)}</div><input type="search" aria-label={t.search} placeholder={t.search} value={query} onChange={e=>setQuery(e.target.value)}/></div>
        <div className="project-grid">{visible.map(p=><article key={p.id}><div className="project-top"><span className="eyebrow">{t[p.category]}</span><span aria-hidden="true">↗</span></div><h3>{p.name}</h3><p className="description">{p.description[lang]}</p><ul className="tags" aria-label={lang==='es'?'Tecnologías':'Technologies'}>{p.technologies.map(tech=><li key={tech}>{tech}</li>)}</ul><div className="repositories">{p.repositories.map(repo=><div key={repo.name}><a href={`https://github.com/${repo.name}`} target="_blank" rel="noreferrer">{repo.name.split('/')[1]} ↗</a>{repo.visibility==='private'&&<small>{t.private}</small>}{repo.empty&&<small>{t.empty}</small>}</div>)}</div></article>)}</div>
        {visible.length===0&&<p className="empty">{t.noResults}</p>}
      </section>
    </main>
    <footer><span>{t.footer}</span><a href="https://github.com/brahian-mesa/portfolio/blob/main/docs/catalogo-proyectos.md" target="_blank" rel="noreferrer">{t.source} ↗</a></footer>
  </>;
}
createRoot(document.getElementById('root')!).render(<App/>);
