export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'branding' | 'ui-ux' | '3d-render' | 'social-media' | 'photography' | 'print' | 'web' | 'marketing' | 'software';
  categoryLabel: string;
  client: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  tools: string[];
  colorPalette?: string[];
  gradient: string;
  featured?: boolean;
  mockupType: 'browser' | 'mobile' | 'packaging' | 'billboard' | 'photo-grid' | 'flyer-grid' | 'branding' | 'merchandise' | 'brochure';
  stats?: { label: string; value: string }[];
  accentColor: string;
  image?: string;
  galleryImages?: string[];
  websiteUrl?: string;
  instagramUrl?: string;
  instagramHandle?: string;
  instagramFollowers?: string;
  instagramPostsCount?: string;
  instagramBio?: string;
  instagramPosts?: { image: string; title?: string; likes?: string; comments?: string; date?: string; url?: string }[];
  hasCustomLogo?: boolean;
  is3DCard?: boolean;
  frontImage?: string;
  backImage?: string;
  relatedProjects?: { id?: string; title: string; subtitle: string; category: string; image?: string; linkUrl?: string }[];
}

export interface SkillCard {
  id: string;
  title: string;
  tagline: string;
  iconName: string;
  category: string;
  level: number; // 0-100
  description: string;
  keyPoints: string[];
  toolsUsed: string[];
  highlights: string[];
  colorClass: string;
  image?: string;
}

export interface SoftwareTool {
  name: string;
  category: 'ai' | 'dev-cloud' | 'ides-tools' | 'productivity' | 'marketing' | 'design' | 'video-motion' | '3d-modeling';
  categoryName: string;
  icon: string;
  level: number;
  experience: string;
  color: string;
  highlight?: boolean;
  slug?: string;
  description?: string;
}

export interface SoftwareCategoryGroup {
  id: 'ai' | 'dev-cloud' | 'ides-tools' | 'productivity' | 'marketing' | 'design' | 'video-motion' | '3d-modeling';
  title: string;
  subtitle: string;
  iconName: string;
}

export interface WorkExperience {
  id: string;
  period: string;
  company: string;
  location: string;
  role: string;
  status: 'active' | 'completed';
  statusLabel: string;
  responsibilities: string[];
  skills: string[];
}

export interface EducationItem {
  id: string;
  period: string;
  institution: string;
  degree: string;
  status: 'completed' | 'in-progress' | 'courses';
  statusLabel: string;
  details?: string;
}

export interface TechnicalCourse {
  name: string;
  institution: string;
  category: string;
}

export interface ReferenceItem {
  name: string;
  role: string;
  company: string;
  phone: string;
  type: 'professional' | 'personal';
}

export interface PersonalBrand {
  name: string;
  email: string;
  tagline: string;
  category: string;
  iconName?: string;
}

export interface ClientBrand {
  name: string;
  industry: string;
}

export const PERSONAL_BRANDS: PersonalBrand[] = [
  {
    name: "Higgsend",
    email: "higgsend@gmail.com",
    tagline: "Gestión, Optimización e Integración de Herramientas Tecnológicas",
    category: "Gestión Tecnológica",
    iconName: "Cpu"
  },
  {
    name: "WillkSoft",
    email: "willksoft@gmail.com",
    tagline: "Arquitectura de Software, Cloud Solutions & Desarrollo Web",
    category: "Tecnología & SaaS",
    iconName: "Code"
  },
  {
    name: "Elevate Enterprise Brands",
    email: "elevateenterprisebrands@gmail.com",
    tagline: "Holding Creativo, Consultoría Estratégica & Business Growth",
    category: "Holding & Negocios",
    iconName: "Briefcase"
  },
  {
    name: "Bien De Marketing",
    email: "biendemarketing@gmail.com",
    tagline: "Estrategia Publicitaria, Campañas de Alto ROAS & Contenido de Impacto",
    category: "Agencia de Marketing",
    iconName: "Megaphone"
  }
];

export const TRUSTED_BRANDS: ClientBrand[] = [
  { name: "Didusa SRL & Jamaica", industry: "Climatización HVAC, Aislamiento & Acabados Técnicos" },
  { name: "Club Med Punta Cana", industry: "Cadena Hotelera & Turismo Internacional" },
  { name: "Corambar Realty Group", industry: "Bienes Raíces & Inversión Inmobiliaria" },
  { name: "Big Print Punta Cana", industry: "Publicidad & Impresión Gran Formato" },
  { name: "CAMI Instituto", industry: "Instituto de Capacitación & Educación Continua" },
  { name: "Fancy RD Radio", industry: "Emisora Digital & Streaming Radial" },
  { name: "FacturaDO", industry: "Software SaaS de Facturación Fiscal e-CF & Nómina" },
  { name: "Waooo Tours & Adventures", industry: "Agencia de Excursiones, Tours & Turismo en Punta Cana" },
  { name: "Decora Group Punta Cana", industry: "Diseño & Fabricación de Cocinas, Closets y Mobiliario de Lujo" },
  { name: "Latik Graduaciones", industry: "Fotografía & Eventos de Graduación" }
];

export const PERSONAL_INFO = {
  name: "Manuel Cabrera",
  role: "Marketing Digital, Diseño Gráfico, Desarrollo de Software y Web, Automatizaciones, Fotografía, Video & IA",
  age: "29 años",
  experienceYears: "11 Años",
  phone: "849-635-2835",
  phoneFormatted: "+1 (849) 635-2835",
  whatsappUrl: "https://wa.me/18496352835?text=Hola%20Manuel,%20vi%20tu%20portafolio%20profesional%20y%20me%20gustar%C3%ADa%20conversar%20sobre%20una%20oportunidad.",
  email: "manuelcabrerasinfo@gmail.com",
  secondaryEmail: "sedphotord@gmail.com",
  instagramPrimary: "manuelgraphics",
  instagramSecondary: "sedphoto_",
  location: "Verón, Punta Cana, La Altagracia, República Dominicana",
  availability: "Disponible para proyectos & Contratos Remotos",
  heroBgPhoto: "https://res.cloudinary.com/dap38hi9l/image/upload/f_auto,q_auto:good,w_1080/v1786984795/ChatGPT_Image_17_ago_2026__12_38_57_qhngy2.png",
  aboutSummary: "Especialista en Marketing Digital, Diseño Gráfico, Desarrollo de Software y Web, Automatizaciones, Fotografía y Video e Inteligencia Artificial, con más de 11 años de trayectoria profesional continua creando soluciones integrales y tecnológicas de alto impacto.",
  designPhilosophy: "Priorizo la efectividad comercial del marketing unida a la sofisticación estética y tecnológica: cada solución debe captar atención, comunicar valor y generar resultados medibles para la empresa.",
  hobbies: ["Lectura & Aprendizaje Continuo", "Pesca deportiva", "Natación", "Videojuegos", "Cocina creativa", "Ejercicio físico", "Senderismo"],
  stats: [
    { label: "Años de Experiencia", value: "11+", highlight: "Trayectoria profesional continua" },
    { label: "Herramientas Dominadas", value: "+100", highlight: "Marketing, Diseño, Web e IA" },
    { label: "Proyectos Realizados", value: "200+", highlight: "Campañas, Branding, Web & Video" },
    { label: "Satisfacción de Empresas", value: "100%", highlight: "Compromiso, Calidad y puntualidad" },
  ]
};

export const SOFTWARE_CATEGORY_GROUPS: SoftwareCategoryGroup[] = [
  {
    id: 'design',
    title: 'Diseño Gráfico, UI/UX & Identidad Visual',
    subtitle: 'Herramientas líderes para interfaces interactivas, sistemas de diseño, maquetación editorial y diseño vectorial corporativo.',
    iconName: 'Palette'
  },
  {
    id: 'marketing',
    title: 'Marketing Digital & Analítica de Tráfico',
    subtitle: 'Gestión y optimización de campañas publicitarias de alto rendimiento en Meta, Google y TikTok con analítica de conversiones.',
    iconName: 'Megaphone'
  },
  {
    id: 'dev-cloud',
    title: 'Desarrollo de Software, Lenguajes & Bases de Datos',
    subtitle: 'Lenguajes de programación modernos, bases de datos relacionales y NoSQL, APIs, cloud computing y despliegues de alto rendimiento.',
    iconName: 'Globe'
  },
  {
    id: 'ai',
    title: 'Inteligencia Artificial & Modelos Generativos',
    subtitle: 'Suite de IA generativa de vanguardia, ingeniería de prompts, LLMs y flujos de automatización para acelerar la producción de software, diseño y marketing.',
    iconName: 'Cpu'
  },
  {
    id: 'video-motion',
    title: 'Edición de Video, Motion Graphics & Audio',
    subtitle: 'Edición audiovisual comercial, animación publicitaria, efectos visuales, ritmos para redes sociales y masterización de sonido.',
    iconName: 'Video'
  },
  {
    id: '3d-modeling',
    title: 'Modelado 3D, Texturizado & Renderizado',
    subtitle: 'Modelado tridimensional fotorrealista para envases farmacéuticos, productos cosméticos, stands y visualización arquitectónica.',
    iconName: 'Box'
  },
  {
    id: 'productivity',
    title: 'Productividad, Google Workspace & Microsoft Office',
    subtitle: 'Suites ofimáticas completas en la nube y escritorio, plataformas de gestión ágil de proyectos y comunicación corporativa.',
    iconName: 'CheckSquare'
  },
  {
    id: 'ides-tools',
    title: 'IDEs, Editores & Herramientas de Desarrollo',
    subtitle: 'Entornos de desarrollo integrados, herramientas de depuración, control de versiones y clientes de pruebas de APIs.',
    iconName: 'Code'
  }
];

