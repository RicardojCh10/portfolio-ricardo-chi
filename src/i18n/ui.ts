export const getTranslations = (lang: string) => {
  const isEs = lang === "es";

  return {
    available: isEs ? "Disponible para trabajar" : "Available for work",
    scroll: isEs ? "↓ SCROLL" : "↓ SCROLL",
    letsTalk: isEs ? "Hablemos" : "Let's Talk",
    contactUrl: isEs ? "/contacto" : "/en/contacto",
    projectsTitle: isEs
      ? "Casos de Éxito<br/>Recientes"
      : "Recent<br/>Success Cases",
    stackTitle: isEs ? "Stack &<br/>Herramientas" : "Stack &<br/>Toolkit",
    expTitle: isEs ? "Experiencia" : "Experience",
    eduTitle: isEs ? "Educación" : "Education",
    benefitsTitle: isEs ? "El Valor<br/>Añadido" : "The Added<br/>Value",
    learnMore: isEs ? "Ver más ↗" : "Learn More ↗",
    discuss: isEs ? "Discutir Proyecto ↗" : "Discuss this ↗",
    aboutTitle: isEs ? "Sobre Mí" : "About Me",
    collabTitle: isEs ? "Colaboración" : "Collaboration",
    startProject: isEs ? "INICIAR PROYECTO ↗" : "START PROJECT ↗",
    portfolio: isEs ? "Portafolio" : "Portfolio",
    defaultBio: isEs
      ? "Frontend & Full-Stack Engineer. Construyendo sistemas robustos con interfaces impecables."
      : "Frontend & Full-Stack Engineer. Building robust systems with flawless interfaces.",
    benefits: isEs
      ? [
          {
            title: "Velocidad Extrema",
            desc: "Sistemas optimizados para cargar en milisegundos, reduciendo tasas de abandono y mejorando conversiones.",
            slug: "velocidad-extrema",
          },
          {
            title: "Arquitectura Escalable",
            desc: "Bases de código limpias e infraestructuras preparadas para crecer junto a tu modelo de negocio sin cuellos de botella.",
            slug: "arquitectura-escalable",
          },
          {
            title: "Integración Perfecta",
            desc: "Conexión fluida entre el frontend, backend y APIs de terceros para automatizar operaciones de inicio a fin.",
            slug: "integracion-perfecta",
          },
        ]
      : [
          {
            title: "Extreme Speed",
            desc: "Systems optimized to load in milliseconds, reducing bounce rates and improving conversions.",
            slug: "extreme-speed",
          },
          {
            title: "Scalable Architecture",
            desc: "Clean codebases and infrastructures ready to grow alongside your business model without bottlenecks.",
            slug: "scalable-architecture",
          },
          {
            title: "Seamless Integration",
            desc: "Smooth connection between frontend, backend, and third-party APIs to automate operations end-to-end.",
            slug: "seamless-integration",
          },
        ],
    services: {
      heroTitle: isEs
        ? "Engineering Intelligent Solutions"
        : "Engineering Intelligent Solutions",
      heroSubtitle: isEs
        ? "Desarrollamos software, automatización e inteligencia digital para empresas que buscan evolucionar."
        : "We develop software, automation, and digital intelligence for companies looking to evolve.",
      btnBookCall: isEs ? "Agenda una llamada" : "Book a Call",
      btnViewProjects: isEs ? "Ver proyectos" : "View Projects",

      coreTitle: isEs ? "Core Services" : "Core Services",
      coreServices: isEs
        ? [
            {
              id: "01",
              title: "Software Engineering",
              subtitle: "Haz que tu negocio se vea confiable",
              desc: "Creamos sistemas web rápidos, modernos y fáciles de usar para que tu negocio proyecte una imagen profesional.",
              list: [
                "CRMs y ERPs",
                "Plataformas internas",
                "Dashboards analíticos",
                "Sistemas a medida",
              ],
              cta: "Cotizar Desarrollo",
            },
            {
              id: "02",
              title: "Web Platforms",
              subtitle: "Posiciona tu marca con autoridad",
              desc: "Desarrollamos portales y sitios web optimizados para el rendimiento y la conversión, asegurando una experiencia de usuario impecable.",
              list: [
                "Sitios corporativos",
                "Portales y Plataformas web",
                "Landing pages (Conversión)",
                "E-commerce",
              ],
              cta: "Crear Plataforma",
            },
            {
              id: "03",
              title: "Business Automation & IA",
              subtitle: "Opera de forma inteligente y sin errores",
              desc: "Implementamos soluciones de inteligencia artificial y automatizamos flujos de trabajo para reducir costos y eliminar tareas manuales.",
              list: [
                "Chatbots inteligentes",
                "IA empresarial integrada",
                "Automatización de procesos",
                "Agentes e integraciones",
              ],
              cta: "Automatizar Negocio",
            },
            {
              id: "04",
              title: "Ryora Studio",
              subtitle: "Diseño minimalista, funcional y directo",
              desc: "Construimos interfaces limpias y sistemas de diseño enfocados en la usabilidad, eliminando la fricción entre el usuario y la tecnología.",
              list: [
                "Creación de interfaces",
                "Diseño UI/UX avanzado",
                "Rediseño de sistemas",
                "Diseño web interactivo",
              ],
              cta: "Solicitar Diseño",
            },
          ]
        : [
            {
              id: "01",
              title: "Software Engineering",
              subtitle: "Make your business look reliable",
              desc: "We build fast, modern, and easy-to-use web systems so your business projects a professional image.",
              list: [
                "CRMs and ERPs",
                "Internal platforms",
                "Analytical dashboards",
                "Custom systems",
              ],
              cta: "Quote Development",
            },
            {
              id: "02",
              title: "Web Platforms",
              subtitle: "Position your brand with authority",
              desc: "We develop portals and websites optimized for performance and conversion, ensuring a flawless user experience.",
              list: [
                "Corporate sites",
                "Web portals & platforms",
                "Landing pages (Conversion)",
                "E-commerce",
              ],
              cta: "Create Platform",
            },
            {
              id: "03",
              title: "Business Automation & AI",
              subtitle: "Operate intelligently and error-free",
              desc: "We implement artificial intelligence solutions and automate workflows to reduce costs and eliminate repetitive manual tasks.",
              list: [
                "Intelligent chatbots",
                "Integrated enterprise AI",
                "Process automation",
                "Agents & integrations",
              ],
              cta: "Automate Business",
            },
            {
              id: "04",
              title: "Ryora Studio",
              subtitle: "Minimalist, functional, and direct design",
              desc: "We build clean user interfaces and design systems focused on usability, removing friction between the user and technology.",
              list: [
                "Interface creation",
                "Advanced UI/UX design",
                "System redesign",
                "Interactive web design",
              ],
              cta: "Request Design",
            },
          ],

      methodologyTitle: isEs ? "Cómo trabajamos" : "How We Work",
      methodologySteps: isEs
        ? [
            {
              step: "01",
              name: "Descubrimiento y Estrategia",
              desc: "Analizamos tu modelo de negocio, tu cliente ideal y definimos el mapa exacto para que el proyecto genere resultados desde el primer día.",
            },
            {
              step: "02",
              name: "Diseño de Experiencia",
              desc: "Creamos interfaces limpias y modernas. Tu plataforma no solo se verá increíble, sino que estará diseñada para guiar al usuario directo a la compra o contacto.",
            },
            {
              step: "03",
              name: "Desarrollo a Medida",
              desc: "Escribimos código limpio y optimizado. Construimos un sistema ultrarrápido, seguro y adaptable a cualquier celular sin depender de plantillas lentas.",
            },
            {
              step: "04",
              name: "Lanzamiento Impecable",
              desc: "Nos encargamos de toda la configuración técnica, servidores y seguridad para que tu proyecto salga al aire sin errores y listo para recibir tráfico.",
            },
            {
              step: "05",
              name: "Soporte y Evolución",
              desc: "No te dejamos solo. Monitoreamos el rendimiento del sitio y aplicamos mejoras continuas para escalar la plataforma conforme tu negocio crece.",
            },
          ]
        : [
            {
              step: "01",
              name: "Discovery & Strategy",
              desc: "We analyze your business model, your ideal client, and define the exact roadmap for the project to generate results from day one.",
            },
            {
              step: "02",
              name: "Experience Design",
              desc: "We create clean, modern interfaces. Your platform will not only look amazing but will be designed to guide users straight to purchase or contact.",
            },
            {
              step: "03",
              name: "Custom Development",
              desc: "We write clean, optimized code. We build an ultra-fast, secure, and mobile-responsive system without relying on slow templates.",
            },
            {
              step: "04",
              name: "Flawless Launch",
              desc: "We handle all technical configuration, servers, and security so your project goes live error-free and ready for traffic.",
            },
            {
              step: "05",
              name: "Support & Evolution",
              desc: "We don’t leave you alone. We monitor site performance and apply continuous improvements to scale the platform as your business grows.",
            },
          ],

      sectors: isEs
        ? ["Turismo", "Hotelería", "Salud", "Retail", "Educación", "Startups"]
        : [
            "Tourism",
            "Hospitality",
            "Healthcare",
            "Retail",
            "Education",
            "Startups",
          ],

      benefitsTitle: isEs ? "Beneficios" : "Benefits",
      benefitsList: isEs
        ? ["Más eficiencia", "Menos errores", "Mayor crecimiento", "Innovación"]
        : ["More efficiency", "Fewer errors", "Higher growth", "Innovation"],

      casesTitle: isEs ? "Casos de Estudio" : "Case Studies",
      casesList: isEs
        ? [
            "Sistema de gestión",
            "Landing de leads",
            "Dashboard empresarial",
            "Aplicación móvil",
          ]
        : [
            "Management system",
            "Lead landing page",
            "Enterprise dashboard",
            "Mobile app",
          ],

      faqTitle: isEs ? "Preguntas Frecuentes" : "FAQ",
      faqs: isEs
        ? [
            {
              q: "¿Cuánto tarda un proyecto?",
              a: "Dependiendo del alcance, puede tomar desde 2 semanas para landing pages hasta varios meses para plataformas complejas.",
            },
            {
              q: "¿Trabajan fuera de México?",
              a: "Sí, colaboramos con empresas en todo el mundo gracias a nuestras metodologías remotas.",
            },
            {
              q: "¿Ofrecen mantenimiento?",
              a: "Absolutamente. Todos nuestros proyectos incluyen opciones de mantenimiento preventivo y escalado continuo.",
            },
            {
              q: "¿Desarrollan software a medida?",
              a: "Esa es nuestra especialidad. Construimos CRMs, ERPs y sistemas únicos según las reglas de tu negocio.",
            },
            {
              q: "¿Integran inteligencia artificial?",
              a: "Sí, desde agentes conversacionales hasta automatización de procesos mediante LLMs y Machine Learning.",
            },
          ]
        : [
            {
              q: "How long does a project take?",
              a: "Depending on the scope, it can take from 2 weeks for landing pages to several months for complex platforms.",
            },
            {
              q: "Do you work outside of Mexico?",
              a: "Yes, we collaborate with companies worldwide using our remote methodologies.",
            },
            {
              q: "Do you offer maintenance?",
              a: "Absolutely. All our projects include preventive maintenance and continuous scaling options.",
            },
            {
              q: "Do you develop custom software?",
              a: "That is our specialty. We build unique CRMs, ERPs, and systems based on your business rules.",
            },
            {
              q: "Do you integrate AI?",
              a: "Yes, from conversational agents to process automation via LLMs and Machine Learning.",
            },
          ],

      ctaHero: isEs ? "Let's build the future." : "Let's build the future.",
      ctaSubtitle: isEs
        ? "Convirtamos tu idea en una solución digital."
        : "Let us turn your idea into a digital solution.",
      btnQuote: isEs ? "Solicita una cotización" : "Request a Quote",
    },
  };
};
