# Portafolio · Brahian Mesa

Catálogo de proyectos con React, TypeScript, Tailwind CSS y Vite. Interfaz adaptable en español e inglés, búsqueda y filtros por categoría.

## Uso local

Requiere Node.js 22.12 o superior.

```sh
npm ci
npm run dev
```

`npm test` verifica la selección y sus evidencias. `npm run build` comprueba TypeScript y genera `dist/`. `npm run preview` permite revisar esa compilación.

## Catálogo

Incluye FrancentrIA, EnerMind Firmware, Sistema de asistencia y materias, GnosisNancy, VencIA-co, Urban Pass, UrbanPass Backend y Sistema-Admisiones. SmartStock está excluido.

La incorporación de la cuenta **enermid-energy** sigue pendiente de recibir un enlace verificable. Los repositorios privados se identifican en cada tarjeta y requieren acceso en GitHub.

Editar `src/projects.ts` para mantener una única fuente de datos. Consultar [la selección documentada y las fuentes](docs/catalogo-proyectos.md) antes de cambiar nombres, repositorios o descripciones.

No requiere claves ni servicios externos. No se configuró publicación automática ni alojamiento; los archivos de `dist/` pueden servirse como sitio estático.
