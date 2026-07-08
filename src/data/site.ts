// =============================================
// DATOS CENTRALES DEL SITIO - RICARDO CHI
// =============================================

export const SITE = {
  title: 'Ricardo Chi',
  description: 'Ingeniero de Software Full-Stack & UI/UX Developer. Especializado en C#, .NET, PHP, JavaScript, Vue, y automatizaciones con IA.',
  url: 'https://github.com/RicardojCh10',
  lang: 'es',
};

export const PERSONAL = {
  name: 'Ricardo Chi',
  role: 'Ingeniero de Software Full-Stack',
  phone: '+52 998 352 0267',
  email: 'ricardojch1chan@gmail.com',
  location: 'Cancún, Quintana Roo, México',
  availability: 'Disponibilidad inmediata · Trabajo 100% Remoto',
  bio: 'I am a software developer with a strong passion for learning and taking on new challenges. I stand out for my sense of responsibility, and I enjoy applying my skills to build solutions that truly help people. I am always looking to improve my abilities and bring value to every project.',
  summary: 'Ingeniero de Software orientado al desarrollo Full-Stack con experiencia práctica en la construcción de aplicaciones web (SPA/SSR) y sistemas transaccionales. Especializado en el ecosistema C# .NET, Aspel, PHP, JavaScript/TypeScript, Python, implementando Arquitectura en capas, Clean Architecture, MVC, y APIs RESTful. Sólida comprensión de SDLC bajo Scrum/Agile. Orientado a código limpio, mantenible y optimización de rendimiento web (Core Web Vitals).',
};

// --- Navegación ---
export const NAV_ITEMS = [
  { label: 'Inicio', href: '/' },
  { label: 'Acerca de', href: '/acerca-de' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Contacto', href: '/contacto' },
];

// --- Redes Sociales ---
export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardo-jesus-chi-chan-71a6972b4', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://instagram.com/riccardo.jch', icon: 'instagram' },
  { name: 'GitHub', href: 'https://github.com/RicardojCh10', icon: 'github' },
  { name: 'Email', href: 'mailto:ricardojch1chan@gmail.com', icon: 'mail' },
];

