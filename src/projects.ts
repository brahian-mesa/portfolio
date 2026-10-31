export type Language = 'es' | 'en';
export type Project = {
  id: string;
  name: string;
  category: 'web' | 'mobile' | 'iot' | 'backend';
  description: Record<Language, string>;
  technologies: string[];
  repositories: { name: string; visibility: 'public' | 'private'; empty?: boolean }[];
  evidence: { repository: string; path: string; ref: string; sha: string }[];
};

// Only verified names and evidence-backed descriptions belong in this catalog.
export const projects: Project[] = [
  {
    id: 'francentria', name: 'FrancentrIA', category: 'mobile',
    description: {
      es: 'Control de asistencia mediante reconocimiento facial. Sus repositorios documentan una API, servicios de IA, una aplicación móvil y un panel administrativo.',
      en: 'Attendance through facial recognition. Its repositories describe an API, AI services, a mobile application and an administration panel.'
    },
    technologies: [],
    repositories: [{name:'brahian-mesa/FrancentrIA',visibility:'private'}, {name:'brahian-mesa/FrancentrIA-Frontend',visibility:'private'}],
    evidence: [
      {repository:'brahian-mesa/FrancentrIA',path:'README.md',ref:'main',sha:'1cc480c3a0ac05c3e6b6e09ff5700d85605cd032'},
      {repository:'brahian-mesa/FrancentrIA-Frontend',path:'README.md',ref:'main',sha:'2435f34cb9985a42763abff6e5c4e0bee8519173'}
    ]
  },
  {
    id: 'enermind', name: 'EnerMind · Firmware', category: 'iot',
    description: {
      es: 'Firmware para ESP32 con sensor PZEM-004T y pantalla OLED. El README documenta mediciones, conectividad Wi-Fi y comunicación MQTT.',
      en: 'ESP32 firmware with a PZEM-004T sensor and OLED display. The README documents measurements, Wi-Fi connectivity and MQTT communication.'
    },
    technologies: ['ESP32','PlatformIO','MQTT'],
    repositories: [{name:'brahian-mesa/firmware-enermind',visibility:'private'}],
    evidence: [{repository:'brahian-mesa/firmware-enermind',path:'README.md',ref:'main',sha:'d1fe7962a24134ea9f6a183bec6ac376cc2a9401'}]
  },
  {
    id: 'enermind-api', name: 'EnerMind · API', category: 'backend',
    description: {
      es: 'Backend de monitoreo energético industrial. Su documentación describe recepción de mediciones por MQTT, datos por REST y WebSocket, detección de anomalías y proyección de consumo.',
      en: 'Industrial energy monitoring backend. Its documentation describes MQTT measurement ingestion, REST and WebSocket data, anomaly detection and consumption projections.'
    },
    technologies: ['Python','FastAPI','MQTT','scikit-learn'],
    repositories: [{name:'Enermind-energy/enermind-api',visibility:'private'}],
    evidence: [{repository:'Enermind-energy/enermind-api',path:'README.md',ref:'main',sha:'38e33fdc4b24f79d8f406a179104c1b6a3b7ab3b'}]
  },
  {
    id: 'enermind-app', name: 'EnerMind · App', category: 'mobile',
    description: {
      es: 'Aplicación móvil de monitoreo energético industrial. Su README documenta pantallas de consumo, dispositivos, análisis y alertas, con comunicación con la API de EnerMind.',
      en: 'Industrial energy monitoring mobile application. Its README documents consumption, device, analysis and alert screens, communicating with the EnerMind API.'
    },
    technologies: ['Expo','React Native','TypeScript','Zustand'],
    repositories: [{name:'Enermind-energy/enermind-app',visibility:'private'}],
    evidence: [
      {repository:'Enermind-energy/enermind-app',path:'README.md',ref:'main',sha:'86dea7de310f7071edee167bd3b36b835e6c5fe3'},
      {repository:'Enermind-energy/enermind-app',path:'package.json',ref:'main',sha:'1eaee7915e1d260b9cd0b4830028c6529b56f05a'}
    ]
  },
  {
    id: 'asistencia-materias', name: 'Sistema de asistencia y materias', category: 'web',
    description: {
      es: 'Aplicación con pantallas de materias, asistencia, notas y calendario escolar. Reúne las dos versiones revisadas del sistema académico.',
      en: 'Application with subject, attendance, grade and school calendar screens. Groups the two reviewed versions of the academic system.'
    },
    technologies: ['React','Vite'],
    repositories: [{name:'brahian-mesa/sistemaNotasAsistencia',visibility:'public'}, {name:'brahian-mesa/Sistema-Asistencia-Notas',visibility:'private'}],
    evidence: [
      {repository:'brahian-mesa/sistemaNotasAsistencia',path:'src/App.jsx',ref:'main',sha:'02b0ff5357e9992b8ff1f3059d2fc4cc74de2ba7'},
      {repository:'brahian-mesa/Sistema-Asistencia-Notas',path:'src/App.jsx',ref:'main',sha:'a64ad9aff97758bc8f7cda54bf1ac2c9f4a5827c'},
      {repository:'brahian-mesa/sistemaNotasAsistencia',path:'package.json',ref:'main',sha:'f0a1cacb681ac99e727813a4b10b195c7ce6d3bd'}
    ]
  },
  {
    id: 'gnosisnancy', name: 'GnosisNancy', category: 'web',
    description: {
      es: 'Interfaz de tesorería con pantallas de personas, registro de pagos, reporte mensual, historial y exportación.',
      en: 'Treasury interface with screens for people, payment registration, monthly reports, history and exports.'
    },
    technologies: ['React','Vite','Tailwind CSS'],
    repositories: [{name:'brahian-mesa/GnosisNancy',visibility:'private'}],
    evidence: [
      {repository:'brahian-mesa/GnosisNancy',path:'src/App.jsx',ref:'main',sha:'045b0fc70262ad0c892685a9e17558502cc3ddec'},
      {repository:'brahian-mesa/GnosisNancy',path:'package.json',ref:'main',sha:'814e9d796bcbc7038189cb87921fd10483d7a569'}
    ]
  },
  {
    id: 'vencia-co', name: 'VencIA-co', category: 'mobile',
    description: {
      es: 'Aplicación para contadores colombianos. El README de VencIA.co documenta gestión de clientes, obligaciones tributarias y calendario de vencimientos.',
      en: 'Application for Colombian accountants. The VencIA.co README documents client management, tax obligations and a deadline calendar.'
    },
    technologies: ['Expo','React Native','TypeScript'],
    repositories: [{name:'brahian-mesa/VencIA',visibility:'private'}, {name:'brahian-mesa/VencIA-co_app',visibility:'private',empty:true}],
    evidence: [{repository:'brahian-mesa/VencIA',path:'README.md',ref:'main',sha:'669205da43c277a3915b062ed86a850c1d04ea03'}]
  },
  {
    id: 'urban-pass', name: 'Urban Pass', category: 'web',
    description: {
      es: 'Proyecto conservado de la selección anterior. Su README contiene instrucciones de instalación de componentes de interfaz; no detalla funcionalidades.',
      en: 'Retained from the previous selection. Its README contains UI component installation instructions without detailing product features.'
    },
    technologies: [],
    repositories: [{name:'brahian-mesa/Urban_Pass',visibility:'private'}],
    evidence: [{repository:'brahian-mesa/Urban_Pass',path:'README.md',ref:'master',sha:'958978836574111f242e0f453556ef5fe2adcec8'}]
  },
  {
    id: 'urban-pass-backend', name: 'UrbanPass · Backend', category: 'backend',
    description: {
      es: 'Backend de transporte urbano. Su README documenta autenticación, usuarios, rutas y servicios.',
      en: 'Urban transport backend. Its README documents authentication, users, routes and services.'
    },
    technologies: ['Java','Spring Boot','MySQL','JWT'],
    repositories: [{name:'brahian-mesa/Backend-UrbanPass',visibility:'public'}],
    evidence: [{repository:'brahian-mesa/Backend-UrbanPass',path:'README.md',ref:'main',sha:'0baa15e821b2ae8f4bee592539381323a00444cd'}]
  },
  {
    id: 'admisiones', name: 'Sistema-Admisiones', category: 'backend',
    description: {
      es: 'Proyecto de admisiones con dependencias de Node.js y Express. El README actual no describe sus funcionalidades.',
      en: 'Admissions project with Node.js and Express dependencies. Its current README does not describe its features.'
    },
    technologies: ['Node.js','Express'],
    repositories: [{name:'brahian-mesa/Sistema-Admisiones',visibility:'public'}],
    evidence: [{repository:'brahian-mesa/Sistema-Admisiones',path:'package.json',ref:'main',sha:'85b108284867787406e0c9a56c5c5d0414f14e08'}]
  }
];

// Selection decisions and verification status, separate from visitor-facing cards.
export const selection = {
  reviewedAt: '2026-10-31',
  excludedRepositories: ['brahian-mesa/SmartStock-'],
  pending: [],
  resolvedOwners: [{requested:'enermid-energy',actual:'Enermind-energy',source:'User screenshot; repositories verified through authenticated Git.'}],
  candidates: [{repository:'brahian-mesa/Pagina-Enermid',reason:'Verified under personal account; not confirmed as the requested organization project.'}]
};
