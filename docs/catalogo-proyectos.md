# Selección de proyectos

Revisión: 31 de octubre de 2026. Fuente: metadatos, directorios, README y archivos consultados mediante la conexión de GitHub. Las descripciones reflejan documentación o pantallas presentes; no certifican funcionamiento en producción.

## Estado inicial

La carpeta `C:\Users\usuario\Dev\Portafolio` estaba vacía. Se clonó `brahian-mesa/portfolio`, cuya rama `main` contenía únicamente un README (commit `da6591a664569a4556ed40a9b99957eae4529898`). No existía un catálogo implementado. Se creó la base React + TypeScript + Tailwind CSS prevista en ese README, limitada a la presentación de proyectos.

## Conservados

- **FrancentrIA**: [backend](https://github.com/brahian-mesa/FrancentrIA) y [frontend](https://github.com/brahian-mesa/FrancentrIA-Frontend). Ambos privados. Los README usan la marca «FacentrIA» y describen asistencia mediante reconocimiento facial. Se conserva «FrancentrIA» como nombre solicitado y nombre exacto de repositorio. `main` solo contiene README; estos remiten el desarrollo activo a `dev`. No se atribuye un stack ni una implementación terminada.
- **EnerMind · Firmware**: [firmware-enermind](https://github.com/brahian-mesa/firmware-enermind), privado. README: ESP32, PlatformIO, PZEM-004T, OLED, Wi-Fi y MQTT. Se conserva independientemente de la cuenta pendiente de identificar. No se presenta como validado físicamente.
- **Urban Pass**: [Urban_Pass](https://github.com/brahian-mesa/Urban_Pass), privado. Se conserva exactamente el repositorio aprobado con guion bajo. Existe también `Urban-Pass`, pero no se sustituye ni se agrega sin motivo. README con instrucciones de instalación; se omiten funcionalidades no documentadas.
- **UrbanPass · Backend**: [Backend-UrbanPass](https://github.com/brahian-mesa/Backend-UrbanPass), público. README: Java, Spring Boot, MySQL, JWT y gestión de usuarios, rutas y servicios.
- **Sistema-Admisiones**: [repositorio](https://github.com/brahian-mesa/Sistema-Admisiones), público. `package.json` declara Express; README sin descripción funcional. No se inventan procesos de admisión.

## Incorporados

- **Sistema de asistencia y materias**: ficha que agrupa [sistemaNotasAsistencia](https://github.com/brahian-mesa/sistemaNotasAsistencia), público, y [Sistema-Asistencia-Notas](https://github.com/brahian-mesa/Sistema-Asistencia-Notas), privado. Sus `src/App.jsx` contienen rutas de materias, asistencia, notas y calendario escolar; `package.json` confirma React y Vite. Agrupación provisional por la descripción del usuario, pendiente de confirmar si quiere una versión particular. No se incorporan automáticamente variantes de docentes como `sitema-asistencia-nota-bertulfo`, `sitema-asistencia-nota-Angelines` o `Sistema-de-notas-liliana`.
- **GnosisNancy**: [repositorio exacto](https://github.com/brahian-mesa/GnosisNancy), privado. No «gnosysNacy». `package.json` lo identifica como `tesoreria-nancy-frontend`; `src/App.jsx` contiene pantallas de personas, pagos, reporte mensual, historial y exportación. React, Vite y Tailwind CSS confirmados como dependencias. La existencia de rutas no garantiza el funcionamiento completo de cada módulo.
- **VencIA-co**: nombre de presentación solicitado. [VencIA](https://github.com/brahian-mesa/VencIA), privado, es el repositorio con código y README titulado «VencIA.co». Se usa como fuente principal; se conserva como enlace adicional [VencIA-co_app](https://github.com/brahian-mesa/VencIA-co_app), privado y vacío. No se atribuyen funcionalidades al repositorio vacío. El README principal documenta clientes, obligaciones y calendario tributario; no se certifica exactitud tributaria ni se reproducen promesas de cumplimiento.

## Exclusión explícita

- [SmartStock-](https://github.com/brahian-mesa/SmartStock-): excluido por instrucción del usuario. No aparece en tarjetas, búsqueda ni filtros. Su exclusión queda registrada para evitar reincorporarlo por sincronizaciones futuras.

## Pendiente: enermid-energy

La consulta exacta `user:enermid-energy` devuelve error de validación de GitHub (cuenta inexistente o inaccesible). La lista de repositorios accesibles para ese propietario está vacía. También se comprobó la variante `enermind-energy`, sin resultados accesibles. Esto no demuestra que no existan repositorios privados fuera de los permisos de la conexión.

Se necesita el enlace exacto de la cuenta o de uno de sus repositorios para completar esta incorporación. No se crean tarjetas ni enlaces ficticios. La selección pendiente queda en `selection.pending`, fuera de la vista pública.

Se verificó [brahian-mesa/Pagina-Enermid](https://github.com/brahian-mesa/Pagina-Enermid), pero pertenece a la cuenta personal y su README es el inicial de Astro. Se registra como candidato, sin sustituir a la organización solicitada ni añadirlo automáticamente.

## Trazabilidad y mantenimiento

`src/projects.ts` es la fuente única de las tarjetas y contiene repositorios exactos, visibilidad, descripciones ES/EN y evidencias con ruta, rama y SHA del archivo consultado. Los SHA son de blobs de Git, no commits. No se copiaron credenciales, archivos de entorno ni código privado al portafolio público.

Para agregar un proyecto, confirmar primero propietario, nombre, visibilidad y contenido. Actualizar ambas traducciones y registrar evidencia. Para completar la organización pendiente, enumerar sus repositorios accesibles, excluir archivos de perfil o repositorios vacíos de las afirmaciones funcionales y agrupar frontend/backend únicamente cuando la documentación respalde la relación. Ejecutar `npm test` y `npm run build` antes de subir cambios.
