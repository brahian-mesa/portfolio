# Selección de proyectos

Revisión: 31 de octubre de 2026. Fuente: metadatos, directorios, README y archivos consultados mediante la conexión de GitHub y Git autenticado del equipo. Las descripciones reflejan documentación o pantallas presentes; no certifican funcionamiento en producción.

## Estado inicial

La carpeta `C:\Users\usuario\Dev\Portafolio` estaba vacía. Se clonó `brahian-mesa/portfolio`, cuya rama `main` contenía únicamente un README (commit `da6591a664569a4556ed40a9b99957eae4529898`). No existía un catálogo implementado. Se creó la base React + TypeScript + Tailwind CSS prevista en ese README, limitada a la presentación de proyectos.

## Conservados

- **FrancentrIA**: [backend](https://github.com/brahian-mesa/FrancentrIA) y [frontend](https://github.com/brahian-mesa/FrancentrIA-Frontend). Ambos privados. Los README usan la marca «FacentrIA» y describen asistencia mediante reconocimiento facial. Se conserva «FrancentrIA» como nombre solicitado y nombre exacto de repositorio. `main` solo contiene README; estos remiten el desarrollo activo a `dev`. No se atribuye un stack ni una implementación terminada.
- **EnerMind · Firmware**: [firmware-enermind](https://github.com/brahian-mesa/firmware-enermind), privado. README: ESP32, PlatformIO, PZEM-004T, OLED, Wi-Fi y MQTT. Se conserva junto con la API y la app de la organización. No se presenta como validado físicamente.
- **Urban Pass**: [Urban_Pass](https://github.com/brahian-mesa/Urban_Pass), privado. Se conserva exactamente el repositorio aprobado con guion bajo. Existe también `Urban-Pass`, pero no se sustituye ni se agrega sin motivo. README con instrucciones de instalación; se omiten funcionalidades no documentadas.
- **UrbanPass · Backend**: [Backend-UrbanPass](https://github.com/brahian-mesa/Backend-UrbanPass), público. README: Java, Spring Boot, MySQL, JWT y gestión de usuarios, rutas y servicios.
- **Sistema-Admisiones**: [repositorio](https://github.com/brahian-mesa/Sistema-Admisiones), público. `package.json` declara Express; README sin descripción funcional. No se inventan procesos de admisión.

## Incorporados

- **Sistema de asistencia y materias**: ficha que agrupa [sistemaNotasAsistencia](https://github.com/brahian-mesa/sistemaNotasAsistencia), público, y [Sistema-Asistencia-Notas](https://github.com/brahian-mesa/Sistema-Asistencia-Notas), privado. Sus `src/App.jsx` contienen rutas de materias, asistencia, notas y calendario escolar; `package.json` confirma React y Vite. Agrupación provisional por la descripción del usuario, pendiente de confirmar si quiere una versión particular. No se incorporan automáticamente variantes de docentes como `sitema-asistencia-nota-bertulfo`, `sitema-asistencia-nota-Angelines` o `Sistema-de-notas-liliana`.
- **GnosisNancy**: [repositorio exacto](https://github.com/brahian-mesa/GnosisNancy), privado. No «gnosysNacy». `package.json` lo identifica como `tesoreria-nancy-frontend`; `src/App.jsx` contiene pantallas de personas, pagos, reporte mensual, historial y exportación. React, Vite y Tailwind CSS confirmados como dependencias. La existencia de rutas no garantiza el funcionamiento completo de cada módulo.
- **VencIA-co**: nombre de presentación solicitado. [VencIA](https://github.com/brahian-mesa/VencIA), privado, es el repositorio con código y README titulado «VencIA.co». Se usa como fuente principal; se conserva como enlace adicional [VencIA-co_app](https://github.com/brahian-mesa/VencIA-co_app), privado y vacío. No se atribuyen funcionalidades al repositorio vacío. El README principal documenta clientes, obligaciones y calendario tributario; no se certifica exactitud tributaria ni se reproducen promesas de cumplimiento.

## Exclusión explícita

- [SmartStock-](https://github.com/brahian-mesa/SmartStock-): excluido por instrucción del usuario. No aparece en tarjetas, búsqueda ni filtros. Su exclusión queda registrada para evitar reincorporarlo por sincronizaciones futuras.

## Resuelto: Enermind-energy

La captura del usuario corrigió el nombre inicialmente escrito `enermid-energy` a **Enermind-energy** y proporcionó los nombres `enermind-api` y `enermind-app`. La conexión de GitHub devuelve 404 para ambos repositorios y no los enumera; esto es una limitación de acceso de la conexión. El acceso Git autenticado del equipo permitió consultar y clonar ambos, verificando la rama `main` y su documentación. Ya no queda pendiente su incorporación.

- **EnerMind · API**: [Enermind-energy/enermind-api](https://github.com/Enermind-energy/enermind-api). Revisado en commit `141f9108e13b1211d8fa07ff884fe1913d4bb6d7`. El README describe monitoreo energético industrial, recepción MQTT, REST/WebSocket, anomalías y proyecciones; `pyproject.toml` confirma Python, FastAPI, paho-mqtt y scikit-learn. No se atribuye LSTM: el propio README indica que no está implementado.
- **EnerMind · App**: [Enermind-energy/enermind-app](https://github.com/Enermind-energy/enermind-app). Revisado en commit `c893e3a7b03743f65eee25704c9fdf9c752bfcc4`. README: aplicación móvil del mismo sistema con consumo, dispositivos, análisis y alertas. `package.json` confirma Expo, React Native, TypeScript y Zustand. No se afirma publicación en tiendas ni validación física de dispositivos.

Se presentan en dos fichas para distinguir backend y aplicación móvil, conservando la ficha de firmware aprobada. Ambos README indican uso privado interno; se etiquetan como repositorios privados. No se ejecutaron estos proyectos ni se consultaron archivos de entorno. Las evidencias registradas son SHA de los archivos de documentación y dependencias; no se copió el código de estos repositorios al portafolio.

Se verificó [brahian-mesa/Pagina-Enermid](https://github.com/brahian-mesa/Pagina-Enermid), pero pertenece a la cuenta personal y su README es el inicial de Astro. Se registra como candidato, sin sustituir a la organización solicitada ni añadirlo automáticamente.

## Trazabilidad y mantenimiento

`src/projects.ts` es la fuente única de las tarjetas y contiene repositorios exactos, visibilidad, descripciones ES/EN y evidencias con ruta, rama y SHA del archivo consultado. Los SHA son de blobs de Git, no commits. No se copiaron credenciales, archivos de entorno ni código privado al portafolio público.

Para agregar un proyecto, confirmar primero propietario, nombre, visibilidad y contenido. Actualizar ambas traducciones y registrar evidencia. Excluir archivos de perfil o repositorios vacíos de las afirmaciones funcionales y agrupar frontend/backend únicamente cuando la documentación respalde la relación. Ejecutar `npm test` y `npm run build` antes de subir cambios.
