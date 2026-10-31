import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import type { Language } from './projects';

type Theme = 'dark' | 'light';
const storageKey = 'portfolio-theme';

export function ThemeToggle({lang}:{lang:Language}) {
  const [theme,setTheme] = useState<Theme>(() => {
    try { return localStorage.getItem(storageKey)==='light'?'light':'dark'; }
    catch { return 'dark'; }
  });
  useEffect(() => {
    document.documentElement.dataset.theme=theme;
    try { localStorage.setItem(storageKey,theme); } catch { /* Switching still works without storage. */ }
  },[theme]);
  const label=lang==='es'
    ? (theme==='dark'?'Activar modo claro':'Activar modo oscuro')
    : (theme==='dark'?'Switch to light mode':'Switch to dark mode');
  return <button className="theme-toggle" type="button" aria-label={label} title={label} aria-pressed={theme==='light'} onClick={()=>setTheme(theme==='dark'?'light':'dark')}>
    {theme==='dark'?<Sun size={18} aria-hidden="true"/>:<Moon size={18} aria-hidden="true"/>}
  </button>;
}