export const SOFTWARE_TOOLS: SoftwareTool[] = [
  // 1. DISEÑO GRÁFICO, UI/UX & IDENTIDAD VISUAL
  // Adobe Creative Cloud Suite
  { name: "Adobe Photoshop", category: "design", categoryName: "Edición & Retoque Pro", icon: "logos:adobe-photoshop", slug: "photoshop", level: 98, experience: "11 años", color: "#31A8FF", highlight: true, description: "Composición fotográfica, retoque comercial de pieles y arte publicitario." },
  { name: "Adobe Illustrator", category: "design", categoryName: "Diseño Vectorial & Identidad", icon: "logos:adobe-illustrator", slug: "illustrator", level: 97, experience: "11 años", color: "#FF9A00", highlight: true, description: "Logotipos, packaging, tipografía vectorial y manuales de marca normativos." },
  { name: "Adobe InDesign", category: "design", categoryName: "Editorial & Manuales de Marca", icon: "logos:adobe-indesign", slug: "indesign", level: 92, experience: "8+ años", color: "#FF3366", description: "Diagramación editorial multipágina, catálogos y preparación para imprenta." },
  { name: "Adobe XD", category: "design", categoryName: "Prototipado de Interfaces", icon: "logos:adobe-xd", slug: "adobe-xd", level: 92, experience: "6+ años", color: "#FF61F6", description: "Flujos de pantallas y wireframes para aplicaciones y sitios web." },
  { name: "Adobe Acrobat Pro", category: "design", categoryName: "Preprensa & Archivos Maestros", icon: "logos:adobe-acrobat", slug: "acrobat", level: 95, experience: "9+ años", color: "#FF0000", description: "Separación de color CMYK, marcas de corte y PDFs de alta resolución para plotters." },
  // Figma
  { name: "Figma", category: "design", categoryName: "UI/UX & Design Systems", icon: "logos:figma", slug: "figma", level: 95, experience: "6+ años", color: "#F24E1E", highlight: true, description: "Prototipado interactivo, auto-layout, componentes y handover de desarrollo." },

  // 2. MARKETING DIGITAL, ANALÍTICA DE TRÁFICO & PUBLICIDAD
  // Meta
  { name: "Meta Ads (Facebook & Instagram)", category: "marketing", categoryName: "Publicidad Digital & Campañas", icon: "logos:meta-icon", slug: "meta-ads", level: 97, experience: "8+ años", color: "#0668E1", highlight: true, description: "Segmentación de audiencias, pruebas A/B, píxel de conversión y ROAS." },
  // Google Ads & Analytics
  { name: "Google Ads", category: "marketing", categoryName: "Campañas Search, Display & YouTube", icon: "logos:google-ads", slug: "google-ads", level: 93, experience: "7+ años", color: "#4285F4", highlight: true, description: "Palabras clave de alta intención, anuncios de búsqueda y remarketing." },
  { name: "Google Analytics 4 (GA4)", category: "marketing", categoryName: "Analítica & Embudos de Conversión", icon: "logos:google-analytics", slug: "ga4", level: 92, experience: "6+ años", color: "#E37400", highlight: true, description: "Eventos personalizados, mapas de comportamiento y atribución." },
  // ByteDance
  { name: "TikTok Ads Manager", category: "marketing", categoryName: "Publicidad de Alto Rendimiento", icon: "simple-icons:tiktok", slug: "tiktok-ads", level: 90, experience: "4+ años", color: "#FFFFFF", description: "Anuncios nativos dinámicos y formatos de video vertical de engagement." },
  // Email & Social Management
  { name: "Mailchimp & Brevo", category: "marketing", categoryName: "Email Marketing & Automatización", icon: "logos:mailchimp-freddie", slug: "mailchimp", level: 92, experience: "6+ años", color: "#FFE01B", description: "Secuencias automáticas de bienvenida, newsletters y segmentación." },
  { name: "Metricool & Hootsuite", category: "marketing", categoryName: "Planificación & Reportes Social", icon: "logos:hootsuite", slug: "metricool", level: 95, experience: "7+ años", color: "#000000", description: "Programación multicanal, benchmarking de competencia y reportes de KPIs." },

  // 3. DESARROLLO DE SOFTWARE, LENGUAJES & BASES DE DATOS
  // Core Web & Languages
  { name: "TypeScript", category: "dev-cloud", categoryName: "Lenguaje Tipado para Web & API", icon: "logos:typescript-icon", slug: "typescript", level: 95, experience: "6+ años", color: "#3178C6", highlight: true, description: "Tipado estático robusto, interfaces escalables y arquitectura para frontend y backend." },
  { name: "JavaScript (ES6+)", category: "dev-cloud", categoryName: "Lenguaje de Programación Web", icon: "logos:javascript", slug: "javascript", level: 96, experience: "8+ años", color: "#F7DF1E", highlight: true, description: "Programación asíncrona, manipulación del DOM, closures y arquitecturas modulares." },
  { name: "HTML5 & CSS3 / Tailwind", category: "dev-cloud", categoryName: "Estructura Web & Estilos Modernos", icon: "logos:tailwindcss-icon", slug: "html5-tailwind", level: 99, experience: "11 años", color: "#06B6D4", highlight: true, description: "Etiquetado semántico, accesibilidad WCAG y diseño responsive con Tailwind CSS." },
  { name: "Python", category: "dev-cloud", categoryName: "Backend, Scripts & IA", icon: "logos:python", slug: "python", level: 90, experience: "5+ años", color: "#3776AB", highlight: true, description: "Automatizaciones, scripting, procesamiento de datos y backend con FastAPI/Django." },
  { name: "PHP & WordPress", category: "dev-cloud", categoryName: "Desarrollo Backend Dinámico", icon: "logos:php", slug: "php", level: 92, experience: "8+ años", color: "#777BB4", description: "Desarrollo backend dinámico, integración con CMS, APIs y bases de datos MySQL." },
  { name: "SQL", category: "dev-cloud", categoryName: "Consultas & Modelado de Datos", icon: "logos:mysql-icon", slug: "sql", level: 94, experience: "8+ años", color: "#4479A1", highlight: true, description: "Consultas complejas, joins indexados, optimización de esquemas y triggers." },
  { name: "Go (Golang)", category: "dev-cloud", categoryName: "Servicios Cloud & APIs Concurrencia", icon: "logos:go", slug: "golang", level: 84, experience: "3+ años", color: "#00ADD8", description: "Microservicios ultraveloces, concurrencia nativa con goroutines y APIs REST/gRPC." },
  { name: "Rust", category: "dev-cloud", categoryName: "Sistemas & Alto Rendimiento", icon: "simple-icons:rust", slug: "rust", level: 82, experience: "2+ años", color: "#FFFFFF", description: "Seguridad de memoria, concurrencia y desarrollo de microservicios de alto rendimiento." },
  { name: "C# / .NET", category: "dev-cloud", categoryName: "Servicios Empresariales & Backend", icon: "logos:c-sharp", slug: "csharp", level: 85, experience: "4+ años", color: "#239120", description: "Arquitecturas empresariales con .NET Core, APIs y servicios backend robustos." },
  { name: "C++", category: "dev-cloud", categoryName: "Lenguaje de Alto Rendimiento", icon: "logos:c-plusplus", slug: "cpp", level: 80, experience: "3+ años", color: "#00599C", description: "Algoritmos eficientes, programación orientada a objetos y estructuras de datos." },
  { name: "Swift & Kotlin", category: "dev-cloud", categoryName: "Desarrollo Móvil iOS & Android", icon: "logos:swift", slug: "mobile-dev", level: 84, experience: "3+ años", color: "#F05138", description: "Desarrollo de interfaces y lógica para aplicaciones nativas y móviles." },
  { name: "Bash & Linux Terminal", category: "dev-cloud", categoryName: "Automatización de Servidores", icon: "logos:bash-icon", slug: "bash-lang", level: 90, experience: "7+ años", color: "#4EAA25", description: "Scripts de despliegue, tareas programadas con cron y gestión de servidores Linux." },

  // Bases de Datos & ORMs
  { name: "PostgreSQL", category: "dev-cloud", categoryName: "Base de Datos Relacional SQL", icon: "logos:postgresql", slug: "postgresql", level: 94, experience: "6+ años", color: "#4169E1", highlight: true, description: "Consultas avanzadas, RLS (Row Level Security), índices GiST/GIN y transacciones ACID." },
  { name: "Supabase (Postgres & Auth)", category: "dev-cloud", categoryName: "BaaS Postgres, Auth & Realtime", icon: "logos:supabase-icon", slug: "supabase", level: 95, experience: "4+ años", color: "#3ECF8E", highlight: true, description: "Postgres alojado en la nube con Edge Functions, almacenamiento de archivos y autenticación." },
  { name: "MySQL & MariaDB", category: "dev-cloud", categoryName: "Bases de Datos Relacionales", icon: "logos:mysql", slug: "mysql", level: 94, experience: "8+ años", color: "#4479A1", highlight: true, description: "Gestión de bases de datos relacionales para aplicaciones web y sistemas de inventario." },
  { name: "MongoDB", category: "dev-cloud", categoryName: "Base de Datos NoSQL en Documentos", icon: "logos:mongodb-icon", slug: "mongodb", level: 90, experience: "5+ años", color: "#47A248", description: "Esquemas flexibles JSON/BSON, agregaciones complejas y escalabilidad horizontal." },
  { name: "Redis", category: "dev-cloud", categoryName: "Base de Datos en Memoria & Caché", icon: "logos:redis", slug: "redis", level: 88, experience: "4+ años", color: "#DC382D", description: "Caché de alta velocidad, colas de mensajes y gestión de sesiones en tiempo real." },
  { name: "SQLite", category: "dev-cloud", categoryName: "Base de Datos Embebida Ligera", icon: "logos:sqlite", slug: "sqlite", level: 92, experience: "6+ años", color: "#003B57", description: "Persistencia local rápida sin servidor para aplicaciones móviles, utilidades y tests." },
  { name: "Firebase (Firestore)", category: "dev-cloud", categoryName: "Base de Datos en Tiempo Real NoSQL", icon: "logos:firebase", slug: "firebase", level: 90, experience: "4+ años", color: "#FFCA28", description: "Sincronización en vivo de documentos, autenticación y reglas de seguridad de datos." },
  { name: "Prisma & Drizzle ORM", category: "dev-cloud", categoryName: "ORMs TypeScript Type-Safe", icon: "logos:prisma", slug: "prisma-drizzle", level: 92, experience: "4+ años", color: "#2D3748", description: "Migraciones automáticas, tipado estricto extremo y cliente de consultas moderno." },

  // Frameworks & Infraestructura Cloud
  { name: "Next.js (App Router)", category: "dev-cloud", categoryName: "Framework React Full-Stack", icon: "simple-icons:nextdotjs", slug: "nextjs", level: 96, experience: "5+ años", color: "#FFFFFF", highlight: true, description: "Server Components, API Routes, SSR y optimización para producción." },
  { name: "Cloudflare", category: "dev-cloud", categoryName: "CDN, DNS, WAF & Edge Security", icon: "logos:cloudflare-icon", slug: "cloudflare", level: 92, experience: "5+ años", color: "#F38020", highlight: true, description: "Protección DDoS, SSL, WAF, enrutamiento rápido y Cloudflare Workers." },
  { name: "Vercel", category: "dev-cloud", categoryName: "Plataforma CI/CD & Serverless", icon: "simple-icons:vercel", slug: "vercel", level: 95, experience: "5+ años", color: "#FFFFFF", highlight: true, description: "Despliegues automáticos, analítica web y Serverless Functions." },
  { name: "Hostinger", category: "dev-cloud", categoryName: "Hosting Cloud, VPS & SysAdmin", icon: "simple-icons:hostinger", slug: "hostinger", level: 95, experience: "7+ años", color: "#673AB7", description: "Configuración de servidores VPS, dominios, SSL y despliegues web." },
  { name: "WordPress & Elementor", category: "dev-cloud", categoryName: "CMS & Portales Corporativos", icon: "logos:wordpress-icon", slug: "wordpress", level: 96, experience: "9+ años", color: "#21759B", description: "Desarrollo de sitios web corporativos y tiendas de alta velocidad." },
  { name: "GitHub & Git", category: "dev-cloud", categoryName: "Control de Versiones & Repositorios", icon: "simple-icons:github", slug: "github", level: 94, experience: "7+ años", color: "#FFFFFF", description: "Gestión de ramas, commits limpios y colaboración en equipo." },

  // 4. INTELIGENCIA ARTIFICIAL & MODELOS GENERATIVOS (CONSOLIDADOS POR COMPAÑÍA SIN DUPLICADOS)
  { name: "OpenAI (ChatGPT-4o & Codex)", category: "ai", categoryName: "LLMs, Canvas & Razonamiento", icon: "simple-icons:openai", slug: "openai", level: 98, experience: "4+ años", color: "#FFFFFF", highlight: true, description: "GPT-4o, razonamiento avanzado, Canvas y generación de contenido estratégico." },
  { name: "Google Gemini & AI Studio", category: "ai", categoryName: "Modelos Multimodales & Prototipado", icon: "logos:google-gemini", slug: "gemini", level: 98, experience: "3+ años", color: "#3B82F6", highlight: true, description: "Gemini 1.5/2.0 Pro & Flash, análisis multimodal y razonamiento lógico profundo." },
  { name: "Anthropic Claude 3.7 (Sonnet & MCP)", category: "ai", categoryName: "Arquitectura de Software & Agentes", icon: "logos:claude-icon", slug: "claude", level: 98, experience: "3+ años", color: "#D97706", highlight: true, description: "Claude 3.5 Sonnet / 3.7, arquitectura de software y análisis contextual extenso." },
  { name: "Midjourney AI", category: "ai", categoryName: "Generación Visual Hiperrealista", icon: "simple-icons:midjourney", slug: "midjourney", level: 97, experience: "3+ años", color: "#FFFFFF", highlight: true, description: "V6.0, generación de assets publicitarios, texturas y concept art comercial." },
  { name: "Cursor AI", category: "ai", categoryName: "Editor de Código con IA Integrada", icon: "simple-icons:cursor", slug: "cursor-ai", level: 96, experience: "2+ años", color: "#FFFFFF", highlight: true, description: "Flujos de desarrollo impulsados por IA sobre el codebase completo." },
  { name: "v0 by Vercel", category: "ai", categoryName: "Generación de UI & Componentes", icon: "simple-icons:vercel", slug: "v0", level: 92, experience: "2+ años", color: "#FFFFFF", description: "Prototipado rápido de componentes modernos en React y Tailwind CSS." },
  { name: "Perplexity AI", category: "ai", categoryName: "Investigación & Búsqueda Neuronal", icon: "simple-icons:perplexity", slug: "perplexity", level: 94, experience: "2+ años", color: "#FFFFFF", description: "Búsqueda avanzada con citas y análisis en tiempo real." },
  { name: "ElevenLabs AI", category: "ai", categoryName: "Síntesis de Voz & Audio IA", icon: "simple-icons:elevenlabs", slug: "elevenlabs", level: 93, experience: "2+ años", color: "#FFFFFF", description: "Clonación y generación de voz ultrarrealista para contenido publicitario." },

  // 5. EDICIÓN DE VIDEO, MOTION GRAPHICS & AUDIO (AGRUPADOS POR COMPAÑÍA)
  // Adobe Video Suite
  { name: "Adobe Premiere Pro", category: "video-motion", categoryName: "Edición Audiovisual Comercial", icon: "logos:adobe-premiere", slug: "premiere", level: 94, experience: "8+ años", color: "#EA77FF", highlight: true, description: "Corte rítmico, corrección de color Lumetri, sincronización multicámara y formatos optimizados para difusión masiva." },
  { name: "Adobe After Effects", category: "video-motion", categoryName: "Motion Graphics & VFX Publicitarios", icon: "logos:adobe-after-effects", slug: "after-effects", level: 92, experience: "8+ años", color: "#9999FF", highlight: true, description: "Animación de logotipos, tipografías cinemáticas, intros de marca y efectos especiales para comerciales de TV y redes." },
  { name: "Adobe Audition", category: "video-motion", categoryName: "Masterización & Limpieza de Audio", icon: "logos:adobe-audition", slug: "audition", level: 88, experience: "5+ años", color: "#00E4BB", description: "Restauración de audio, eliminación de ruido de fondo, ecualización vocal y mezcla multitrack para locuciones publicitarias." },
  // Blackmagic Design
  { name: "DaVinci Resolve", category: "video-motion", categoryName: "Color Grading & Postproducción Pro", icon: "simple-icons:davinciresolve", slug: "davinci", level: 88, experience: "4+ años", color: "#E84D31", description: "Gradación de color avanzada con nodos, corrección tonal cinematográfica y postproducción de alta definición." },
  // ByteDance
  { name: "CapCut Pro", category: "video-motion", categoryName: "Edición Vertical Dinámica & Viral", icon: "simple-icons:capcut", slug: "capcut", level: 96, experience: "4+ años", color: "#FFFFFF", highlight: true, description: "Edición de ritmo rápido para TikTok, Instagram Reels y YouTube Shorts, subtitulado automático y efectos visuales de retención." },

  // 6. MODELADO 3D, TEXTURIZADO & RENDERIZADO
  { name: "Cinema 4D & Octane", category: "3d-modeling", categoryName: "Modelado 3D & Render Fotorrealista", icon: "simple-icons:cinema4d", slug: "cinema4d", level: 90, experience: "6+ años", color: "#FFFFFF", highlight: true, description: "Renders fotorrealistas de productos farmacéuticos, cosméticos, botellas, materiales físicamente precisos e iluminación Octane." },
  { name: "Blender 3D", category: "3d-modeling", categoryName: "Modelado Poligonal & Cycles/Eevee", icon: "logos:blender", slug: "blender", level: 88, experience: "5+ años", color: "#F5792A", description: "Visualización arquitectónica de fachadas comerciales, estaciones de servicio, modelado volumétrico y renders con Cycles/Eevee." },
  { name: "KeyShot 3D", category: "3d-modeling", categoryName: "Renderizado Rápido de Producto", icon: "simple-icons:keyshot", slug: "keyshot", level: 86, experience: "4+ años", color: "#FFFFFF", description: "Mockups volumétricos de empaques, botellas médicas y displays para presentaciones ejecutivas a clientes." },

  // 7. PRODUCTIVIDAD, GOOGLE WORKSPACE & MICROSOFT OFFICE (AGRUPADOS POR SUITE)
  // Google Workspace
  { name: "Google Workspace Suite", category: "productivity", categoryName: "Suite Cloud Corporativa Integral", icon: "logos:google-icon", slug: "google-workspace", level: 99, experience: "11 años", color: "#EA4335", highlight: true, description: "Administración integral de cuentas de empresa, dominios corporativos, flujos colaborativos y almacenamiento en la nube." },
  { name: "Google Drive & Cloud", category: "productivity", categoryName: "Almacenamiento Cloud & Archivos", icon: "logos:google-drive", slug: "google-drive", level: 99, experience: "11 años", color: "#1FA463", description: "Organización de repositorios de marca, activos gráficos pesados y gestión de permisos compartidos." },
  { name: "Google Docs & Sheets", category: "productivity", categoryName: "Documentos, Hojas de Cálculo & Datos", icon: "vscode-icons:file-type-excel", slug: "google-docs-sheets", level: 98, experience: "11 años", color: "#0F9D58", description: "Redacción de propuestas comerciales, briefs de diseño, fórmulas complejas y presupuestos." },
  { name: "Google Slides & Forms", category: "productivity", categoryName: "Presentaciones Pitch & Encuestas", icon: "vscode-icons:file-type-powerpoint", slug: "google-slides-forms", level: 97, experience: "11 años", color: "#F4B400", description: "Diseño de presentaciones comerciales de alto impacto y captación de clientes." },
  { name: "Gmail & Google Meet", category: "productivity", categoryName: "Correo Profesional & Videollamadas", icon: "logos:google-gmail", slug: "gmail-meet", level: 99, experience: "11 años", color: "#EA4335", description: "Gestión de comunicaciones corporativas, filtros avanzados y videoconferencias ejecutivas." },
  { name: "Google Calendar", category: "productivity", categoryName: "Planificación & Agendas de Entrega", icon: "logos:google-calendar", slug: "google-calendar", level: 98, experience: "11 años", color: "#4285F4", description: "Organización de cronogramas de entrega, hitos de proyectos y sincronización horaria internacional." },

  // Microsoft 365
  { name: "Microsoft 365 / Office Suite", category: "productivity", categoryName: "Suite Ofimática Empresarial", icon: "logos:microsoft-icon", slug: "microsoft-office", level: 98, experience: "11 años", color: "#D83B01", highlight: true, description: "Dominio exhaustivo del ecosistema Microsoft para reportes financieros, presentaciones y contratos legales." },
  { name: "Microsoft Excel & Word", category: "productivity", categoryName: "Hojas de Cálculo & Documentos Pro", icon: "vscode-icons:file-type-excel", slug: "excel-word", level: 98, experience: "11 años", color: "#107C41", highlight: true, description: "Tablas dinámicas, fórmulas avanzadas y maquetación de contratos comerciales." },
  { name: "Microsoft PowerPoint", category: "productivity", categoryName: "Presentaciones Corporativas de Ventas", icon: "vscode-icons:file-type-powerpoint", slug: "powerpoint", level: 97, experience: "11 años", color: "#C43E1C", description: "Diseño visual de diapositivas maestras, animaciones sutiles y portafolios ejecutivos para licitaciones." },
  { name: "Microsoft Outlook & Teams", category: "productivity", categoryName: "Gestión de Correo & Comunicación", icon: "logos:microsoft-teams", slug: "outlook-teams", level: 95, experience: "10+ años", color: "#6264A7", description: "Manejo de cuentas corporativas Exchange y canales de trabajo en vivo." },
  { name: "Microsoft OneDrive", category: "productivity", categoryName: "Sincronización Empresarial Segura", icon: "logos:microsoft-onedrive", slug: "onedrive", level: 94, experience: "8+ años", color: "#0078D4", description: "Respaldo continuo de proyectos, versiones históricas de archivos y sincronización multi-dispositivo." },

  // Gestión Ágil & Equipos
  { name: "Slack", category: "productivity", categoryName: "Comunicación de Equipos Ágiles", icon: "logos:slack-icon", slug: "slack", level: 96, experience: "7+ años", color: "#4A154B", highlight: true, description: "Canales de trabajo, integraciones de bots, alertas y colaboración remota en tiempo real." },
  { name: "Notion", category: "productivity", categoryName: "Documentación & Wikis de Equipo", icon: "simple-icons:notion", slug: "notion", level: 96, experience: "6+ años", color: "#FFFFFF", highlight: true, description: "Bases de datos de proyectos, guías de estilo y roadmaps." },
  { name: "Linear", category: "productivity", categoryName: "Gestión Ágil de Tareas & Sprints", icon: "simple-icons:linear", slug: "linear", level: 92, experience: "3+ años", color: "#FFFFFF", highlight: true, description: "Planificación de ciclos de software, priorización e incidencias técnicas." },
  { name: "Trello & Jira", category: "productivity", categoryName: "Tableros Kanban & Scrum", icon: "logos:trello", slug: "trello-jira", level: 94, experience: "8+ años", color: "#0079BF", description: "Seguimiento visual del flujo de trabajo y cumplimiento de plazos." },

  // 8. IDES, EDITORES & HERRAMIENTAS DE DESARROLLO
  { name: "VS Code (Visual Studio Code)", category: "ides-tools", categoryName: "Editor Principal de Código", icon: "logos:visual-studio-code", slug: "vscode", level: 98, experience: "8+ años", color: "#007ACC", highlight: true, description: "Entorno completo con extensiones de depuración, snippets y linting." },
  { name: "WebStorm (JetBrains)", category: "ides-tools", categoryName: "IDE Profesional JavaScript", icon: "logos:webstorm", slug: "webstorm", level: 88, experience: "4+ años", color: "#00CDD7", description: "Refactorización avanzada y análisis de código estático profundo." },
  { name: "Postman API Client", category: "ides-tools", categoryName: "Pruebas & Documentación de APIs", icon: "logos:postman-icon", slug: "postman", level: 90, experience: "5+ años", color: "#FF6C37", description: "Pruebas de endpoints REST, simulación de respuestas y colecciones." },
  { name: "Docker Desktop", category: "ides-tools", categoryName: "Contenedores & Virtualización", icon: "logos:docker-icon", slug: "docker", level: 85, experience: "3+ años", color: "#2496ED", description: "Contenedores reproducibles para entornos de desarrollo y staging." },
  { name: "GitKraken & Git CLI", category: "ides-tools", categoryName: "Control de Versiones Gráfico & CLI", icon: "logos:gitkraken", slug: "gitkraken", level: 92, experience: "6+ años", color: "#179287", description: "Visualización de ramas complejas, resolución de conflictos y rebase interactivo." },
  { name: "Terminal, Bash & Linux", category: "ides-tools", categoryName: "Línea de Comandos & Shell", icon: "logos:bash-icon", slug: "bash", level: 90, experience: "7+ años", color: "#4EAA25", description: "Comandos UNIX, automatizaciones y scripts de despliegue." },
];

