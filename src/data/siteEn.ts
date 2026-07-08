export const SITE = {
  title: 'Ricardo Chi | Portfolio',
  description: 'Full-Stack Software Engineer & Web Developer Portfolio',
  lang: 'en',
};

export const PERSONAL = {
  name: 'Ricardo Chi',
  email: 'ricardo.chi@example.com',
  location: 'Cancun, Mexico',
  availability: 'Available immediately',
  summary: 'I am a software developer with a strong passion for learning and taking on new challenges. I stand out for my sense of responsibility, and I enjoy applying my skills to build solutions that truly help people.',
  bio: 'With experience in both frontend and backend development, I specialize in building modern, scalable web applications that solve real business problems. I focus on clean code, intuitive UX, and robust architectures.'
};

export const SERVICES = [
  {
    title: 'High-Conversion Web Platforms',
    description: 'I don\'t just build "websites". I build customer acquisition engines. I develop modern web applications (SPA/SSR) structured to load in milliseconds, ensuring users never abandon the site.',
    marketingHighlight: 'Technical SEO & Core Web Vitals Optimization',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>`,
  },
  {
    title: 'Business-Driven UX/UI Design',
    description: 'Interfaces designed using principles of cognitive psychology and zero-friction. Every button, margin, and user flow is strategically placed to guide the user towards purchasing or contacting.',
    marketingHighlight: 'Retention Strategy & Zero Friction',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"/><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><path d="M12 2v2"/><path d="M12 22v-2"/><path d="m17 20.66-1-1.73"/><path d="M11 10.27 7 3.34"/><path d="m20.66 17-1.73-1"/><path d="m3.34 7 1.73 1"/><path d="M14 12h8"/><path d="M2 12h2"/><path d="m20.66 7-1.73 1"/><path d="m3.34 17 1.73-1"/><path d="m17 3.34-1 1.73"/><path d="m11 13.73-4 6.93"/></svg>`,
  },
  {
    title: 'Automation & Cost Reduction',
    description: 'Design and implementation of B2B workflows that operate 24/7. Orchestration of asynchronous integrations to eliminate repetitive manual tasks, allowing your team to focus on closing sales.',
    marketingHighlight: 'Operational ROI Maximization',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>`,
  },
  {
    title: 'AI Conversational Funnels',
    description: 'Development of Artificial Intelligence assistants connected to the WhatsApp API. We automate customer profiling and support, capturing cold leads and warming them up before passing them to sales.',
    marketingHighlight: '24/7 Lead Generation',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>`,
  }
];

export const SKILLS = [
  { 
    category: 'Backend', 
    items: [
      { name: 'C# .NET Core', description: 'Development of robust enterprise APIs and microservices.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
      { name: 'PHP & Laravel', description: 'Creation of monolithic applications and fast RESTful APIs.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
      { name: 'Node.js', description: 'Asynchronous servers and event-driven architectures.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', description: 'Task automation, data processing, and backend scripts.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    ] 
  },
  { 
    category: 'Frontend', 
    items: [
      { name: 'Vue 3 & Pinia', description: 'Reactive interfaces and scalable state management.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'React', description: 'Development of dynamic component-based SPAs.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Astro', description: 'Hyper-fast static websites and islands architecture.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/astro/astro-original.svg' },
      { name: 'TypeScript', description: 'Static typing for JavaScript, reducing bugs in production.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Tailwind CSS', description: 'Agile styling using utility classes directly in HTML.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    ] 
  },
  { 
    category: 'Database', 
    items: [
      { name: 'PostgreSQL', description: 'Advanced and open-source relational database.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'SQL Server', description: 'Corporate data management with Transact-SQL and .NET.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg' },
      { name: 'MySQL', description: 'Agile relational engine widely used in PHP ecosystems.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'MongoDB', description: 'Flexible document-oriented NoSQL storage.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    ] 
  },
  { 
    category: 'DevOps & Tools', 
    items: [
      { name: 'Git & GitHub', description: 'Version control and source code collaboration.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Docker', description: 'Containerization of development and production environments.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
      { name: 'Linux', description: 'Server administration and deployment environments.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Figma', description: 'Collaborative prototyping and UI/UX design.', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg' },
    ] 
  }
];

export const EXPERIENCE = [
  {
    role: 'IT Coordinator',
    company: 'Hilton Cancun Mar Caribe All-Inclusive Resort',
    date: 'Dec 2023 - Present',
    achievements: [
      'Implemented technological systems and networks across the resort.',
      'Designed technical solutions to improve operational efficiency.',
      'Led the maintenance of IT infrastructure for hotel services.'
    ]
  },
  {
    role: 'Freelance Web Developer',
    company: 'Independent',
    date: '2023 - Present',
    achievements: [
      'Developed multiple web applications including ERP systems and landing pages.',
      'Integrated APIs and payment gateways.',
      'Designed databases and cloud architecture.'
    ]
  }
];

export const EDUCATION = [
  {
    degree: 'Software Development and Management Engineering',
    institution: 'Technological University of Cancun',
    date: '2024 - Present',
    mode: 'Hybrid'
  },
  {
    degree: 'Associate Degree in Information Technologies',
    institution: 'Technological University of Cancun',
    date: 'Jul 2024',
    mode: 'On-site'
  }
];

export const PROJECTS = [
  {
    title: 'SyncFlow',
    subtitle: 'Business Management Dashboard',
    description: 'A comprehensive web application designed to optimize and digitize enterprise workflows and management.',
    tech: ['React', 'Node.js', 'TailwindCSS', 'PostgreSQL'],
    image: '/images/projects/dashboard.png'
  },
  {
    title: 'Educational ERP',
    subtitle: 'School Management System',
    description: 'Platform to manage student records, grades, schedules, and administrative tasks for an educational institution.',
    tech: ['Laravel', 'Vue 3', 'MySQL', 'Bootstrap'],
    image: '/images/projects/landing.png'
  },
  {
    title: '2CAP E-commerce',
    subtitle: 'Online Store',
    description: 'Digital platform for selling caps and urban fashion with integrated inventory management and secure payments.',
    tech: ['C#', '.NET', 'SQL Server', 'React'],
    image: '/images/projects/ecommerce.png'
  }
];

export const COURSES = [
  { name: 'Introduction to Web Development', issuer: 'Platzi', date: '2023' },
  { name: 'Git and GitHub Professional Course', issuer: 'Platzi', date: '2023' }
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/ricardo-jesus-chi-chan-71a6972b4', icon: 'linkedin' },
  { name: 'Instagram', href: 'https://instagram.com/riccardo.jch', icon: 'instagram' },
  { name: 'GitHub', href: 'https://github.com/RicardojCh10', icon: 'github' },
  { name: 'Email', href: 'mailto:ricardojch1chan@gmail.com', icon: 'mail' },
];