// --- Servicios ---
export const SERVICES = [
  {
    id: 'web',
    title: 'Plataformas Web de Alta Conversión',
    description: 'No hago simples "páginas web". Construyo motores de adquisición de clientes. Desarrollo aplicaciones web modernas (SPA/SSR) estructuradas para cargar en milisegundos, garantizando que el usuario no abandone el sitio.',
    marketingHighlight: 'Optimización SEO Técnico & Core Web Vitals',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  },
  {
    id: 'ux-ui',
    title: 'Diseño UX/UI Orientado a Negocio',
    description: 'Interfaces diseñadas bajo principios de psicología cognitiva y fricción cero. Cada botón, margen y flujo está estratégicamente colocado para guiar al usuario hacia la acción de compra o contacto.',
    marketingHighlight: 'Estrategia de Retención y Fricción Cero',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>`,
  },
  {
    id: 'ai-automation',
    title: 'Automatización & Reducción de Costos',
    description: 'Diseño e implementación de flujos B2B que trabajan 24/7. Orquestación de integraciones asíncronas para eliminar tareas manuales repetitivas, permitiendo a tu equipo enfocarse en cerrar ventas.',
    marketingHighlight: 'Maximización del ROI Operativo',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  },
  {
    id: 'chatbots',
    title: 'Funnels Conversacionales IA',
    description: 'Desarrollo de asistentes de Inteligencia Artificial conectados a WhatsApp API. Automatizamos el proceso de perfilamiento y atención al cliente, capturando leads en frío y calentándolos antes de pasarlos a ventas.',
    marketingHighlight: 'Captación de Leads 24/7',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  },
];

// --- Proyectos Destacados ---
export const PROJECTS = [
  {
    title: 'SyncFlow',
    subtitle: 'SaaS de Automatización B2B',
    tech: ['Python', 'n8n', 'WhatsApp Cloud API', 'Low-Code'],
    description: 'Diseño de modelo de negocio e implementación técnica de flujos de automatización conversacional para PyMEs. Orquestación de integraciones asíncronas para la gestión de mensajes, optimizando la atención al cliente.',
    image: '/images/projects/dashboard.png'
  },
  {
    title: 'Sistema de Gestión de Estadías',
    subtitle: 'ERP Educativo',
    tech: ['C#', 'ASP.NET Core', 'TypeScript', 'Tailwind CSS', 'SQL Server'],
    description: 'Plataforma web transaccional bajo arquitectura en capas (N-Tier) para automatizar el ciclo de evaluación y métricas escolares. Integración de API RESTful robusta y diseño de BD relacional normalizada.',
    image: '/images/projects/landing.png'
  },
  {
    title: '2CAP',
    subtitle: 'Plataforma eCommerce Retail',
    tech: ['JavaScript', 'React', 'PHP', 'MySQL', 'Mercado Pago'],
    description: 'Desarrollo full-stack de tienda en línea garantizando una interfaz de usuario (UI) fluida. Implementación del flujo de compra completo, integración de pagos e inventario.',
    image: '/images/projects/ecommerce.png'
  }
];

// --- Experiencia ---
export const EXPERIENCE = [
  {
    role: 'Auxiliar de TI & Desarrollo de Software',
    company: 'Hilton Cancún All Inclusive Resort',
    date: 'Dic. 2025 – May. 2026',
    achievements: [
      'Desarrollé un Sistema Web SaaS de Gestión Integral de Activos de TI con Vue 3 (Composition API + Pinia) y Laravel 11 como API RESTful, reduciendo tiempos de auditoría.',
      'Diseñé el modelo de base de datos relacional (PostgreSQL) mediante diagramas ER y UML, implementando el patrón Repository con Eloquent ORM.',
      'Orquesté el despliegue on-premise en Windows Server e integración continua con Git/GitHub. Certificado de Reconocimiento del Cluster IT Director.'
    ]
  },
  {
    role: 'Becario en Desarrollo de Software (Frontend & Full-Stack)',
    company: 'Hilton Cancún All Inclusive Resort',
    date: 'May. 2024 – Sep. 2024',
    achievements: [
      'Integré la API RESTful de TripAdvisor para renderización dinámica de reseñas y cálculo asíncrono de rankings hoteleros.',
      'Desarrollé el módulo de blog turístico con Next.js (SSR), TypeScript y Tailwind CSS, optimizando Core Web Vitals.',
      'Participé en el SDLC bajo metodología Scrum/Agile, gestionando issues y PRs con Git/GitHub en sprints quincenales.'
    ]
  }
];

// --- Educación ---
export const EDUCATION = [
  {
    degree: 'Ingeniería en Desarrollo y Gestión de Software',
    institution: 'Universidad Tecnológica de Cancún',
    date: '2024 – 2026',
    mode: 'On-site'
  },
  {
    degree: 'Técnico Superior Universitario en Desarrollo de Software',
    institution: 'Universidad Tecnológica de Cancún',
    date: '2022 – 2024',
    mode: 'On-site'
  },
  {
    degree: 'Técnico en Soporte y Mantenimiento de Equipo',
    institution: 'CECyTE Quintana Roo',
    date: '2019 – 2022',
    mode: 'On-site'
  }
];

// --- Cursos ---
export const COURSES = [
  { name: 'Programming with JavaScript', issuer: 'Meta', date: 'Aug 2023' },
  { name: 'HTML and CSS in Depth', issuer: 'Meta', date: 'Sep 2023' },
  { name: 'Version Control', issuer: 'Coursera', date: 'Aug 2023' },
  { name: 'Professional Git and GitHub', issuer: 'Platzi', date: 'Jul 2021' },
  { name: 'Intermediate Python', issuer: 'Platzi', date: 'Apr 2021' },
  { name: 'Routing and Switching Essentials', issuer: 'Cisco', date: 'Jun 2022' },
];

export const SKILLS = [
  { 
    category: 'Backend', 
    items: [
      { name: 'C# .NET Core', description: 'Desarrollo de APIs empresariales y microservicios robustos.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'PHP & Laravel', description: 'Creación de aplicaciones monolíticas y APIs RESTful.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Node.js', description: 'Servidores asíncronos y arquitecturas orientadas a eventos.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', description: 'Automatización de tareas, procesamiento y scripts de backend.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    ] 
  },
  { 
    category: 'Frontend', 
    items: [
      { name: 'Vue 3 & Pinia', description: 'Interfaces reactivas y gestión de estado escalable.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'React', description: 'Desarrollo de SPAs dinámicas basadas en componentes.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Astro', description: 'Sitios web estáticos hiper-rápidos y arquitectura de islas.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
      { name: 'TypeScript', description: 'Tipado estático para JavaScript, reduciendo bugs en producción.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', description: 'Estilos ágiles mediante clases de utilidad.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ] 
  },
  { 
    category: 'Bases de Datos', 
    items: [
      { name: 'PostgreSQL', description: 'Base de datos relacional avanzada y open-source.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'SQL Server', description: 'Gestión de datos corporativos con Transact-SQL y .NET.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'MySQL', description: 'Motor relacional ágil para ecosistemas web.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', description: 'Almacenamiento NoSQL flexible orientado a documentos.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    ] 
  },
  { 
    category: 'DevOps & Herramientas', 
    items: [
      { name: 'Git & GitHub', description: 'Control de versiones y colaboración de código fuente.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Docker', description: 'Contenerización de entornos de desarrollo y producción.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux', description: 'Administración de servidores y entornos de despliegue.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Figma', description: 'Prototipado colaborativo y diseño de interfaces UI/UX.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    ] 
  }
];