export const SKILL_CARDS: SkillCard[] = [
  {
    id: "marketing-strategy",
    title: "Marketing Digital & Estrategia Publicitaria",
    tagline: "Campañas de alto rendimiento, optimización de ROI, pauta en Meta & Google y análisis de conversión.",
    iconName: "Megaphone",
    category: "Marketing & Crecimiento",
    level: 97,
    image: "/skills/marketing.jpg",
    description: "Diseño y ejecuto estrategias publicitarias de principio a fin: segmentación de audiencias de alto valor, creación de anuncios persuasivos (copywriting + diseño), embudos de conversión, test A/B y análisis de métricas en tiempo real.",
    keyPoints: [
      "Campañas digitales optimizadas en Meta Ads (Facebook/Instagram), Google Ads y TikTok",
      "Embudos de venta, retargeting dinámico y automatización de email marketing",
      "Estrategia de contenidos, grillas editoriales y calendarios de publicación",
      "Analítica con Google Analytics 4, medición de ROAS y KPIs comerciales"
    ],
    toolsUsed: ["Meta Ads Manager", "Google Ads", "Google Analytics 4", "Mailchimp", "Metricool", "Slack", "Linear"],
    highlights: ["Visa del Norte (+45% pedidos)", "Trapbowton Music Ads (+500K Views)", "LUMA Salud Visual (+300 citas)", "JIRM Consulting"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  },
  {
    id: "branding",
    title: "Branding & Identidad Corporativa",
    tagline: "Creación de marcas memorables desde el concepto visual hasta el packaging retail.",
    iconName: "Palette",
    category: "Diseño Estratégico",
    level: 96,
    image: "/skills/branding.jpg",
    description: "Diseño sistemas de identidad completos que comunican solidez y distinción: logotipos, manuales de marca, paletas cromáticas, empaques para retail y aplicaciones en múltiples soportes.",
    keyPoints: [
      "Diseño y rediseño de marcas corporativas y comerciales",
      "Packaging y etiquetado para productos de consumo masivo",
      "Manuales de identidad corporativa y brandbooks normativos",
      "Guías de estilo para aplicaciones digitales y físicas"
    ],
    toolsUsed: ["Adobe Illustrator", "Photoshop", "InDesign", "Midjourney AI", "Figma"],
    highlights: ["Miel Norteña", "Gumo Focus Drink", "Bar C Barcelona", "Forever Mane Haircare"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  },
  {
    id: "ui-ux",
    title: "Diseño UI/UX & Desarrollo de Software",
    tagline: "Interfaces digitales centradas en el usuario, lenguajes modernos y bases de datos escalables.",
    iconName: "Layout",
    category: "Software & Web",
    level: 95,
    image: "/skills/uiux.jpg",
    description: "Conceptualizo e implemento interfaces y aplicaciones bancarias, e-commerce y plataformas corporativas, combinando diseño en Figma con desarrollo full-stack en TypeScript, Next.js, PostgreSQL, Supabase y Tailwind CSS.",
    keyPoints: [
      "Diseño de interfaces móviles y web en Figma & Adobe XD",
      "Desarrollo frontend y backend en TypeScript, JavaScript, Python y Next.js",
      "Bases de datos relacionales y NoSQL (PostgreSQL, Supabase, MySQL, Redis, Firestore)",
      "Design systems modulares y componentes accesibles de alto rendimiento"
    ],
    toolsUsed: ["Figma", "Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "Supabase", "VS Code", "Cursor"],
    highlights: ["Banco BHD Mobile App UI", "Carlotta Fashion Web", "Visa Pork Cuts Landing"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  },
  {
    id: "cybersecurity",
    title: "Ciberseguridad & Protección Digital",
    tagline: "Seguridad perimetral, Cloudflare WAF, buenas prácticas OWASP, protección de datos y hardening.",
    iconName: "ShieldCheck",
    category: "Seguridad Informática & Infraestructura",
    level: 94,
    image: "/skills/cybersecurity.jpg",
    description: "Implementación integral de protocolos de seguridad en la nube y aplicaciones: mitigación DDoS, cortafuegos de aplicaciones web (WAF) con Cloudflare, cifrado SSL/TLS, seguridad en bases de datos con RLS, autenticación segura y cumplimiento de estándares de privacidad.",
    keyPoints: [
      "Configuración avanzada de Cloudflare WAF, reglas de firewall y protección contra ataques DDoS",
      "Implementación de directrices de seguridad OWASP Top 10 en arquitecturas web y APIs",
      "Row Level Security (RLS) en PostgreSQL/Supabase y gestión de privilegios de acceso (RBAC)",
      "Gestión de certificados SSL/TLS, cabeceras de seguridad HTTP (HSTS, CSP) y protección de credenciales"
    ],
    toolsUsed: ["Cloudflare WAF", "PostgreSQL RLS", "SSL/TLS Hardening", "OWASP Standards", "Supabase Auth", "GitHub Security Scanning", "Nginx Security"],
    highlights: ["Blindaje WAF Cloudflare", "Cifrado & Control de Accesos RLS", "Hardening de Infraestructura Web"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  },
  {
    id: "ai-workflows",
    title: "IA Generativa, LLMs & Automatización",
    tagline: "Dominio de Gemini, ChatGPT, Claude 3.5/3.7, Codex, Claude Desktop y flujos con IA.",
    iconName: "Cpu",
    category: "Inteligencia Artificial",
    level: 98,
    image: "/skills/ai-workflows.jpg",
    description: "Implementación integral de modelos de lenguaje e inteligencia artificial en la creación de software, interfaces y campañas: Google Gemini (Pro / Flash / AI Studio), OpenAI (ChatGPT-4o, Codex, Canvas), Anthropic Claude (Claude 3.5/3.7, Claude Desktop con MCP), Cursor y Midjourney.",
    keyPoints: [
      "Ingeniería de prompts avanzada y context caching para Gemini, ChatGPT y Claude",
      "Desarrollo acelerado de software con Cursor, Codex, Claude Desktop y v0",
      "Generación y refinamiento de código TypeScript, Next.js, APIs y Tailwind",
      "Producción de assets visuales hiperrealistas con Midjourney V6"
    ],
    toolsUsed: ["Google Gemini (AI Studio)", "ChatGPT 4.0 / Codex", "Claude 3.5 / Claude Desktop", "Midjourney AI", "Cursor AI", "Supabase", "Next.js"],
    highlights: ["Generación de assets publicitarios", "Desarrollo full-stack asistido", "Automatización de flujos de trabajo"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  },
  {
    id: "3d-render",
    title: "Modelado 3D & Visualización",
    tagline: "Visualizaciones 3D fotorrealistas para productos farmacéuticos y arquitectura.",
    iconName: "Box",
    category: "3D & Visualización",
    level: 90,
    image: "/skills/3d-render.jpg",
    description: "Modelado y renderizado tridimensional para prototipos de productos médicos, cosméticos, botellas, estaciones de servicio arquitectónicas y tipografía volumétrica para eventos.",
    keyPoints: [
      "Renders de producto médico y farmacéutico de alta fidelidad",
      "Visualización arquitectónica diurna/nocturna de fachadas",
      "Tipografía 3D cromada y volumétrica para publicidad urbana",
      "Mockups realistas para empaques y presentaciones a clientes"
    ],
    toolsUsed: ["Cinema 4D", "Blender 3D", "Photoshop", "After Effects"],
    highlights: ["Immuglo IV Bottle 3D", "Laboratorios Síntesis Line", "Gasolinera Petronan"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  },
  {
    id: "print-production",
    title: "Producción Publicitaria, Plotters & Rotulación",
    tagline: "Operación de plotters de impresión y corte, rotulación de vinilos, preprensa y producción física.",
    iconName: "Printer",
    category: "Producción & Impresión",
    level: 96,
    image: "/skills/print-production.jpg",
    description: "Dominio integral de procesos de taller y producción gráfica publicitaria: calibración y operación de plotters de impresión de gran formato (solventes, UV, látex y eco-solventes), plotters de corte de vinil computarizado, rotulación vehicular y comercial, laminado, corte térmico, señalética corporativa y preparación técnica de archivos en preprensa (CMYK, sobreimpresión, troqueles y rebase).",
    keyPoints: [
      "Operación y calibración de plotters de impresión digital de gran formato (Roland, Mimaki, Epson)",
      "Corte de vinil computarizado, vectorización de troqueles, descarte y rotulación comercial/vehicular",
      "Preparación de archivos para preprensa: perfiles de color CMYK, marcas de corte, rebase y resolución",
      "Acabados de taller: laminación en frío/calor, colocación de ojales, montaje sobre foam, PVC y acrílico"
    ],
    toolsUsed: ["Plotters Gran Formato", "Plotter Corte de Vinil", "Adobe Illustrator", "FlexiSIGN / RIP Software", "Laminadoras Industriales", "Termofijadoras", "Perfiles de Color CMYK"],
    highlights: ["Rotulación de Flotillas Vehiculares", "Señalética Monumental Vía Pública", "Vallas Urbanas & Mupis Gran Formato"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  },
  {
    id: "photography",
    title: "Fotografía Comercial & Gran Formato",
    tagline: "Captura profesional en estudio y producción para vallas y vía pública.",
    iconName: "Camera",
    category: "Producción Visual",
    level: 93,
    image: "/skills/photography.jpg",
    description: "Dirección y captura de fotografía comercial, de producto y retratos, junto con la preparación técnica para impresión a gran escala (vallas, mupis, señalética y plotters).",
    keyPoints: [
      "Fotografía de producto en estudio con iluminación profesional",
      "Retoque digital avanzado de pieles y corrección de color",
      "Diseño para vallas gigantes de carretera y paradas de autobús",
      "Manejo de equipos de impresión de gran formato y plotters"
    ],
    toolsUsed: ["Cámaras Profesionales", "Photoshop", "Lightroom Pro", "Illustrator"],
    highlights: ["Pipeline Modern Solutions Billboard", "Cortes Gold Mupis", "SED Photo Studio"],
    colorClass: "from-zinc-800 to-zinc-900 border-zinc-700 text-zinc-100"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "corambar-realty-group-logo",
    title: "Corambar Realty — Identidad & Logo",
    subtitle: "Diseño de Logotipo, Isotipo Arquitectónico & Estandarización de Marca",
    category: "branding",
    categoryLabel: "Diseño de Logo & Identidad",
    client: "Corambar Realty Group",
    year: "2024 - 2025",
    description: "Diseño y desarrollo integral de la identidad corporativa y logotipo para Corambar Realty Group, firma de desarrollo inmobiliario y corretaje de propiedades exclusivas. Fusión conceptual de horizontes arquitectónicos verticales con siluetas naturales y curvas geométricas, transmitiendo solidez financiera, elegancia contemporánea y confianza patrimonial.",
    challenge: "Crear una marca distintiva y atemporal para el competitivo sector de bienes raíces de alta gama, que comunique solidez estructural, perspectiva arquitectónica y exclusividad en cualquier escala o soporte publicitario.",
    solution: "Estructuración de un isotipo de geometría solar y volumetría arquitectónica vertical, combinado con tipografía corporativa de alta legibilidad, acabados limpios en positivo/negativo y optimización para rotulación comercial y material publicitario.",
    deliverables: [
      "Diseño de Logotipo & Isotipo Vectorial (SVG, PDF, AI, PNG)",
      "Variantes de Marca en Positivo, Negativo & Monocromático",
      "Manual de Construcción Geométrica & Área de Reserva",
      "Estandarización Gráfica para Señalética Inmobiliaria"
    ],
    tools: ["Adobe Illustrator", "Vectorización Matemática", "Photoshop", "InDesign"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "branding",
    accentColor: "#F59E0B",
    image: "/projects/corambar/corambar-gallery-1.webp",
    galleryImages: [
      "/projects/corambar/corambar-gallery-1.webp",
      "/projects/corambar/corambar-gallery-2.webp"
    ],
    hasCustomLogo: true,
    stats: [
      { label: "Disciplina", value: "Diseño de Logo" },
      { label: "Sector", value: "Bienes Raíces & Real Estate" },
      { label: "Formato", value: "Vectorial SVG / CMYK" }
    ]
  },
  {
    id: "club-med-collection-cap-tridente",
    title: "Club Med — Colección Tridente",
    subtitle: "Diseño de Merchandising Oficial, Colección de Gorras Tridente en 16 Colores & Producción Textil",
    category: "print",
    categoryLabel: "Merchandising & Diseño Textil",
    client: "Club Med Punta Cana",
    year: "2024 - 2025",
    description: "Dirección creativa, diseño técnico y desarrollo de la colección oficial de gorras 'Collection Cap Colors Tridente' para Club Med Punta Cana. Estandarización del icónico tridente bordado en 3D sobre 16 variantes cromáticas de alta gama (Navy, Forest Green, Coral, Mustard, Sand, Charcoal, Royal Blue, Burgundy, etc.), diseñadas para tiendas boutique de resorts y eventos exclusivos.",
    challenge: "Adaptar el prestigioso símbolo del tridente de Club Med a una línea completa de merchandising deportivo y lifestyle de lujo, manteniendo la precisión de bordado, contraste de color y fidelidad de marca en 16 combinaciones tonales.",
    solution: "Creación de especificaciones técnicas de preprensa y bordado de relieve 3D, selección de paletas textiles premium alineadas a los destinos tropicales de Club Med, y desarrollo de catálogo visual de 16 variantes para comercialización y producción en serie.",
    deliverables: [
      "Diseño y Ficha Técnica de Colección Textil (16 Variantes Cromáticas)",
      "Matriz de Bordado 3D de Alta Definición para Tridente Oficial",
      "Catálogo Visual de Producto para Tiendas Boutique Resort",
      "Estandarización de Etiquetas, Empaques y Mockups de Presentación"
    ],
    tools: ["Adobe Illustrator", "Bordado Técnico 3D", "Photoshop", "Preprensa Textil"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "merchandise",
    accentColor: "#38BDF8",
    image: "/projects/club-med/club-med-cap-01.webp",
    galleryImages: [
      "/projects/club-med/club-med-cap-01.webp",
      "/projects/club-med/club-med-cap-02.webp",
      "/projects/club-med/club-med-cap-03.webp",
      "/projects/club-med/club-med-cap-04.webp",
      "/projects/club-med/club-med-cap-05.webp",
      "/projects/club-med/club-med-cap-06.webp",
      "/projects/club-med/club-med-cap-07.webp",
      "/projects/club-med/club-med-cap-08.webp",
      "/projects/club-med/club-med-cap-09.webp",
      "/projects/club-med/club-med-cap-10.webp",
      "/projects/club-med/club-med-cap-11.webp",
      "/projects/club-med/club-med-cap-12.webp",
      "/projects/club-med/club-med-cap-13.webp",
      "/projects/club-med/club-med-cap-14.webp",
      "/projects/club-med/club-med-cap-15.webp",
      "/projects/club-med/club-med-cap-16.webp"
    ],
    hasCustomLogo: true,
    stats: [
      { label: "Variantes", value: "16 Colores Exclusivos" },
      { label: "Técnica", value: "Bordado 3D Tridente" },
      { label: "Aplicación", value: "Boutique Resort Merch" }
    ],
    relatedProjects: [
      {
        id: "la-boutique-club-med-ecommerce",
        title: "La Boutique — E-Commerce & En Vivo",
        subtitle: "Plataforma e-commerce oficial, personalizador textil en vivo y turnos de taller.",
        category: "E-Commerce & Software Web",
        image: "/projects/laboutique/laboutique-web-hero.webp"
      },
      {
        id: "big-print-punta-cana-brochure",
        title: "Big Print — Brochure Corporativo",
        subtitle: "Catálogo editorial y soluciones de impresión a gran escala.",
        category: "Editorial & Gran Formato",
        image: "/projects/bigprint/bigprint-brochure-page-01.webp"
      }
    ]
  },
  {
    id: "la-boutique-club-med-ecommerce",
    title: "La Boutique — E-Commerce & En Vivo",
    subtitle: "Plataforma E-Commerce Oficial, Personalizador de Prendas en Vivo, Gestión de Turnos & Panel Administrativo para Resorts Club Med",
    category: "web",
    categoryLabel: "E-Commerce & Sistema en Vivo",
    client: "Club Med (La Boutique RD)",
    year: "2024 - 2025",
    description: "Diseño y desarrollo integral de la plataforma e-commerce oficial (laboutiquerd.com), infraestructura de hosting cloud de alta velocidad, dominio corporativo y sistema avanzado de personalización en vivo para La Boutique de Club Med en sus resorts de Punta Cana y Michès (Playa Esmeralda / Bermuda Beach). La solución integra un catálogo comercial multilingüe (francés, inglés y español) con marcas premium (Banana Moon, Billabong, Havaianas, Collection 45 Club Med, Joyería Larimar), un módulo estrella interactivo 'Personaliza tu Camiseta' que permite a los huéspedes diseñar sus prendas en tiempo real, solicitar turnos de estampado y bordado en el taller del resort, dar seguimiento al estado de confección en vivo y recibir notificaciones de entrega. Además, cuenta con un potente panel administrativo para la gestión de inventario por destino, control de pedidos en línea, emisión de gift cards digitales (RD$2,500 a RD$15,000) y métricas de ventas en tiempo real.",
    challenge: "Desarrollar un ecosistema digital de compras moderno, fluido y adaptado al perfil internacional de los huéspedes de Club Med, integrando la venta de colecciones de boutique con una experiencia interactiva de personalización textil en vivo que agilice los turnos en taller y optimice la operación del equipo de ventas y confección.",
    solution: "Arquitectura e-commerce de alto rendimiento con diseño sofisticado y responsivo (escritorio y móvil), pasarela de pedidos en línea, simulador visual de personalización, sistema de tickets/turnos para el taller de estampado con tracking en vivo del proceso artesanal, y un dashboard administrativo para sincronizar inventarios y pedidos entre las boutiques de Punta Cana y Michès.",
    deliverables: [
      "Diseño y Desarrollo de Plataforma E-Commerce Oficial (laboutiquerd.com)",
      "Módulo Interactivo 'Personaliza tu Camiseta' con Personalización Textil en Vivo",
      "Sistema de Gestión de Turnos de Taller & Seguimiento de Proceso en Tiempo Real",
      "Panel Administrativo de Control de Pedidos, Inventarios por Resort & Métricas",
      "E-Commerce Multilingüe (FR / EN / ES) & Multimoneda Adaptativa",
      "Módulo de Gift Cards Digitales Club Med (RD$2,500 a RD$15,000)",
      "Infraestructura de Hosting Cloud Dedicado, Dominio & Certificado SSL"
    ],
    tools: ["Desarrollo E-Commerce & Web", "UI/UX & Interactive Customizer", "Panel Administrativo & Dashboard", "Hosting Cloud & CDN", "Adobe Illustrator & Photoshop", "Next.js & TypeScript", "Responsive Design"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "browser",
    accentColor: "#F59E0B",
    image: "/projects/laboutique/laboutique-web-hero.webp",
    galleryImages: [
      "/projects/laboutique/laboutique-web-desktop.webp",
      "/projects/laboutique/laboutique-web-mobile.webp"
    ],
    websiteUrl: "https://www.laboutiquerd.com/",
    hasCustomLogo: true,
    stats: [
      { label: "Plataforma", value: "laboutiquerd.com" },
      { label: "Modalidad", value: "E-Commerce + En Vivo" },
      { label: "Resorts", value: "Punta Cana & Michès" }
    ],
    relatedProjects: [
      {
        id: "waooo-tours-and-adventures-web",
        title: "Waooo Tours — Portal Web & Reservas",
        subtitle: "Portal web turístico, catálogo de excursiones y reservas.",
        category: "Desarrollo Web & Turismo",
        image: "/projects/waoootours/waoootours-web-hero.webp"
      },
      {
        id: "club-med-collection-cap-tridente",
        title: "Club Med — Colección Tridente",
        subtitle: "Merchandising oficial de gorras Tridente en 16 colores.",
        category: "Merchandising & Diseño Textil",
        image: "/projects/club-med/club-med-cap-01.webp"
      }
    ]
  },
  {
    id: "waooo-tours-and-adventures-web",
    title: "Waooo Tours — Portal Web & Reservas",
    subtitle: "Portal Web Turístico Oficial, Catálogo de Excursiones, Selección de Hoteles & Sistema de Reservas en Línea",
    category: "web",
    categoryLabel: "Desarrollo Web & Turismo",
    client: "Waooo Tours and Adventures Punta Cana",
    year: "2024 - 2025",
    description: "Diseño UI/UX y desarrollo web integral para Waooo Tours and Adventures Punta Cana (waoootoursandadventures.vercel.app), agencia especializada en tours premium y experiencias caribeñas en República Dominicana. La plataforma incluye una presentación inmersiva de la excursión estrella 'Isla Saona VIP Plus' (con lancha rápida, piscina natural de estrellas de mar, snorkeling y buffet criollo), catálogo interactivo de tours (Isla Saona Todo Incluido, Buggies por senderos tropicales, Santo Domingo Cultural), selector inteligente de zona de recogida por hotel (Bávaro, Punta Cana, Uvero Alto, Cap Cana, Bayahíbe, etc.), desglose detallado de itinerario horario (7:00 AM a 6:00 PM), guía de preparación para el viajero y sistema de reservas con conexión directa a WhatsApp y despliegue continuo en Vercel Cloud.",
    challenge: "Crear una presencia digital de alto impacto visual orientada a la conversión turística internacional que resalte la calidad y seguridad de las excursiones, facilitando a los turistas la consulta de itinerarios, inclusiones de comida/bebidas y la reserva directa desde dispositivos móviles o de escritorio.",
    solution: "Arquitectura web ligera y de carga ultrarrápida desarrollada en Next.js con Tailwind CSS y desplegada en la nube de Vercel. Interfaz optimizada para móviles con carruseles de destinos, filtros de hoteles para pickups, tarjetas de inclusiones visuales y botones flotantes de reserva instantánea.",
    deliverables: [
      "Diseño y Desarrollo de Portal Web Turístico (waoootoursandadventures.vercel.app)",
      "Arquitectura Responsiva Dual (Desktop & Mobile First)",
      "Módulo de Presentación de Tours Estrella & Catálogo de Excursiones",
      "Selector de Zonas de Recogida por Hotel (Punta Cana, Bávaro, Cap Cana, etc.)",
      "Cronograma de Itinerario en Tiempo Real & Guía de Preparación para el Turista",
      "Integración de Pasarela de Cotización & Reservas Directas vía WhatsApp",
      "Despliegue Continuo en Vercel Cloud Platform"
    ],
    tools: ["Desarrollo Web & UI/UX", "Next.js & TypeScript", "Tailwind CSS", "Vercel Cloud Deployment", "Diseño Adaptativo Móvil", "Optimización de Conversión Turística", "Adobe Photoshop"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "browser",
    accentColor: "#06B6D4",
    image: "/projects/waoootours/waoootours-web-hero.webp",
    galleryImages: [
      "/projects/waoootours/waoootours-web-desktop.webp",
      "/projects/waoootours/waoootours-web-mobile.webp"
    ],
    websiteUrl: "https://waoootoursandadventures.vercel.app/",
    hasCustomLogo: false,
    stats: [
      { label: "Plataforma", value: "Vercel Cloud App" },
      { label: "Destino", value: "Punta Cana & Saona" },
      { label: "Modalidad", value: "Web & Reservas" }
    ],
    relatedProjects: [
      {
        id: "la-boutique-club-med-ecommerce",
        title: "La Boutique — E-Commerce & En Vivo",
        subtitle: "Plataforma e-commerce oficial, personalizador textil en vivo y turnos de taller.",
        category: "E-Commerce & Software Web",
        image: "/projects/laboutique/laboutique-web-hero.webp"
      },
      {
        id: "big-print-punta-cana-web-marketing",
        title: "Big Print — Web & Marketing",
        subtitle: "Portal web oficial, catálogo digital y SEO local.",
        category: "Desarrollo Web & SEO",
        image: "/projects/bigprint-web/bigprint-web-hero.webp"
      }
    ]
  },
  {
    id: "big-print-punta-cana-brochure",
    title: "Big Print — Brochure Corporativo",
    subtitle: "Diseño Editorial, Arquitectura de Catálogo Publicitario & Preprensa para Gran Formato",
    category: "print",
    categoryLabel: "Editorial & Gran Formato",
    client: "Big Print Punta Cana",
    year: "2024 - 2025",
    description: "Diseño y diagramación técnica del brochure corporativo y catálogo oficial de soluciones publicitarias para Big Print Punta Cana. Estructuración visual de 2 cuerpos en alta definición con desglose de servicios de gigantografía, vallas urbanas, rotulación vehicular, señalética comercial, corte computarizado e impresión UV/látex.",
    challenge: "Organizar de manera estética, limpia y comercial el amplio portafolio de servicios de impresión a gran escala, asegurando que cada sección técnica transmita capacidad industrial, rapidez y precisión de acabado para clientes corporativos y cadenas hoteleras de la zona este.",
    solution: "Diagramación moderna de doble página con jerarquías claras, contrastes cromáticos de alto impacto, integración del logotipo oficial de Big Print y preparación rigurosa en preprensa CMYK para impresión física y distribución digital interactiva.",
    deliverables: [
      "Diseño y Diagramación de Brochure Corporativo (2 Cuerpos)",
      "Archivos de Preprensa Vectorial en Alta Resolución (CMYK 300 DPI)",
      "Versión Digital Optimizada para Presentaciones Comerciales",
      "Estandarización de Identidad Visual Corporativa"
    ],
    tools: ["Adobe InDesign", "Adobe Illustrator", "Photoshop", "Preprensa CMYK"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "brochure",
    accentColor: "#EAB308",
    image: "/projects/bigprint/bigprint-brochure-page-01.webp",
    galleryImages: [
      "/projects/bigprint/bigprint-brochure-page-01.webp",
      "/projects/bigprint/bigprint-brochure-page-02.webp"
    ],
    hasCustomLogo: true,
    stats: [
      { label: "Formato", value: "Brochure 2 Cuerpos" },
      { label: "Preprensa", value: "300 DPI CMYK" },
      { label: "Sector", value: "Publicidad & Gran Formato" }
    ]
  },
  {
    id: "big-print-punta-cana-web-marketing",
    title: "Big Print — Web & Marketing",
    subtitle: "Diseño y Desarrollo de Portal Web Corporativo, Hosting Cloud, SEO Local Avanzado & Campañas Publicitarias en Meta Ads",
    category: "web",
    categoryLabel: "Desarrollo Web, SEO & Meta Ads",
    client: "Big Print Punta Cana",
    year: "2024 - 2025",
    description: "Diseño y desarrollo integral del portal web oficial (bigprintpuntacana.com), estrategia de marketing digital, arquitectura de SEO local avanzado y campañas publicitarias en Meta Ads para Big Print Punta Cana, empresa líder en impresión digital a gran formato, rotulación vehicular, señalética arquitectónica, letras 3D corpóreas y material POP en la región este. Implementación de una plataforma web moderna, ultrarrápida y 100% responsiva (optimizada para escritorio y dispositivos móviles), catálogo digital interactivo de servicios y materiales, infraestructura de hosting cloud de alta velocidad con dominio y SSL, y ejecución de campañas de Meta Ads para captación masiva de hoteles, constructoras, comercios y agencias publicitarias en Punta Cana y Bávaro.",
    challenge: "Crear una presencia web corporativa de alto impacto visual y rendimiento técnico que exhiba la capacidad instalada y la versatilidad de impresión de Big Print, posicionando a la empresa en el top de búsquedas orgánicas en Google para soluciones gráficas en Punta Cana y captando prospectos comerciales mediante anuncios de alta conversión.",
    solution: "Desarrollo de un portal web con diseño visual impactante, maquetación dual adaptativa (desktop y mobile), showcase interactivo de proyectos de gran escala, optimización SEO on-page y local para términos clave de alta demanda (impresión gran formato, rotulación Punta Cana), y segmentación de campañas en Meta Ads orientadas al sector hotelero, comercial y eventos.",
    deliverables: [
      "Diseño y Desarrollo de Portal Web Oficial Responsivo (bigprintpuntacana.com)",
      "Optimización de Experiencia Móvil de Alta Velocidad (Mobile UI/UX)",
      "Arquitectura de SEO Avanzado & Posicionamiento Local en Google (Punta Cana & Bávaro)",
      "Gestión y Optimización de Campañas en Meta Ads (Facebook & Instagram)",
      "Configuración de Hosting Cloud Dedicado, Dominio Corporativo & Certificado SSL",
      "Catálogo Digital de Servicios: Gran Formato, Rotulación, Letras 3D & Material POP"
    ],
    tools: ["Desarrollo Web & UI/UX", "SEO Local & Google Search Console", "Meta Ads Manager", "Adobe Illustrator & Photoshop", "Hosting Cloud & CDN", "Responsive Design"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "browser",
    accentColor: "#EAB308",
    image: "/projects/bigprint-web/bigprint-web-hero.webp",
    galleryImages: [
      "/projects/bigprint-web/bigprint-web-desktop.webp",
      "/projects/bigprint-web/bigprint-web-mobile.webp",
      "/projects/bigprint/bigprint-instagram-feed-capture.webp"
    ],
    websiteUrl: "https://bigprintpuntacana.com/",
    instagramUrl: "https://www.instagram.com/bigprintpuntacanard",
    instagramHandle: "@bigprintpuntacanard",
    hasCustomLogo: true,
    stats: [
      { label: "Portal Web", value: "bigprintpuntacana.com" },
      { label: "Plataforma", value: "Desktop & Mobile HD" },
      { label: "Estrategia", value: "SEO Local + Meta Ads" }
    ],
    relatedProjects: [
      {
        id: "big-print-punta-cana-brochure",
        title: "Big Print — Brochure Corporativo",
        subtitle: "Catálogo editorial y soluciones de impresión a gran escala.",
        category: "Editorial & Gran Formato",
        image: "/projects/bigprint/bigprint-brochure-page-01.webp"
      },
      {
        id: "decora-group-web-seo-social-media",
        title: "Decora Group — Web, SEO & Ads",
        subtitle: "Portal web corporativo, catálogo digital y campañas Meta Ads.",
        category: "Desarrollo Web & SEO",
        image: "/projects/decora-web/decora-web-hero.webp"
      }
    ]
  },
  {
    id: "cami-instituto-capacitacion-social-media",
    title: "CAMI Instituto — Social Media",
    subtitle: "Estrategia Gráfica para Redes Sociales, Campañas de Admisión & Comunicación Educativa",
    category: "marketing",
    categoryLabel: "Social Media & Publicidad",
    client: "CAMI Instituto de Capacitación",
    year: "2024 - 2025",
    description: "Diseño y desarrollo integral de la línea gráfica publicitaria para redes sociales y campañas educativas de CAMI Instituto de Capacitación. Creación de piezas visuales estratégicas de alto impacto para cursos de Marketing Digital, Oratoria Profesional, Visitador a Médico, Emprendimiento, Talleres de Estética y Reforzamiento Académico, optimizadas para captación de leads en Instagram, Facebook y WhatsApp Business.",
    challenge: "Crear un sistema visual dinámico, profesional y altamente persuasivo que unifique la variada oferta académica del instituto, manteniendo la coherencia de marca y logrando altas tasas de interacción y conversión en plataformas digitales.",
    solution: "Conceptualización de una cuadrícula modular con tipografía legible, jerarquías visuales contundentes, contrastes tonales energéticos, llamado a la acción (CTA) directo y adaptación estandarizada a formatos de post (1:1) e historias (9:16).",
    deliverables: [
      "Diseño de Colección Completa de Flyers para Redes Sociales (14 Piezas Únicas)",
      "Plantillas Estratégicas para Campañas de Admisión y Cursos Especializados",
      "Adaptación Multiformato para Feed de Instagram, Facebook Ads & Stories",
      "Estandarización de Identidad Visual y Logotipo Oficial Vectorial"
    ],
    tools: ["Adobe Photoshop", "Adobe Illustrator", "Estrategia de Social Media", "Copywriting Publicitario"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "flyer-grid",
    accentColor: "#F43F5E",
    image: "/projects/cami/cami-flyer-marketing-digital.webp",
    galleryImages: [
      "/projects/cami/cami-flyer-marketing-digital.webp",
      "/projects/cami/cami-flyer-oratoria-profesional.webp",
      "/projects/cami/cami-flyer-diseno-grafico.webp",
      "/projects/cami/cami-flyer-manejo-de-dron.webp",
      "/projects/cami/cami-flyer-ingles-para-ninos.webp",
      "/projects/cami/cami-flyer-trenzas-modernas.webp",
      "/projects/cami/cami-flyer-curso-de-belleza.webp",
      "/projects/cami/cami-flyer-visitador-medico.webp",
      "/projects/cami/cami-flyer-emprendimiento-liderazgo.webp",
      "/projects/cami/cami-flyer-sala-de-tarea.webp",
      "/projects/cami/cami-flyer-pestanas-tintado-cejas.webp",
      "/projects/cami/cami-flyer-reforzamiento-ciencias.webp",
      "/projects/cami/cami-flyer-reforzamiento-ninos.webp",
      "/projects/cami/cami-flyer-dia-del-maestro.webp"
    ],
    hasCustomLogo: true,
    stats: [
      { label: "Piezas Creadas", value: "14 Flyers Únicos" },
      { label: "Canal", value: "Social Media & Ads" },
      { label: "Sector", value: "Capacitación & Educación" }
    ]
  },
  {
    id: "latik-logo-identidad",
    title: "Latik — Diseño de Logotipo & Identidad Visual",
    subtitle: "Diseño de Logotipo, Isotipo Vectorial & Estandarización de Marca",
    category: "branding",
    categoryLabel: "Diseño de Logo & Identidad",
    client: "Latik (Graduaciones & Producción Fotográfica)",
    year: "2023 - 2024",
    description: "Conceptualización y diseño integral del logotipo e isotipo corporativo para Latik, fusionando elementos de togas y birretes de graduación académica con la estética de lentes y composición fotográfica. Geometría vectorial pura, proporciones armónicas y optimización para aplicaciones en material impreso, paquetes de grado y plataformas digitales.",
    challenge: "Diseñar un símbolo gráfico atemporal, sofisticado y altamente reconocible que represente la solemnidad de los actos de graduación y la excelencia en captura fotográfica profesional.",
    solution: "Creación de un isotipo geométrico que entrelaza la silueta del birrete con la estructura de un objetivo fotográfico, acompañado de tipografía moderna y variantes contrastadas de alto impacto visual.",
    deliverables: [
      "Diseño de Logotipo & Isotipo Vectorial (SVG, PDF, PNG)",
      "Variantes Monocromáticas (Positivo & Negativo)",
      "Manual Básico de Aplicación de Marca",
      "Artes de Muestra para Paquetes de Graduación"
    ],
    tools: ["Adobe Illustrator", "Vectorización Matemática", "Adobe Photoshop"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "branding",
    accentColor: "#6366F1",
    image: "/projects/latik/latik-gallery-1.webp",
    galleryImages: [
      "/projects/latik/latik-gallery-1.webp",
      "/projects/latik/latik-gallery-2.webp"
    ],
    hasCustomLogo: true,
    stats: [
      { label: "Disciplina", value: "Diseño de Logo" },
      { label: "Formato", value: "Vectorial SVG / CMYK" },
      { label: "Sector", value: "Graduaciones & Foto" }
    ]
  },
  {
    id: "facturadord-sistema-facturacion-nomina",
    title: "FacturaDO — Facturación & Nómina",
    subtitle: "Diseño de Identidad Visual, Logotipo Vectorial, Desarrollo de Portal Web & Ecosistema Cloud de Facturación Fiscal y Nómina para RD",
    category: "software",
    categoryLabel: "Software SaaS & Facturación Fiscal",
    client: "FacturaDO (facturadord.com)",
    year: "2024 - 2026",
    description: "Diseño de identidad visual, desarrollo integral de plataforma web y arquitectura de software para FacturaDO (facturadord.com), el sistema integral de facturación e-CF, nómina y presupuestos diseñado específicamente para pymes y empresas en la República Dominicana. Creación completa del logotipo e isotipo vectorial, landing page de alta conversión, módulo estrella de Nómina Empresarial & R.H. 100% adaptado a la Ley 16-92 con cálculo automático de deducciones AFP/SFS, retenciones ISR DGII, exportación de novedades a la TSS (SUIR Plus) y volantes formato cheque. Integra facturación electrónica DGII con certificados .p12 (e-CF E31, E32, E44), NCF tradicionales (B01, B02, B14, B15), centro de presupuestos multidimensionales para construcción y talleres, conciliación bancaria con bancos dominicanos e importador masivo en 1 clic desde QuickBooks, Alegra, Cashflow, Shopify y Excel.",
    challenge: "Diseñar y construir una plataforma SaaS y portal web intuitivo, robusto y visualmente impactante que desmitifique la complejidad fiscal dominicana, permitiendo a emprendedores y corporaciones gestionar su facturación electrónica DGII, inventarios y nóminas laborales sin fricción técnica ni costos de licencias astronómicos.",
    solution: "Implementación de un diseño UI/UX limpio y moderno en modo oscuro de alto rendimiento, estructuración de flujos claros para emisión de NCF/e-CF, generación de archivos para reportes 606/607, motor de migración de datos instantánea, cotizador avanzado con desglose de mermas y rentabilidad, y desarrollo del sistema de nómina automatizado que genera contratos legales en PDF y archivos planos para la TSS con un solo clic.",
    deliverables: [
      "Diseño de Logotipo, Isotipo & Sistema de Identidad Corporativa Vectorial (FacturaDO)",
      "Diseño y Desarrollo de Portal Web Oficial & Landing SaaS (facturadord.com)",
      "Módulo de Nómina Empresarial & R.H. (Ley 16-92, TSS SUIR Plus, ISR DGII & Volantes Cheque)",
      "Motor de Facturación Electrónica e-CF con Certificado Digital .p12 & Comprobantes NCF DGII",
      "Centro de Presupuestos y Operaciones Multidimensionales para Construcción y Servicios",
      "Módulo de Conciliación Bancaria Automática con Bancos Dominicanos (Popular, BHD, Banreservas)",
      "Asistente Inteligente de Migración en 1 Clic (QuickBooks, Alegra, Cashflow, Shopify, Excel)"
    ],
    tools: ["Desarrollo Web & SaaS", "UI/UX Architecture", "DGII e-CF API & Facturación Electrónica", "TSS SUIR & Cálculo Ley 16-92", "Adobe Illustrator & Photoshop", "Next.js & TypeScript", "Cloud Hosting & SSL"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "browser",
    accentColor: "#3B82F6",
    image: "/projects/facturadord/facturadord-web-hero.webp",
    galleryImages: [
      "/projects/facturadord/facturadord-web-full.webp"
    ],
    websiteUrl: "https://facturadord.com/",
    hasCustomLogo: true,
    stats: [
      { label: "Facturación", value: "e-CF + NCF DGII" },
      { label: "Nómina", value: "Ley 16-92 & TSS" },
      { label: "Plataforma", value: "facturadord.com" }
    ],
    relatedProjects: [
      {
        id: "fancy-rd-radio-web-branding",
        title: "Fancy RD — Web & Branding",
        subtitle: "Portal web oficial (www.fancyrd.com), streaming en vivo y branding.",
        category: "Desarrollo Web & Streaming",
        image: "/projects/fancy-rd/fancy-rd-web-desktop.webp"
      },
      {
        id: "decora-group-web-seo-social-media",
        title: "Decora Group — Web, SEO & Ads",
        subtitle: "Portal web corporativo, catálogo digital y campañas Meta Ads.",
        category: "Desarrollo Web & SEO",
        image: "/projects/decora-web/decora-web-hero.webp"
      }
    ]
  },
  {
    id: "decora-group-web-seo-social-media",
    title: "Decora Group — Web, SEO & Ads",
    subtitle: "Diseño y Desarrollo de Portal Web & Catálogo Digital de Mobiliario, Cotizador en Línea, Arquitectura SEO Local, Hosting Cloud & Campañas de Meta Ads",
    category: "web",
    categoryLabel: "Desarrollo Web, SEO & Meta Ads",
    client: "Decora Group Punta Cana",
    year: "2024 - 2025",
    description: "Diseño y desarrollo integral del portal web corporativo y catálogo digital para Decora Group Punta Cana (decoragrouppuntacana.com), fábrica y estudio referente en diseño y fabricación de cocinas personalizadas de alta gama, closets & walk-in closets a medida, mobiliario a medida, baños modernos, puertas, mobiliario comercial y diseño de interiores para villas de lujo, complejos turísticos y proyectos residenciales en Cap Cana, Vista Cana, Cana Bay, Bávaro y Punta Cana. Implementación de cotizador a medida en línea, catálogo de colecciones y ambientes, magazine de tendencias 'Estilo Tropical', arquitectura de SEO técnico y local para captación directa en Google, infraestructura de hosting cloud de alta velocidad y ejecución de campañas de Meta Ads (Facebook & Instagram Ads) para captación de clientes particulares, arquitectos y promotores inmobiliarios.",
    challenge: "Construir una presencia digital de alto nivel y sofisticación que refleje la calidad insuperable de los materiales y acabados de Decora Group, permitiendo a propietarios e inversionistas explorar colecciones exclusivas por ambientes (cocinas, closets, baños, salas, oficinas, dormitorios), solicitar cotizaciones automatizadas y posicionar la marca en los primeros lugares de búsqueda en Google en los polos turísticos y residenciales más exclusivos del país (Cap Cana, Punta Cana, Vista Cana, La Romana, Bayahibe).",
    solution: "Desarrollo de una plataforma web moderna, responsiva y elegante con showcase de obras instaladas en comunidades prestigiosas (Selenne VI, VII, VIII, Cap Cana, Cana Bay), módulo de cotización directa, optimización SEO on-page y local orientada a palabras clave de alta intención de compra (cocinas modernas, closets a medida, muebles personalizados en Punta Cana), y estrategia publicitaria en Meta Ads con video reels de proyectos terminados.",
    deliverables: [
      "Diseño y Desarrollo de Portal Web Oficial & Catálogo Interactivo (decoragrouppuntacana.com)",
      "Sistema de Cotización en Línea por Ambientes (Cocinas, Closets, Baños, Mobiliario de Lujo)",
      "Arquitectura de SEO Avanzado & Posicionamiento Local en Google (Punta Cana, Cap Cana, Bávaro)",
      "Estrategia de Creación de Contenido Multimedia: Videos Reels, Posts Gráficos & Carruseles de Proyectos",
      "Campañas Publicitarias en Meta Ads (Facebook & Instagram) para Captación de Leads y Cotizaciones",
      "Infraestructura de Hosting Cloud Dedicado, Dominio Corporativo & Certificado SSL",
      "Gestión Integral de Redes Sociales y Estrategia de Crecimiento (@decoragroup.pc)"
    ],
    tools: ["Desarrollo Web & UI/UX", "SEO Local & Google Search Console", "Meta Ads Manager (Facebook & Instagram)", "Edición de Video & Reels", "Adobe Photoshop & Illustrator", "Hosting Cloud & CDN"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "browser",
    accentColor: "#3B82F6",
    image: "/projects/decora-web/decora-web-hero.webp",
    galleryImages: [
      "/projects/decora-web/decora-web-full.webp",
      "/projects/decora-web/decora-instagram-feed-capture.webp"
    ],
    websiteUrl: "https://decoragrouppuntacana.com/",
    instagramUrl: "https://www.instagram.com/decoragroup.pc",
    instagramHandle: "@decoragroup.pc",
    hasCustomLogo: true,
    stats: [
      { label: "Especialidad", value: "Cocinas & Muebles de Lujo" },
      { label: "Plataforma Web", value: "decoragrouppuntacana.com" },
      { label: "Campañas & Ads", value: "Meta Ads Segmentado" }
    ],
    relatedProjects: [
      {
        id: "fancy-rd-radio-web-branding",
        title: "Fancy RD — Web & Branding",
        subtitle: "Portal web oficial (www.fancyrd.com), streaming en vivo y branding.",
        category: "Desarrollo Web & Streaming",
        image: "/projects/fancy-rd/fancy-rd-web-desktop.webp"
      },
      {
        id: "big-print-punta-cana-brochure",
        title: "Big Print — Brochure Corporativo",
        subtitle: "Catálogo editorial y soluciones de impresión a gran escala.",
        category: "Diseño Editorial & Print",
        image: "/projects/bigprint/bigprint-brochure-page-01.webp"
      }
    ]
  },
  {
    id: "fancy-rd-radio-web-branding",
    title: "Fancy RD — Web & Branding",
    subtitle: "Desarrollo de Portal Web Radial con Streaming en Vivo, Arquitectura SEO, Hosting Administrado & Diseño de Logotipo Vectorial",
    category: "web",
    categoryLabel: "Desarrollo Web, Streaming & Branding",
    client: "Fancy RD Radio",
    year: "2024 - 2025",
    description: "Desarrollo integral de la plataforma digital, infraestructura de transmisión y diseño de identidad de marca para Fancy RD Radio (fancyrd.com). Creación de portal web responsivo optimizado para reproducción de audio streaming en tiempo real y baja latencia, arquitectura SEO orientada a posicionamiento de emisoras digitales, hosting dedicado con alta disponibilidad de ancho de banda, configuración de dominio corporativo y diseño completo del logotipo e isotipo vectorial con sus variantes de color y aplicaciones de marca.",
    challenge: "Construir un ecosistema radial digital moderno, fluido y visualmente atractivo que garantice una transmisión de audio sin interrupciones tanto en navegadores de escritorio como en dispositivos móviles, acompañado de una identidad de marca fresca, dinámica y memorable para el público radial contemporáneo.",
    solution: "Implementación de un reproductor de streaming HTML5 ultraligero integrado en un diseño web oscuro de alto contraste, optimización de velocidad de carga y etiquetas OpenGraph/Schema para indexación en Google, arquitectura de hosting en la nube para soportar miles de oyentes concurrentes, y desarrollo de un sistema de identidad visual versátil con múltiples aplicaciones monocromáticas y a color.",
    deliverables: [
      "Diseño y Desarrollo de Portal Web Oficial con Streaming en Vivo (fancyrd.com)",
      "Reproductor Web Adaptativo para Escritorio y Dispositivos Móviles",
      "Diseño de Logotipo, Isotipo Vectorial & Variantes Cromáticas Oficiales",
      "Estrategia de SEO Técnico, Indexación en Buscadores & Posicionamiento",
      "Infraestructura de Hosting Cloud para Streaming, Dominio & Certificado SSL",
      "Estandarización de Marca para Redes Sociales y Plataformas de Radio Digital"
    ],
    tools: ["Desarrollo Web & HTML5 Audio", "Streaming Server & Icecast/Shoutcast", "SEO Técnico & Google Search Console", "Adobe Illustrator (Vectorización)", "Adobe Photoshop", "Hosting Cloud & CDN"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "browser",
    accentColor: "#EC4899",
    image: "/projects/fancy-rd/fancy-rd-web-desktop.webp",
    galleryImages: [
      "/projects/fancy-rd/fancy-rd-web-desktop.webp",
      "/projects/fancy-rd/fancy-rd-web-mobile.webp",
      "/projects/fancy-rd/fancy-rd-logos-04.webp",
      "/projects/fancy-rd/fancy-rd-logos-05.webp",
      "/projects/fancy-rd/fancy-rd-logos-06.webp",
      "/projects/fancy-rd/fancy-rd-logos-07.webp",
      "/projects/fancy-rd/fancy-rd-logos-08.webp",
      "/projects/fancy-rd/fancy-rd-logos-09.webp"
    ],
    websiteUrl: "https://www.fancyrd.com/",
    hasCustomLogo: true,
    stats: [
      { label: "Transmisión", value: "Streaming 24/7 HD" },
      { label: "Portal Web", value: "www.fancyrd.com" },
      { label: "Disciplina", value: "Web + Logo + SEO" }
    ],
    relatedProjects: [
      {
        id: "decora-group-web-seo-social-media",
        title: "Decora Group — Web, SEO & Ads",
        subtitle: "Portal web oficial (decoragrouppuntacana.com), arquitectura SEO y campañas publicitarias.",
        category: "Desarrollo Web & SEO",
        image: "/projects/decora-web/decora-web-hero.webp"
      },
      {
        id: "didusa-srl-jamaica",
        title: "Didusa SRL & Didusa Jamaica",
        subtitle: "Portales web corporativos y plataforma de servicios técnicos.",
        category: "Desarrollo Web & UX/UI",
        image: "/projects/didusa/didusa-rd-hero.webp"
      }
    ]
  },
  {
    id: "didusa-srl-jamaica",
    title: "Didusa SRL & Didusa Jamaica",
    subtitle: "Desarrollo Web, Hosting, Dominio, UX/UI, Correos Corporativos & Administración",
    category: "ui-ux",
    categoryLabel: "Desarrollo Web & Infraestructura",
    client: "Didusa SRL (República Dominicana & Jamaica)",
    year: "2024 - 2026",
    description: "Desarrollo integral de las plataformas web didusasrl.com y didusajamaica.com para la prestigiosa empresa dominicana especializada en el sector de la climatización (HVAC), aislamiento térmico, acabados técnicos y fontanería. Configuración completa de arquitectura de hosting, gestión de dominios y DNS, diseño de interfaz moderna adaptativa, administración técnica y despliegue del sistema de correos corporativos @didusasrl.com.",
    challenge: "Construir una presencia digital corporativa de alto calibre para una empresa líder en climatización y acabados técnicos con operaciones residenciales, industriales y comerciales en República Dominicana y el Caribe, transmitiendo confiabilidad, estándares internacionales y tecnología innovadora.",
    solution: "Implementación de sitios web corporativos de alto rendimiento, optimizados para captación de proyectos de gran escala, arquitectura de correo corporativo seguro @didusasrl.com, administración web continua y diseño gráfico adaptativo en modos claro y oscuro.",
    deliverables: [
      "Portal Web Oficial didusasrl.com",
      "Portal Internacional didusajamaica.com",
      "Configuración de Hosting & Servidores Cloud",
      "Gestión de Dominios & Registros DNS",
      "Infraestructura de Correos Corporativos @didusasrl.com",
      "Diseño UI/UX & Administración Continua"
    ],
    tools: ["Desarrollo Web Moderno", "Figma", "DNS & Cloud Hosting", "Google Workspace / Email Servers", "Adobe Illustrator", "Photoshop"],
    colorPalette: ["#18181B", "#27272A", "#3B82F6", "#FFFFFF"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "browser",
    accentColor: "#3B82F6",
    image: "/projects/didusa/capuradedidusarls.webp",
    galleryImages: [
      "/projects/didusa/capuradedidusarls.webp",
      "/projects/didusa/screencapture-didusajamaica-.webp"
    ],
    websiteUrl: "https://didusasrl.com",
    hasCustomLogo: true,
    stats: [
      { label: "Portales Web", value: "2 Dominios" },
      { label: "Correos", value: "@didusasrl.com" },
      { label: "Sector", value: "HVAC & Aislamiento" }
    ]
  },
  {
    id: "visa-del-norte-campaign",
    title: "Visa del Norte - Campaña Integral & Mupis",
    subtitle: "Marketing Omnicanal, Packaging To-Go, Vallas Urbanas & Landing Page",
    category: "print",
    categoryLabel: "Marketing & Gran Formato",
    client: "Visa del Norte",
    year: "2020 - 2023",
    description: "Estrategia integral de marketing y comunicación visual para cortes de carne premium: Visa To Go, Línea Cortes Gold, Portafolio Oro y Vino, y Landing Page promocional 'Cortes de Cerdo Americano'. Diseño de paradas de autobús, empaques térmicos y piezas festivas.",
    challenge: "Transmitir la máxima calidad gastronómica de cortes como Rib Eye, Tomahawk y Arrachera tanto en medios físicos de gran escala como en digital para disparar las ventas.",
    solution: "Composiciones fotográficas de alto impacto con fuego, texturas de parrilla, tipografías robustas de asador y cajas de regalo de edición especial con pauta geolocalizada.",
    deliverables: ["Paradas de Autobús / Mupis", "Bolsas Kraft To-Go", "Cajas de Regalo Oro y Platinum", "Landing Page Web & Pauta"],
    tools: ["Meta Ads", "Adobe Photoshop", "Illustrator", "Adobe XD"],
    colorPalette: ["#DC2626", "#B91C1C", "#1C1917", "#F59E0B"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "billboard",
    accentColor: "#DC2626",
    stats: [
      { label: "Campañas", value: "5 Temporadas" },
      { label: "Mupis & Vallas", value: "Gran Formato" },
      { label: "Conversión", value: "+45% Pedidos" }
    ]
  },
  {
    id: "petronan-gas-station-3d",
    title: "Petronan - Fachada & Canopia 3D",
    subtitle: "Modelado Arquitectónico y Visualización Comercial Diurna/Nocturna",
    category: "3d-render",
    categoryLabel: "Modelado 3D & Fachadas",
    client: "Petronan Combustibles",
    year: "2021",
    description: "Modelado 3D y renderizado de la estructura principal, canopia de despacho e iluminación nocturna para las estaciones de servicio Petronan.",
    challenge: "Presentar a los inversionistas la apariencia real de la estructura con los colores corporativos y el impacto visual de las luminarias LED de noche.",
    solution: "Modelado tridimensional en perspectiva con cálculo de luminiscencia en plafones y señalética de marca en las vigas perimetrales.",
    deliverables: ["Render Diurno", "Render Nocturno Iluminado", "Planos de Aplicación de Marca"],
    tools: ["Blender 3D", "Cinema 4D", "Photoshop"],
    colorPalette: ["#EF4444", "#2563EB", "#FACC15", "#1E293B"],
    gradient: "from-zinc-900 via-zinc-850 to-zinc-950",
    featured: true,
    mockupType: "billboard",
    accentColor: "#EF4444",
    stats: [
      { label: "Tipo", value: "Fachada 3D" },
      { label: "Modos", value: "Día & Noche" },
      { label: "Escala", value: "Arquitectura" }
    ]
  },
  {
    id: "trapbowton-music-ads",
    title: "Trapbowton - Campañas Urbanas & Ads",
    subtitle: "Estrategia Publicitaria & Creatividades para Grandes Exponentes Urbanos",
    category: "social-media",
    categoryLabel: "Marketing & Redes Sociales",
    client: "Trapbowton / Artistas de Género Urbano",
    year: "2022 - 2023",
    description: "Diseño y pauta de portadas digitales, carruseles de Instagram y anuncios de alto rendimiento para figuras del género urbano como DJ Adoni, Don Miguelo, Santiago Matías (Alofoke) y Nicky Jam.",
    challenge: "Captar la atención en feeds veloces con tipografías contundentes, retoque dramático e iluminación de alto impacto para maximizar reproducciones y venta de boletos.",
    solution: "Contrastes intensos, silueteado de alta definición y composición dinámica enfocada en maximizar el CTR y el engagement de los seguidores.",
    deliverables: ["Posts de Instagram 1:1", "Historias 9:16", "Banners para Eventos", "Campañas de Pauta Pagada"],
    tools: ["Meta Ads", "Photoshop", "Lightroom", "After Effects"],
    colorPalette: ["#FF003C", "#111827", "#3B82F6", "#FFFFFF"],
    gradient: "from-zinc-900 via-zinc-850 to-black",
    featured: true,
    mockupType: "flyer-grid",
    accentColor: "#FF003C",
    stats: [
      { label: "Artistas", value: "Top Urbanos" },
      { label: "Alcance", value: "+500K Views" },
      { label: "Formato", value: "Social Ads" }
    ]
  },

  {
    id: "forever-mane-haircare",
    title: "Forever Mane - Línea Capilar Profesional",
    subtitle: "Diseño de Marca & Packaging Cosmético Profesional",
    category: "branding",
    categoryLabel: "Branding & Packaging",
    client: "Forever Mane Dominicana",
    year: "2022",
    description: "Línea completa de empaques para tratamiento capilar a base de jengibre, coco y romero: Shampoo 32 Oz, Mascarilla 16 Oz, Gota de Brillo, Leaving y Laciador. Creación del logotipo de silueta femenina y contraste con fondos negros elegantes.",
    challenge: "Dar una apariencia de salón de belleza de lujo a una línea de productos naturales para el cabello.",
    solution: "Fondo negro texturizado de alto contraste con tipografía serif sofisticada, medallón dorado y fotografías de ingredientes naturales en la base.",
    deliverables: ["Diseño de 5 Envases", "Etiquetas de Advertencia & Modo de Uso", "Renders de Colección", "Banners Publicitarios"],
    tools: ["Adobe Photoshop", "Illustrator"],
    colorPalette: ["#EAB308", "#18181B", "#CA8A04", "#FFFFFF"],
    gradient: "from-zinc-900 via-zinc-850 to-zinc-950",
    featured: false,
    mockupType: "packaging",
    accentColor: "#EAB308",
    stats: [
      { label: "Productos", value: "5 Presentaciones" },
      { label: "Acabado", value: "Gold Foil Effect" },
      { label: "Mercado", value: "Cuidado Capilar" }
    ]
  }
];

export const WORK_EXPERIENCES: WorkExperience[] = [
  {
    id: "bien-de-marketing",
    period: "2026 - Actualmente",
    company: "Bien De Marketing",
    location: "República Dominicana / Internacional (Presencial & Remoto)",
    role: "CEO & Director General",
    status: "active",
    statusLabel: "Actualmente (Activo)",
    responsibilities: [
      "Dirección ejecutiva y operativa de la agencia, prestando servicios estratégicos de marketing digital, pauta publicitaria en Meta Ads, Google Ads y TikTok Ads para marcas locales e internacionales.",
      "Venta y desarrollo de servicios especializados de arquitectura de software, plataformas web modernas, diseño corporativo y automatizaciones con Inteligencia Artificial.",
      "Gestión de alianzas corporativas y prestación de servicios a marcas de alta escala, incluyendo empresas de la zona de Punta Cana y República Dominicana."
    ],
    skills: ["Dirección Estratégica", "CEO & Liderazgo", "Marketing Digital", "Desarrollo Web & Software", "Inteligencia Artificial", "Venta de Servicios B2B"]
  },
  {
    id: "big-print-decora-group",
    period: "2025",
    company: "Big Print Punta Cana & Decora Group Punta Cana",
    location: "Punta Cana, La Altagracia",
    role: "Marketing & Ventas (En 2026 pase a venderles servicios)",
    status: "completed",
    statusLabel: "Finalizado / En 2026 Proveedor de Servicios",
    responsibilities: [
      "Estrategia de marketing comercial y cierre de ventas para soluciones de impresión de gran formato, señalética y diseño decorativo corporativo.",
      "Prospección y captación de cuentas B2B en el sector hotelero, comercial y residencial en la zona de Punta Cana.",
      "Gestión de relaciones comerciales y presupuestos de alto volumen, evolucionando en 2026 de empleado a proveedor externo de servicios a través de la agencia."
    ],
    skills: ["Marketing Comercial", "Ventas B2B", "Cierre Comercial", "Gran Formato", "Punta Cana", "Gestión de Cuentas"]
  },
  {
    id: "club-med-punta-cana",
    period: "2024",
    company: "Club Med Punta Cana",
    location: "Punta Cana, La Altagracia",
    role: "Marketing, Publicidad & Diseño Gráfico",
    status: "completed",
    statusLabel: "Suspensión por Catástrofe (2024)",
    responsibilities: [
      "Desarrollo de piezas publicitarias, diseño gráfico y coordinación de campañas de marketing institucional para el resort.",
      "Creación de material visual promocional y estandarización de la comunicación gráfica de la marca.",
      "Suspensión de labores debido al cese de operaciones por catástrofe ocurrida en las instalaciones del resort en 2024."
    ],
    skills: ["Marketing", "Publicidad", "Diseño Gráfico", "Hotelería & Turismo", "Branding Institucional"]
  },
  {
    id: "print-solution",
    period: "2022 - 2023",
    company: "PRINT SOLUTIÓN",
    location: "Santo Domingo Norte",
    role: "Marketing Digital, Community Management, Diseño Gráfico & Presupuestos",
    status: "completed",
    statusLabel: "Finalizado",
    responsibilities: [
      "Gestión integral de la presencia digital, pautas publicitarias y atención al cliente en redes.",
      "Diseño gráfico para impresión de gran formato, rotulación, sublimación y material POP.",
      "Elaboración y control de presupuestos para proyectos gráficos y corporativos.",
      "Control de calidad y supervisión de producción gráfica."
    ],
    skills: ["Marketing Digital", "Gran Formato", "Presupuestos", "Community Management", "Control de Calidad"]
  },
  {
    id: "laboratorios-sintesis",
    period: "2022 - 2023",
    company: "LABORATORIOS Síntesis",
    location: "Distrito Nacional, Av. Lope de Vega",
    role: "Marketing, Publicidad & Diseño Gráfico 3D",
    status: "completed",
    statusLabel: "Finalizado",
    responsibilities: [
      "Diseño y modelado 3D de líneas completas de productos farmacéuticos y empaques.",
      "Diseño de material publicitario para congresos médicos y material de visitadores a médicos.",
      "Estrategia de comunicación visual para lanzamientos de nuevos medicamentos."
    ],
    skills: ["Modelado 3D", "Packaging Médico", "Publicidad B2B", "Lanzamiento de Productos"]
  },
  {
    id: "habilitic",
    period: "2021 - 2022",
    company: "HABILITIC",
    location: "Santo Domingo Norte",
    role: "Facilitador o Docente de Marketing Digital, Ventas & Diseño Gráfico",
    status: "completed",
    statusLabel: "Finalizado",
    responsibilities: [
      "Capacitación de estudiantes y profesionales en herramientas de la suite Adobe (Photoshop, Illustrator).",
      "Enseñanza de metodologías de ventas digitales, pauta publicitaria y conversión en redes sociales.",
      "Desarrollo de planes pedagógicos prácticos orientados a la inserción laboral y resultados de negocio."
    ],
    skills: ["Docencia", "Marketing Digital", "Ventas & Conversión", "Suite Adobe", "Liderazgo"]
  },
  {
    id: "jirm-consulting",
    period: "2018 - 2025",
    company: "JIRM Consulting Group",
    location: "Puerto Rico (100% Remoto Simultáneo)",
    role: "Especialista en Marketing Digital, Diseño Web & Redes Sociales",
    status: "completed",
    statusLabel: "Finalizado (2025 / Remoto Simultáneo)",
    responsibilities: [
      "Consultoría estratégica 100% remota desempeñada de forma continua y simultánea con proyectos locales e internacionales.",
      "Estrategia integral de marketing digital y diseño de pautas publicitarias para el mercado caribeño y estadounidense.",
      "Diseño y mantenimiento de plataformas web corporativas y embudos de conversión.",
      "Creación de identidades de marca, material promocional y presentaciones para clientes corporativos.",
      "Gestión de métricas de crecimiento y optimización continua de ROI."
    ],
    skills: ["Marketing Digital", "Diseño Web", "WordPress", "Branding", "Social Media", "Pauta Pagada"]
  },
  {
    id: "master-creative",
    period: "2017 - 2020",
    company: "MASTER CREATIVE",
    location: "Santo Domingo Norte",
    role: "Administración, Marketing Digital y Tradicional, Community Manager",
    status: "completed",
    statusLabel: "Finalizado",
    responsibilities: [
      "Supervisión administrativa integral: órdenes de compras, facturación, pagos y contabilidad.",
      "Capacitación técnica de equipo de diseño, atención corporativa al cliente y supervisión de proyectos.",
      "Estrategias de marketing omnicanal, asesoría a marcas y logística de proyectos."
    ],
    skills: ["Marketing Omnicanal", "Administración", "Operaciones & Logística", "Contabilidad & Finanzas"]
  },
  {
    id: "lati-k-publicidad",
    period: "2015 - 2017",
    company: "LATI-K PUBLICIDAD",
    location: "Santo Domingo Norte",
    role: "Diseño Gráfico y Fotografía Publicitaria",
    status: "completed",
    statusLabel: "Finalizado",
    responsibilities: [
      "Diseño de piezas publicitarias, vallas de carretera, volantes y catálogos impresos.",
      "Fotografía comercial y de eventos para clientes de la agencia.",
      "Manejo de plotters de impresión y corte de vinilo."
    ],
    skills: ["Diseño Gráfico", "Fotografía Comercial", "Impresión & Preprensa"]
  }
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    id: "uasd",
    period: "2017",
    institution: "Universidad Autónoma de Santo Domingo (UASD)",
    degree: "Licenciatura en Publicidad (Mención Diseño Gráfico Publicitario)",
    status: "in-progress",
    statusLabel: "4 Semestres Cursados",
    details: "Formación académica en fundamentos del diseño, teoría del color, semiótica publicitaria y composición visual."
  },
  {
    id: "edutin",
    period: "2023",
    institution: "Edutin Academy",
    degree: "Diplomado en Administración de Empresas",
    status: "completed",
    statusLabel: "Finalizado / Activo",
    details: "Especialización en finanzas, gestión de proyectos, operaciones, liderazgo y estrategia de negocios."
  },
  {
    id: "secundaria",
    period: "2011 - 2015",
    institution: "Colegio Alto Valle Del Saber",
    degree: "Bachillerato / Educación Secundaria",
    status: "completed",
    statusLabel: "Finalizado"
  }
];

export const TECHNICAL_COURSES: TechnicalCourse[] = [
  { name: "Marketing Digital & Campañas de Pauta", institution: "IDAD / Plataformas Digitales", category: "Marketing" },
  { name: "Diseño Gráfico Profesional", institution: "INFOTEP", category: "Diseño" },
  { name: "Community Manager Profesional", institution: "IDAD", category: "Marketing" },
  { name: "Informática & Paquete Office", institution: "CETEP", category: "Tecnología" },
  { name: "Reparación & Mantenimiento de PC", institution: "CETEP", category: "Hardware" },
  { name: "Inglés Básico (Nivel I y II)", institution: "CENTU", category: "Idiomas" },
  { name: "Taller de Sublimación & Transfer", institution: "EMI GROUP", category: "Producción" },
  { name: "Técnicas de Coaching Empresarial", institution: "APD", category: "Gestión" },
  { name: "Primeros Auxilios", institution: "Cruz Roja Dominicana", category: "Salud" },
  { name: "Técnicas de Sutura", institution: "Cruz Roja Dominicana", category: "Salud" },
];

export const REFERENCES: ReferenceItem[] = [
  {
    name: "Licda. Meivi Piña",
    role: "Gerente General",
    company: "Big Print Punta Cana",
    phone: "+1 849-359-8405",
    type: "professional"
  },
  {
    name: "Licda. Kathleen Hernández",
    role: "Recursos Humanos (HHRR)",
    company: "Club Med Punta Cana & Bermuda Beach",
    phone: "Club Med Punta Cana",
    type: "professional"
  },
  {
    name: "Maury Plata",
    role: "Gerente",
    company: "Lati - Publicidad",
    phone: "829-286-2601",
    type: "professional"
  },
  {
    name: "Julio Angel Matos Mendez",
    role: "CEO",
    company: "Master Creative",
    phone: "+1 276-221-3279",
    type: "professional"
  },
  {
    name: "Lic. Jorge Ivan Rivera Mora",
    role: "Gerente",
    company: "JIRM Consulting Group (Puerto Rico)",
    phone: "787-347-7388",
    type: "professional"
  },
  {
    name: "Lic. Carmen Morillo",
    role: "CEO",
    company: "HABILITIC",
    phone: "829-660-8494",
    type: "professional"
  },
  {
    name: "Lic. Franklin Felix",
    role: "Gerente de Mercadeo",
    company: "Laboratorios Síntesis",
    phone: "829-661-4340",
    type: "professional"
  },
  {
    name: "Leonel Ruiz",
    role: "Gerente",
    company: "Kolonial Print",
    phone: "829-215-8702",
    type: "professional"
  },
  {
    name: "Lic. Cruz María Encarnación Polanco",
    role: "CEO",
    company: "Centro Académico Moderno Internacional (CAMI)",
    phone: "809-961-1553",
    type: "professional"
  }
];
