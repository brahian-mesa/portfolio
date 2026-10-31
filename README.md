# Portafolio · Brahian Mesa

Portafolio con React, TypeScript, Tailwind CSS y Vite. Incluye portada, sección «Sobre mí» y catálogo de proyectos. Interfaz adaptable en español e inglés, búsqueda y filtros por categoría.

La sección «Sobre mí» se encuentra después de la portada, con acceso desde el menú (`#about`). Su presentación se basa en las áreas de los proyectos verificados; no atribuye formación, empleos ni años de experiencia. El texto bilingüe se mantiene en `aboutCopy` dentro de `src/main.tsx`.

## Uso local

Requiere Node.js 22.12 o superior.

```sh
npm ci
npm run dev
```

`npm test` verifica la selección y sus evidencias. `npm run build` comprueba TypeScript y genera `dist/`. `npm run preview` permite revisar esa compilación.

## Catálogo

Incluye FrancentrIA, EnerMind Firmware, EnerMind API, EnerMind App, Sistema de asistencia y materias, GnosisNancy, VencIA-co, Urban Pass, UrbanPass Backend y Sistema-Admisiones. SmartStock está excluido.

La organización correcta es **Enermind-energy**. Se verificaron e incorporaron `enermind-api` y `enermind-app`. Los repositorios privados se identifican en cada tarjeta y requieren acceso en GitHub.

Editar `src/projects.ts` para mantener una única fuente de datos. Consultar [la selección documentada y las fuentes](docs/catalogo-proyectos.md) antes de cambiar nombres, repositorios o descripciones.

No requiere claves ni servicios externos. No se configuró publicación automática ni alojamiento; los archivos de `dist/` pueden servirse como sitio estático.
