# Portafolio · Brahian Mesa

Portafolio con React, TypeScript, Tailwind CSS y Vite. Incluye Inicio, Sobre mí, Tecnologías, Proyectos, Formación y Contacto. Interfaz adaptable en español e inglés, búsqueda y filtros por categoría.

Diseño oscuro en violeta y cian con portada animada, órbitas, trazado de señal, banda de tecnologías, entradas al desplazarse y transiciones en tarjetas. El pie permite pausar las animaciones y se respeta la preferencia de movimiento reducido. El menú móvil permite acceder a las seis secciones.

Motion para React añade entradas por palabras, partículas, profundidad al cursor, botones magnéticos, tarjetas con inclinación y progreso de lectura. Lucide aporta los iconos SVG. Los efectos compartidos se mantienen en `src/effects.tsx`.

El botón de sol/luna en la cabecera permite cambiar entre modo claro y oscuro y guarda la elección para visitas posteriores. El selector se mantiene en `src/theme.tsx` y los colores en `src/theme.css`.

El contenido bilingüe y la formación se mantienen en `copy` y `profile` dentro de `src/main.tsx`. La formación, el correo y LinkedIn fueron confirmados por el usuario. Consultar [las notas de diseño y contenido](docs/diseno.md).

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
