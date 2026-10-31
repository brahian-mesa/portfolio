# Diseño y contenido

Actualización: 31 de octubre de 2026.

## Estructura

1. Inicio (`#home`): nombre, especialidad web/mobile/IoT, presentación y enlaces a proyectos y contacto.
2. Sobre mí (`#about`): presentación, intereses y áreas de trabajo.
3. Tecnologías (`#technologies`): lenguajes, frontend/mobile, backend/datos y herramientas/IoT. No se asignan porcentajes de dominio.
4. Proyectos (`#projects`): se conservan las diez fichas, los repositorios exactos y las decisiones documentadas en `catalogo-proyectos.md`.
5. Formación (`#education`): Tecnólogo en Desarrollo de Software, Universidad Católica; proyecto de grado EnerMind y áreas de aprendizaje continuo.
6. Contacto (`#contact`): GitHub, LinkedIn y correo, con copia del correo al portapapeles. Los enlaces de correo abren la aplicación de correo; no se envían mensajes desde el sitio.

## Fuentes

- El usuario confirmó en este chat «Tecnólogo en Desarrollo de Software» y «Universidad Católica». No se agregaron fechas, sede, estado de graduación ni certificaciones no proporcionadas.
- Correo confirmado: `brastivmesa@gmail.com`.
- LinkedIn confirmado: https://www.linkedin.com/in/brahianstivenmesadev/.
- [Perfil público de GitHub](https://github.com/brahian-mesa/brahian-mesa/blob/main/README.md), archivo revisado con SHA de blob `e85806f289de97ce2e06d31ff2210f53afd958ae`: nombre completo, Colombia, intereses, tecnologías, proyecto de grado y áreas de aprendizaje. Para los proyectos, prevalecen las fuentes específicas del catálogo.

## Presentación y movimiento

Paleta oscura, acentos violeta/cian, tipografía amplia y navegación fija con sección activa. La portada utiliza órbitas y símbolos de web, móvil e IoT creados en CSS/SVG. Las tarjetas tienen composiciones gráficas decorativas; no se presentan como capturas reales de las aplicaciones.

Animaciones: órbitas, elementos flotantes, señal SVG, banda horizontal continua, aparición al recorrer las secciones y transiciones al pasar sobre tarjetas. El control «Animaciones ON/OFF» permite pausarlas y `prefers-reduced-motion` desactiva el movimiento. No se oculta contenido con movimiento reducido.

El menú móvil contiene las seis secciones y se cierra al elegir un destino. El diseño cambia a una columna en móvil y a varias columnas en escritorio. Todo el contenido permanece en español e inglés.

## Verificación

Compilación con TypeScript/Vite y pruebas del catálogo. Revisión en navegador de menú móvil, navegación a Formación, traducción, búsqueda de EnerMind, copia de correo y pausa de animaciones. Se revisaron también la portada y la navegación en escritorio.

## Interacciones con bibliotecas

Se incorporaron [Motion para React](https://motion.dev/docs/react) y [Lucide React](https://lucide.dev/guide/react). Las versiones instaladas se fijan mediante `package-lock.json`.

- Título de portada con entrada por palabras y desenfoque progresivo.
- Partículas flotantes y escena de portada que responde suavemente al cursor.
- Botones principales que siguen ligeramente al cursor con resortes.
- Tarjetas de tecnologías y proyectos con entrada escalonada e inclinación 3D sutil.
- Halo de luz que acompaña al cursor y barra superior de progreso de lectura.
- Iconos SVG de Lucide en tecnologías, satélites de portada y menú móvil.

Los componentes se encuentran en `src/effects.tsx`. Los movimientos de puntero se aplican solo al ratón. No se intercepta el desplazamiento nativo ni se reemplaza el cursor. El control del pie desactiva también los efectos de Motion; la preferencia de movimiento reducido se observa de forma reactiva. Al pausar, las tarjetas permanecen visibles y las inclinaciones vuelven a cero.

Comprobaciones adicionales: el modo OFF elimina el halo y mantiene visibles las tarjetas; con ON se verificó una transformación 3D al mover el cursor sobre una tarjeta. La búsqueda de EnerMind sigue mostrando sus tres componentes.

## Modo claro y oscuro

El botón de sol/luna de la cabecera cambia entre ambos temas, también en móvil. Su etiqueta accesible indica la acción y se traduce al cambiar de idioma. La preferencia se conserva en `localStorage` con la clave `portfolio-theme`; si el almacenamiento no está disponible, el cambio sigue funcionando durante la visita. Sin preferencia guardada se mantiene el modo oscuro original.

`src/theme.tsx` controla el selector; `src/theme.css` adapta los colores de todas las secciones. El tema guardado se aplica desde la cabecera de `index.html` antes de montar React para evitar mostrar primero el tema equivocado. Las composiciones gráficas decorativas de los proyectos conservan su fondo oscuro para mantener legibles sus etiquetas.

Se verificaron el cambio de tema, la persistencia tras recargar y la presentación del modo claro en el navegador.
