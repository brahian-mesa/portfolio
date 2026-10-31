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
