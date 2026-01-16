const projectsData = {
    es: [
        {
            id: 1,
            slug: 'banco-estado',
            galleryCols: 3,
            title: 'Banco Estado',
            subtitle: 'Optimización de Conversión B2B Fintech',
            year: '2025',
            industry: 'Fintech',
            type: 'UX/UI Integral',
            description: 'Producto bancario con embudo de conversión complejo que requería optimización UX, pruebas de usabilidad y validación visual.',
            coverImage: '/assets/projects/banco-estado-cover.png',
            tags: ['Optimización Conversión', 'Fintech', 'Testing con IA', 'Prototipado'],
            metrics: {
                improvement: 'Optimización de embudo',
                impact: 'Validación de rendimiento'
            },
            links: {
                lovable: 'https://bancoestado.lovable.app/',
                figma: 'https://www.figma.com/design/h6OYFFFws5oCyJLuwfs3yT/Banco-Estado?node-id=0-1&t=LGiSG3MVs82qJHBv-1',
                github: 'https://github.com/Fernandodesign96/bancoestado-app'
            },
            codeDetails: 'Desarrollo Front End (HTML5 + CSS3 + Bootstrap)',
            gallery: [
                {
                    title: "App Original (Legacy)",
                    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/bancoestado/bancoestadovorigin${i + 1}.PNG`)
                },
                {
                    title: "Prototipo Lovable (Versión B)",
                    images: Array.from({ length: 7 }, (_, i) => `/assets/projects/bancoestado/bancoestadoversionb${i + 1}.PNG`)
                }
            ],
            // Spanish Content
            context: 'Banco Estado enfrentaba desafíos en su embudo de conversión para productos B2B. El proceso existente tenía altas tasas de abandono y una experiencia de usuario fragmentada.',
            problem: 'La interfaz legacy dificultaba la navegación y no guiaba eficientemente a los usuarios empresariales a través del proceso de solicitud, resultando en pérdida de oportunidades comerciales.',
            role: 'Lideré el rediseño UX/UI, realizando auditorías de usabilidad, creando prototipos de alta fidelidad y coordinando pruebas A/B.',
            responsibilities: ['Auditoría UX', 'Diseño de Interfaz', 'Prototipado', 'Pruebas de Usabilidad'],
            processSteps: [
                { title: 'Investigación', description: 'Análisis del flujo actual e identificación de puntos de dolor.' },
                { title: 'Ideación', description: 'Wireframing de soluciones para simplificar el embudo.' },
                { title: 'Prototipado', description: 'Desarrollo de prototipos interactivos en Figma y Lovable.' },
                { title: 'Validación', description: 'Testing con usuarios reales para validar mejoras.' }
            ],
            keyDecisions: ['Simplificar formularios', 'Mejorar feedback visual', 'Implementar diseño responsivo'],
            results: ['Aumento significativo en la tasa de finalización de solicitudes', 'Mejora en la satisfacción del usuario'],
            learnings: 'La importancia de reducir la carga cognitiva en procesos financieros complejos.'
        },
        {
            id: 2,
            slug: 'bcn-global',
            galleryCols: 2,
            title: 'BCN Global',
            subtitle: 'Rediseño Corporativo B2B SaaS',
            year: '2025',
            industry: 'B2B SaaS',
            type: 'UX/UI Integral',
            description: 'Soluciones de capacitación corporativa que requerían una presencia web moderna con propuesta de valor clara y diferenciación de servicios.',
            coverImage: '/assets/projects/bcn-global-cover.png',
            tags: ['Arquitectura Información', 'Sistema de Diseño', 'B2B', 'Front-End'],
            metrics: {
                improvement: 'Mejora Percepción Marca',
                impact: 'Sitio Web Funcional'
            },
            links: {
                lovable: 'https://bcnglobal.lovable.app/',
                figma: 'https://www.figma.com/design/BcGdwTMlO6tGBDaoc3D2jX/Redise%C3%B1o-BCN-Global?node-id=0-1&t=oPDIhsV43zFyPlv4-1',
                desktop: 'https://bcnglobal.figweb.site/',
                tablet: 'https://bcnglobaltablet.figweb.site/',
                mobile: 'https://bcnglobalmobile.figweb.site/',
                github: 'https://github.com/Fernandodesign96/bancoestado-app'
            },
            codeDetails: 'Desarrollo Front End (HTML5 + CSS3 + Bootstrap)',
            gallery: [
                {
                    title: "Sitio Original",
                    images: Array.from({ length: 5 }, (_, i) => `/assets/projects/bcnglobal/bcnoriginal${i + 1}.PNG`)
                },
                {
                    title: "Prototipo Lovable",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/bcnglobal/bcnlovable${i + 1}.PNG`)
                },
                {
                    title: "Diseño Final (Figma)",
                    images: Array.from({ length: 5 }, (_, i) => `/assets/projects/bcnglobal/bcnrediseno${i + 1}.PNG`)
                }
            ],
            // Spanish Content
            context: 'BCN Global necesitaba renovar su imagen digital para reflejar su liderazgo en capacitación corporativa. El sitio antiguo no comunicaba eficazmente su propuesta de valor ni sus servicios especializados.',
            problem: 'Navegación confusa y diseño desactualizado que no generaba confianza en clientes corporativos B2B.',
            role: 'Diseñador UX/UI encargado de la reestructuración completa del sitio, desde la arquitectura de información hasta el diseño visual final.',
            responsibilities: ['Arquitectura de Información', 'Diseño UI', 'Sistemas de Diseño', 'Desarrollo Front-End Básico'],
            processSteps: [
                { title: 'Descubrimiento', description: 'Análisis de competidores y definición de objetivos de marca.' },
                { title: 'Estructura', description: 'Creación de nuevo mapa de sitio y wireframes.' },
                { title: 'Diseño Visual', description: 'Aplicación de nueva identidad visual moderna y profesional.' },
                { title: 'Entrega', description: 'Preparación de assets y documentación para desarrollo.' }
            ],
            keyDecisions: ['Priorizar servicios clave', 'Diseño limpio y corporativo', 'Optimización para móviles'],
            results: ['Nueva presencia digital alineada con la marca', 'Mejor estructura de servicios'],
            learnings: 'Cómo equilibrar información corporativa densa con un diseño visual ligero y digerible.'
        },
        {
            id: 3,
            slug: 'ghali-kombucha',
            galleryCols: 2,
            title: 'Ghali Kombucha',
            subtitle: 'Investigación y Optimización UX E-commerce',
            year: '2025',
            industry: 'E-commerce',
            type: 'Investigación UX',
            description: 'Marca de kombucha artesanal que necesitaba mejoras UX basadas en datos mediante card sorting, tree testing y pruebas A/B.',
            coverImage: '/assets/projects/ghali-kombucha-cover.png',
            tags: ['Card Sorting', 'A/B Testing', 'E-commerce', 'Conversión'],
            metrics: {
                improvement: '+12.5% tasa de conversión',
                impact: '+100% duración sesión'
            },
            links: {
                figma: 'https://www.figma.com/design/ebPjqNhtVlGVinwQC5VTcS/Prototipo-Ghali?node-id=0-1&t=zAd0ZmvwNu2PDW4t-1'
            },
            gallery: [
                {
                    title: "Sitio Original",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/ghalikombucha/ghalioriginal${i + 1}.PNG`)
                },
                {
                    title: "Testing A",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/ghalikombucha/ghaliversiona${i + 1}.PNG`)
                },
                {
                    title: "Testing B (Ganadora)",
                    images: Array.from({ length: 8 }, (_, i) => `/assets/projects/ghalikombucha/ghaliversionb${i + 1}.PNG`)
                }
            ],
            // Spanish Content
            context: 'Ghali Kombucha buscaba optimizar su tienda online para aumentar las ventas y mejorar la retención. Se requería un enfoque basado en datos para validar cambios de diseño.',
            problem: 'Baja tasa de conversión y dificultades de los usuarios para encontrar productos específicos en el catálogo.',
            role: 'Investigador UX liderando el proceso de testing y validación de hipótesis de diseño.',
            responsibilities: ['Card Sorting', 'Tree Testing', 'Pruebas A/B', 'Análisis de Datos'],
            processSteps: [
                { title: 'Investigación', description: 'Card sorting para optimizar la arquitectura de información.' },
                { title: 'Validación', description: 'Tree testing para verificar la encontrabilidad de productos.' },
                { title: 'Experimentación', description: 'Diseño y ejecución de pruebas A/B.' },
                { title: 'Análisis', description: 'Interpretación de resultados para decisiones finales.' }
            ],
            keyDecisions: ['Reestructurar menú principal', 'Simplificar fichas de producto', 'Destacar beneficios de salud'],
            results: ['Aumento del 12.5% en conversión', 'Duplicación del tiempo de sesión'],
            learnings: 'El valor de las decisiones de diseño respaldadas por datos cuantitativos reales.'
        },
        {
            id: 4,
            slug: 'la-especieria',
            galleryCols: 2,
            title: 'La Especiería',
            subtitle: 'UX/UI E-commerce & Desarrollo Front-End',
            year: '2024',
            industry: 'E-commerce',
            type: 'UX/UI Integral',
            description: 'E-commerce de alimentos gourmet requiriendo renovación UX completa con foco en descubrimiento de productos y optimización de conversión.',
            coverImage: '/assets/projects/la-especieria-cover.png',
            tags: ['E-commerce', 'Diseño UX/UI', 'Front-End', 'Mobile-First'],
            metrics: {
                improvement: '+100% tasa conversión',
                impact: '+70% CTR'
            },
            links: {
                figma: 'https://www.figma.com/design/UMbDoTx9wA4GK7XuBrpFB4/Wireframe-Propuesta---La-Especier%C3%ADa---E3-dis-046?node-id=51-376&t=ZCmyeh2oqzBqJq6n-1',
                github: 'https://github.com/Fernandodesign96/la-especieria'
            },
            codeDetails: 'Desarrollo Front End (HTML5 + CSS3 + Bootstrap)',
            gallery: [
                {
                    title: "Pagina Oficial",
                    images: Array.from({ length: 6 }, (_, i) => `/assets/projects/laespecieria/laespecieriaoriginal${i + 1}.PNG`)
                },
                {
                    title: "Prototipo Final",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/laespecieria/laespecieriarediseno${i + 1}.PNG`)
                }
            ],
            // Spanish Content
            context: 'La Especiería necesitaba modernizar su plataforma de venta online para mejorar la experiencia de compra de sus productos gourmet y especias.',
            problem: 'Sitio web desactualizado con navegación compleja que dificultaba el descubrimiento de productos y el cierre de ventas.',
            role: 'Diseñador UX/UI y Desarrollador Front-End.',
            responsibilities: ['Investigación de Usuarios', 'Diseño UI', 'Prototyping', 'Desarrollo Front-End'],
            processSteps: [
                { title: 'Investigación', description: 'Análisis de la experiencia de compra actual.' },
                { title: 'Diseño', description: 'Creación de nueva interfaz enfocada en el producto.' },
                { title: 'Desarrollo', description: 'Implementación del diseño utilizando HTML, CSS y Bootstrap.' }
            ],
            keyDecisions: ['Enfoque Mobile-First', 'Mejora de fotografía de producto', 'Simplificación del checkout'],
            results: ['Tasa de conversión duplicada', 'Mejora significativa en CTR'],
            learnings: 'La integración efectiva entre diseño visual atractivo y desarrollo técnico eficiente.'
        },
        {
            id: 5,
            slug: 'pharmafy',
            galleryCols: 3,
            title: 'Pharmafy',
            subtitle: 'Diseño UX App de Salud',
            year: '2023',
            industry: 'Healthcare',
            type: 'Diseño UX',
            description: 'Solución de salud digital para gestión de medicamentos demostrando proceso UX end-to-end desde investigación hasta prototipos.',
            coverImage: '/assets/projects/pharmafy-cover.png',
            tags: ['Healthcare', 'Investigación UX', 'Personas', 'Flujos de Usuario'],
            metrics: {
                improvement: 'Diseño privacidad-primero',
                impact: 'Certificación Google UX'
            },
            links: {
                figma: 'https://www.figma.com/design/lETqUHlS9ABeSDUqg8PJle/Pharmafy?node-id=0-1&t=sNd1MyjcADrqunFV-1'
            },
            gallery: [
                {
                    title: "Prototipo Final",
                    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/pharmafy/pharmafy${i + 1}.PNG`)
                }
            ],
            // Spanish Content
            context: 'Gestión compleja de medicamentos para pacientes con tratamientos crónicos. Se identificó la necesidad de una herramienta centralizada y fácil de usar.',
            problem: 'Falta de adherencia al tratamiento por olvidos y confusión en la gestión de múltiples medicamentos.',
            role: 'Diseñador UX liderando el proyecto como parte de la certificación de Google.',
            responsibilities: ['Entrevistas a Usuarios', 'Creación de Personas', 'Wireframing', 'Prototipado de Alta Fidelidad'],
            processSteps: [
                { title: 'Empatizar', description: 'Investigación profunda con pacientes y cuidadores.' },
                { title: 'Definir', description: 'Identificación de problemas clave y necesidades no cubiertas.' },
                { title: 'Idear', description: 'Brainstorming de soluciones digitales accesibles.' },
                { title: 'Prototipar', description: 'Diseño iterativo desde baja a alta fidelidad.' }
            ],
            keyDecisions: ['Interfaz de alto contraste', 'Recordatorios personalizables', 'Enfoque en privacidad'],
            results: ['Validación exitosa con usuarios reales', 'Diseño accesible para adultos mayores'],
            learnings: 'Diseñar para accesibilidad en salud digital es crítico para el éxito del producto.'
        },
        {
            id: 6,
            slug: 'findies',
            galleryCols: 3,
            title: 'Findies',
            subtitle: 'App de Descubrimiento de Eventos y Música',
            year: '2024',
            industry: 'Entretenimiento',
            type: 'Mobile App UX/UI',
            description: 'Aplicación móvil para descubrir eventos de música en vivo y artistas con enfoque en navegación visual intuitiva.',
            coverImage: '/assets/projects/findies-cover.png',
            tags: ['Diseño Móvil', 'Flujos de Usuario', 'Diseño Visual', 'Entretenimiento'],
            metrics: {
                improvement: 'Descubrimiento eventos',
                impact: 'Identidad visual atractiva'
            },
            links: {
                figma: 'https://www.figma.com/design/fqe2mj3BKBqIR9RclYk8PB/Prototipo-lo-fi---app-contrataci%C3%B3n-de-m%C3%BAsicos?node-id=123-2&t=VNVpllMgyl7K0xVH-1'
            },
            gallery: [
                {
                    title: "Prototipo Final",
                    images: Array.from({ length: 7 }, (_, i) => `/assets/projects/findies/findies${i + 1}.PNG`)
                }
            ],
            // Spanish Content
            context: 'Dificultad para encontrar eventos de música local y artistas emergentes en una plataforma unificada y visualmente atractiva.',
            problem: 'Desconexión entre artistas locales y audiencias potenciales debido a plataformas fragmentadas.',
            role: 'Diseñador UX/UI enfocado en la experiencia móvil y el diseño visual.',
            responsibilities: ['Diseño de Interfaz', 'Diseño de Interacción', 'Creación de Sistema de Diseño'],
            processSteps: [
                { title: 'Investigación', description: 'Análisis de apps de eventos y hábitos de usuarios.' },
                { title: 'Diseño Visual', description: 'Creación de identidad vibrante y energética.' },
                { title: 'Prototipado', description: 'Desarrollo de flujos de descubrimiento y reserva.' }
            ],
            keyDecisions: ['Navegación basada en geolocalización', 'Estética oscura inmersiva', 'Fichas de artista ricas en medios'],
            results: ['Concepto validado de app de descubrimiento social', 'Interfaz altamente visual'],
            learnings: 'La importancia de la inmersión visual en productos de entretenimiento.'
        },
        {
            id: 7,
            slug: 'goodmeal',
            galleryCols: 3,
            coverImageClass: 'max-w-md mx-auto', // Custom class for resizing cover
            title: 'GoodMeal',
            subtitle: 'App de Planificación de Comidas y Nutrición',
            year: '2024',
            industry: 'Salud y Bienestar',
            type: 'Mobile App UX/UI',
            description: 'Aplicación de planificación de comidas enfocada en salud con onboarding optimizado y flujo de adquisición de bajo roce.',
            coverImage: '/assets/projects/goodmeal-cover.png',
            tags: ['Diseño Móvil', 'Onboarding', 'Health Tech', 'Estrategia UX'],
            metrics: {
                improvement: 'Adquisición de usuarios',
                impact: 'Accesibilidad nutricional'
            },
            links: {
                figma: 'https://www.figma.com/design/dFQzwm8NK6z86GDVmIcUd8/Wireframe-App-GoodMeal---Equipo-3?node-id=113-3&t=XpVD9THQJRMtoRae-1'
            },
            gallery: [
                {
                    title: "Prototipo Final",
                    images: [
                        ...Array.from({ length: 5 }, (_, i) => `/assets/projects/goodmeal/goodmeal${i + 1}.PNG`),
                        '/assets/projects/goodmeal/goodmealuikit.PNG'
                    ]
                }
            ],
            // Spanish Content
            context: 'Usuarios buscando mejorar sus hábitos alimenticios a menudo abandonan las apps de nutrición debido a la complejidad en la entrada de datos.',
            problem: 'Alta fricción en el registro de comidas y planificación semanal en apps existentes.',
            role: 'Estratega UX y Diseñador UI.',
            responsibilities: ['Estrategia de Producto', 'Diseño de Onboarding', 'Diseño Visual'],
            processSteps: [
                { title: 'Estrategia', description: 'Definición de propuesta de valor centrada en la simplicidad.' },
                { title: 'Flujos', description: 'Optimización del flujo de onboarding y configuración inicial.' },
                { title: 'Diseño', description: 'Interfaz limpia y amigable para reducir ansiedad.' }
            ],
            keyDecisions: ['Onboarding progresivo', 'Planificación automatizada sugerida', 'Estética minimalista'],
            results: ['Flujo de adquisición simplificado', 'Reducción de pasos para completar tareas clave'],
            learnings: 'Reducir la fricción inicial es clave para la retención en apps de hábitos diarios.'
        }
    ],
    en: [
        {
            id: 1,
            slug: 'banco-estado',
            galleryCols: 3,
            title: 'Banco Estado',
            subtitle: 'Fintech B2B Conversion Optimization',
            year: '2025',
            industry: 'Fintech',
            type: 'End-to-End UX/UI',
            description: 'Banking product with complex conversion funnel requiring comprehensive UX optimization, usability testing, and front-end validation.',
            coverImage: '/assets/projects/banco-estado-cover.png',
            tags: ['Conversion Optimization', 'Fintech', 'AI-Assisted Testing', 'Prototyping'],
            metrics: {
                improvement: 'Funnel optimization',
                impact: 'Performance validation'
            },
            links: {
                lovable: 'https://bancoestado.lovable.app/',
                figma: 'https://www.figma.com/design/h6OYFFFws5oCyJLuwfs3yT/Banco-Estado?node-id=0-1&t=LGiSG3MVs82qJHBv-1',
                github: 'https://github.com/Fernandodesign96/bancoestado-app'
            },
            codeDetails: 'Front End Development (HTML5 + CSS3 + Bootstrap)',
            gallery: [
                {
                    title: "Original App (Legacy)",
                    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/bancoestado/bancoestadovorigin${i + 1}.PNG`)
                },
                {
                    title: "Lovable Version B",
                    images: Array.from({ length: 7 }, (_, i) => `/assets/projects/bancoestado/bancoestadoversionb${i + 1}.PNG`)
                }
            ],
            // English Content - Restored from component
            context: "Banco Estado, one of Chile's largest financial institutions, required UX optimization for their B2B banking product. The existing conversion funnel showed friction points affecting business customer acquisition and account activation rates.",
            problem: "Complex multi-step processes, unclear value propositions, and suboptimal information architecture were creating barriers in the user journey. The challenge was to simplify without compromising the necessary security and compliance requirements inherent to banking products.",
            role: "Led end-to-end UX/UI design process including user research, wireframing, high-fidelity prototyping, and front-end validation.",
            responsibilities: [
                'User flow analysis and funnel optimization strategy',
                'Wireframing and interactive prototyping',
                'High-fidelity UI design aligned with brand guidelines',
                'Usability testing with business banking customers',
                'AI-assisted testing scenario generation',
                'Front-end implementation validation'
            ],
            processSteps: [
                {
                    title: 'Research & Analysis',
                    description: 'Conducted data analysis of existing conversion funnel, identifying dropout points and usability issues. Performed competitive analysis of B2B banking experiences and interviewed stakeholders to understand business constraints and compliance requirements.'
                },
                {
                    title: 'UX Strategy & Wireframing',
                    description: 'Redesigned user flows to reduce steps and cognitive load. Created low to mid-fidelity wireframes focusing on progressive disclosure and clear CTAs. Defined new information architecture prioritizing critical banking actions.'
                },
                {
                    title: 'UI Design & Prototyping',
                    description: 'Developed high-fidelity designs maintaining brand consistency while improving visual hierarchy. Created interactive prototypes for stakeholder review and usability testing. Applied accessibility standards (WCAG 2.1 AA) throughout.'
                },
                {
                    title: 'Testing & Validation',
                    description: 'Conducted usability tests with business customers. Used AI to generate diverse testing scenarios and edge cases. Validated front-end implementation to ensure design fidelity and performance standards.'
                }
            ],
            keyDecisions: [
                'Implemented progressive disclosure to reduce overwhelming first impressions while maintaining access to all features',
                'Designed trust signals (security badges, live support) prominently to address banking anxiety',
                'Created mobile-responsive flows as data showed 40% of business owners started applications on mobile',
                'Optimized form fields based on usability testing, reducing required fields by 30% without compromising KYC requirements'
            ],
            results: [
                'Streamlined conversion funnel with reduced steps',
                'Improved user satisfaction scores in post-launch testing',
                'Successfully validated front-end implementation against design specs',
                'Demonstrated measurable performance improvements in key user flows'
            ],
            learnings: "Fintech UX requires balancing trust and simplicity. Users need reassurance through familiar banking patterns and clear security indicators, but complexity should never be mistaken for thoroughness. The most secure system is one users actually complete successfully."
        },
        {
            id: 2,
            slug: 'bcn-global',
            galleryCols: 2,
            title: 'BCN Global',
            subtitle: 'B2B Corporate Homepage Redesign',
            year: '2025',
            industry: 'B2B SaaS',
            type: 'End-to-End UX/UI',
            description: 'Corporate training solutions provider requiring modern web presence with clear value proposition and service differentiation.',
            coverImage: '/assets/projects/bcn-global-cover.png',
            tags: ['Information Architecture', 'Design System', 'B2B', 'Front-End'],
            metrics: {
                improvement: 'Brand perception',
                impact: 'Functional hosted website'
            },
            links: {
                lovable: 'https://bcnglobal.lovable.app/',
                figma: 'https://www.figma.com/design/BcGdwTMlO6tGBDaoc3D2jX/Redise%C3%B1o-BCN-Global?node-id=0-1&t=oPDIhsV43zFyPlv4-1',
                desktop: 'https://bcnglobal.figweb.site/',
                tablet: 'https://bcnglobaltablet.figweb.site/',
                mobile: 'https://bcnglobalmobile.figweb.site/',
                github: 'https://github.com/Fernandodesign96/bancoestado-app'
            },
            codeDetails: 'Front End Development (HTML5 + CSS3 + Bootstrap)',
            gallery: [
                {
                    title: "Original Site",
                    images: Array.from({ length: 5 }, (_, i) => `/assets/projects/bcnglobal/bcnoriginal${i + 1}.PNG`)
                },
                {
                    title: "Lovable Prototype",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/bcnglobal/bcnlovable${i + 1}.PNG`)
                },
                {
                    title: "Final Design (Figma)",
                    images: Array.from({ length: 5 }, (_, i) => `/assets/projects/bcnglobal/bcnrediseno${i + 1}.PNG`)
                }
            ],
            // English Content - Restored from component
            context: "BCN Global, a leading corporate training solutions provider, needed a complete homepage redesign to better communicate their value proposition and drive lead generation. Their existing website lacked clear messaging and modern UX standards.",
            problem: "Unclear service differentiation, poor information architecture, and dated visual design were limiting their ability to compete in the B2B e-learning market. The site needed to convey professionalism, credibility, and innovation to attract enterprise clients.",
            role: "End-to-end ownership of information architecture, UX strategy, visual design, design system creation, and front-end implementation.",
            responsibilities: [
                'Stakeholder interviews and requirements gathering',
                'Content strategy and information architecture',
                'Visual design system creation',
                'High-fidelity UI design',
                'Front-end development and hosting setup',
                'Performance optimization and SEO implementation'
            ],
            processSteps: [
                {
                    title: 'Discovery & Strategy',
                    description: 'Conducted stakeholder workshops to define business goals, target audiences, and key differentiators. Analyzed competitor websites and identified opportunities for differentiation in messaging and UX.'
                },
                {
                    title: 'Information Architecture',
                    description: 'Restructured site navigation and content hierarchy to prioritize services and value propositions. Created clear pathways for different user segments (HR managers, L&D professionals, executives).'
                },
                {
                    title: 'Design System & UI',
                    description: 'Developed comprehensive design system including typography, color palette, components, and spacing guidelines. Created high-fidelity mockups emphasizing professionalism and modern aesthetics aligned with B2B expectations.'
                },
                {
                    title: 'Implementation & Launch',
                    description: 'Built responsive front-end with focus on performance and accessibility. Set up hosting infrastructure, implemented SEO best practices, and conducted cross-browser testing before launch.'
                }
            ],
            keyDecisions: [
                'Service-focused homepage hero highlighting three pillars of training solutions with clear visual differentiation',
                'Conversion-optimized CTAs placed strategically throughout the page with A/B tested copy',
                'Trust-building elements prominently displayed: client logos, certifications, case study metrics',
                'Mobile-first responsive design considering that initial research often happens on mobile devices'
            ],
            results: [
                'Deployed fully functional website with custom domain and hosting',
                'Significantly improved brand perception based on client feedback',
                'Created scalable design system for future page development',
                'Achieved excellent performance scores (90+ Lighthouse)',
                'Established clear visual and content hierarchy for lead generation'
            ],
            learnings: "B2B websites require credibility-first design. Enterprise clients need to quickly understand what you do, who you've worked with, and why you're qualified. Visual polish matters, but clear communication and trust signals drive conversion in this market."
        },
        {
            id: 3,
            slug: 'ghali-kombucha',
            galleryCols: 2,
            title: 'Ghali Kombucha',
            subtitle: 'E-commerce UX Research & Optimization',
            year: '2025',
            industry: 'E-commerce',
            type: 'UX Research & Testing',
            description: 'Artisan kombucha brand needing data-driven UX improvements through card sorting, tree testing, and A/B testing.',
            coverImage: '/assets/projects/ghali-kombucha-cover.png',
            tags: ['Card Sorting', 'A/B Testing', 'E-commerce', 'Conversion'],
            metrics: {
                improvement: '+12.5% conversion rate',
                impact: '+100% session duration'
            },
            links: {
                figma: 'https://www.figma.com/design/ebPjqNhtVlGVinwQC5VTcS/Prototipo-Ghali?node-id=0-1&t=zAd0ZmvwNu2PDW4t-1'
            },
            gallery: [
                {
                    title: "Original Site",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/ghalikombucha/ghalioriginal${i + 1}.PNG`)
                },
                {
                    title: "Testing A",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/ghalikombucha/ghaliversiona${i + 1}.PNG`)
                },
                {
                    title: "Testing B (Winner)",
                    images: Array.from({ length: 8 }, (_, i) => `/assets/projects/ghalikombucha/ghaliversionb${i + 1}.PNG`)
                }
            ],
            // English Content - Restored from component
            context: "Ghali Kombucha, an artisan kombucha brand, needed data-driven UX improvements to increase online sales. Despite having quality products and growing brand awareness, their e-commerce conversion rates and session durations were below industry benchmarks.",
            problem: "Users struggled to find products due to confusing categorization, and the checkout process had multiple friction points causing cart abandonment. The information architecture didn't match user mental models for browsing health beverages.",
            role: "UX Research lead responsible for conducting card sorting studies, tree testing, and A/B testing to validate and optimize the e-commerce experience.",
            responsibilities: [
                'UX research methodology design and execution',
                'Card sorting studies for product categorization',
                'Tree testing for navigation validation',
                'A/B test design and analysis for checkout optimization',
                'Data analysis and actionable recommendations',
                'Collaboration with development team on implementation'
            ],
            processSteps: [
                {
                    title: 'Research Planning',
                    description: 'Defined research objectives focused on improving product discoverability and reducing checkout friction. Recruited participants matching target customer demographics (health-conscious consumers aged 25-45).'
                },
                {
                    title: 'Card Sorting & IA',
                    description: 'Conducted open and closed card sorting sessions to understand how users naturally categorize kombucha products. Discovered that users preferred categorization by flavor profile and benefits rather than technical fermentation details.'
                },
                {
                    title: 'Tree Testing',
                    description: 'Validated proposed navigation structure through tree testing exercises. Identified that users successfully found products 78% faster with the new IA compared to the existing structure.'
                },
                {
                    title: 'A/B Testing & Optimization',
                    description: 'Designed and ran A/B tests on checkout flow variations, CTA copy, trust signals, and form layouts. Iterated based on data to maximize conversion while minimizing friction.'
                }
            ],
            keyDecisions: [
                'Reorganized product categories from production-based to benefit-based (e.g., "Digestive Health" instead of "Original Blend")',
                'Simplified checkout to single-page design based on A/B test showing 12.5% conversion improvement',
                'Added product comparison feature after research showed users struggled to differentiate between flavors',
                'Implemented persistent cart with email recovery based on abandonment data'
            ],
            results: [
                '+12.5% conversion rate increase after implementing single-page checkout',
                '+100% increase in average session duration following IA improvements',
                'Reduced cart abandonment by 18% through strategic friction point removal',
                'Improved product findability scores by 78% in follow-up tree testing',
                'Data-driven recommendations adopted by development team'
            ],
            learnings: "E-commerce success depends on friction-free discovery and purchase flows. Users don't care about your internal product organization—they think in terms of their own needs and goals. Testing with real users early and often prevents costly assumptions and ensures the IA actually serves user mental models."
        },
        {
            id: 4,
            slug: 'la-especieria',
            galleryCols: 2,
            title: 'La Especiería',
            subtitle: 'E-commerce UX/UI & Front-End Development',
            year: '2024',
            industry: 'E-commerce',
            type: 'End-to-End UX/UI',
            description: 'Specialty foods e-commerce requiring complete UX overhaul with focus on product discovery and conversion optimization.',
            coverImage: '/assets/projects/la-especieria-cover.png',
            tags: ['E-commerce', 'UX/UI Design', 'Front-End', 'Mobile-First'],
            metrics: {
                improvement: '+100% conversion rate',
                impact: '+70% CTR'
            },
            links: {
                figma: 'https://www.figma.com/design/UMbDoTx9wA4GK7XuBrpFB4/Wireframe-Propuesta---La-Especier%C3%ADa---E3-dis-046?node-id=51-376&t=ZCmyeh2oqzBqJq6n-1',
                github: 'https://github.com/Fernandodesign96/la-especieria'
            },
            codeDetails: 'Front End Development (HTML5 + CSS3 + Bootstrap)',
            gallery: [
                {
                    title: "Original Site",
                    images: Array.from({ length: 6 }, (_, i) => `/assets/projects/laespecieria/laespecieriaoriginal${i + 1}.PNG`)
                },
                {
                    title: "Final Prototype",
                    images: Array.from({ length: 4 }, (_, i) => `/assets/projects/laespecieria/laespecieriarediseno${i + 1}.PNG`)
                }
            ],
            // English Content - Restored from component
            context: "La Especiería, a specialty spice and seasoning e-commerce store, required a complete UX/UI overhaul to improve conversion rates and customer engagement. The existing site had poor visual hierarchy, confusing navigation, and low purchase completion rates.",
            problem: "Users were bouncing quickly due to unclear product differentiation, lack of trust signals, and cumbersome checkout flows. The mobile experience was particularly problematic, despite mobile traffic representing over 60% of visitors.",
            role: "End-to-end UX/UI design and front-end development, from initial user research through final implementation.",
            responsibilities: [
                'User journey mapping and flow optimization',
                'Wireframing and information architecture',
                'Visual design and brand expression',
                'Front-end development (HTML, CSS, JavaScript)',
                'Mobile-first responsive implementation',
                'Performance optimization and testing'
            ],
            processSteps: [
                {
                    title: 'User Research & Analysis',
                    description: 'Analyzed existing analytics, conducted user interviews, and performed heuristic evaluation. Identified key pain points in product discovery, comparison, and purchase flows. Mapped current vs. ideal user journeys.'
                },
                {
                    title: 'UX Strategy & Wireframing',
                    description: 'Redesigned information architecture prioritizing product photography and clear categorization. Created mobile-first wireframes emphasizing visual product discovery and streamlined cart experience.'
                },
                {
                    title: 'Visual Design',
                    description: 'Developed warm, appetizing visual design reflecting the artisanal nature of specialty spices. Created strong visual hierarchy through typography, color, and spacing. Designed product cards showcasing high-quality photography.'
                },
                {
                    title: 'Front-End Development',
                    description: 'Built responsive website with focus on performance and accessibility. Optimized images for fast loading. Implemented smooth interactions and micro-animations to enhance premium feel without sacrificing speed.'
                }
            ],
            keyDecisions: [
                'Product-focused homepage layout with large photography to evoke sensory appeal of spices',
                'Prominent trust signals: secure payment badges, customer reviews, origin stories',
                'One-click reorder feature based on insight that spice customers are repeat buyers',
                'Mobile-first design with simplified navigation tailored to touch interactions',
                'Strategic use of scarcity and social proof without appearing manipulative'
            ],
            results: [
                '+100% increase in conversion rate post-redesign',
                '+70% improvement in click-through rate on product pages',
                'Reduced bounce rate by 35% through improved initial engagement',
                'Mobile conversion rate improved by 90% with mobile-first approach',
                'Average order value increased by 25% through better cross-selling'
            ],
            learnings: "E-commerce design must balance emotion and functionality. For specialty food products, visual appeal and storytelling drive desire, but the path to purchase must be completely frictionless. Mobile optimization is non-negotiable—most users browse on mobile even if they ultimately purchase on desktop."
        },
        {
            id: 5,
            slug: 'pharmafy',
            galleryCols: 3,
            title: 'Pharmafy',
            subtitle: 'Healthcare App UX Design',
            year: '2023',
            industry: 'Healthcare',
            type: 'UX Design Project',
            description: 'Digital health solution for medication management demonstrating end-to-end UX process from research to high-fidelity prototypes.',
            coverImage: '/assets/projects/pharmafy-cover.png',
            tags: ['Healthcare', 'UX Research', 'Personas', 'User Flows'],
            metrics: {
                improvement: 'Privacy-first design',
                impact: 'Google UX certification'
            },
            links: {
                figma: 'https://www.figma.com/design/lETqUHlS9ABeSDUqg8PJle/Pharmafy?node-id=0-1&t=sNd1MyjcADrqunFV-1'
            },
            gallery: [
                {
                    title: "Final Prototype",
                    images: Array.from({ length: 9 }, (_, i) => `/assets/projects/pharmafy/pharmafy${i + 1}.PNG`)
                }
            ],
            // English Content - Restored from component
            context: "Pharmafy was developed as part of the Google UX Design Professional Certificate, focusing on creating a digital health solution for medication management. The project challenged me to apply end-to-end UX methodology to a complex healthcare domain.",
            problem: "Many people struggle to manage multiple medications, remember dosing schedules, and find nearby pharmacies with their prescriptions in stock. Existing solutions were either too complex, lacked essential features, or failed to address privacy concerns critical in healthcare.",
            role: "Sole UX designer responsible for the complete design process from research to high-fidelity prototypes.",
            responsibilities: [
                'User research and competitive analysis',
                'Persona development based on research findings',
                'User journey mapping and pain point identification',
                'Information architecture and user flows',
                'Low-fidelity wireframing and iteration',
                'High-fidelity UI design and interactive prototyping',
                'Usability testing and design refinement'
            ],
            processSteps: [
                {
                    title: 'Research & Discovery',
                    description: 'Conducted user interviews with individuals managing multiple medications, surveyed 50+ users about medication management challenges, and analyzed competitor apps. Identified key pain points: forgetfulness, pharmacy availability, and medication interaction concerns.'
                },
                {
                    title: 'Personas & Journey Mapping',
                    description: 'Created three primary personas representing different user needs (elderly patient with multiple medications, busy professional, caregiver). Mapped current-state journeys highlighting frustrations and opportunities for digital intervention.'
                },
                {
                    title: 'Wireframing & Architecture',
                    description: 'Developed information architecture prioritizing medication tracking, reminders, and pharmacy search. Created low-fidelity wireframes testing different approaches to medication input, schedule visualization, and notification systems.'
                },
                {
                    title: 'High-Fidelity Design',
                    description: 'Designed clean, accessible interface using calming color palette appropriate for healthcare. Emphasized clarity and simplicity to serve diverse age groups. Created interactive prototype for usability testing.'
                },
                {
                    title: 'Testing & Iteration',
                    description: 'Conducted moderated usability tests with 10 participants. Identified usability issues with medication entry flow and refined based on feedback. Simplified navigation and improved visual hierarchy based on test observations.'
                }
            ],
            keyDecisions: [
                'Privacy-first approach: clear data handling explanations and minimal required information',
                'Simplified medication entry using barcode scanning and medication database',
                'Visual medication schedule calendar rather than list view for better comprehension',
                'Pharmacy search integrated with real-time inventory when available',
                'Caregiver mode allowing family members to help manage medications'
            ],
            results: [
                'Successfully completed Google UX Design Professional Certificate',
                'Demonstrated mastery of end-to-end UX process',
                'Created portfolio piece showcasing healthcare UX capabilities',
                'Received positive feedback during usability testing on clarity and ease of use',
                'Developed understanding of accessibility and privacy requirements in health tech'
            ],
            learnings: "Healthcare UX demands exceptional clarity, strong privacy protections, and deep empathy for users in potentially stressful situations. Every design decision must prioritize trust and simplicity—users need to feel confident in the app without learning complex systems while managing their health."
        },
        {
            id: 6,
            slug: 'findies',
            galleryCols: 3,
            title: 'Findies',
            subtitle: 'Music & Events Discovery App',
            year: '2024',
            industry: 'Entertainment',
            type: 'Mobile App UX/UI',
            description: 'Mobile application for discovering live music events and artists with focus on visual-first browsing and intuitive navigation.',
            coverImage: '/assets/projects/findies-cover.png',
            tags: ['Mobile Design', 'User Flows', 'Visual Design', 'Entertainment'],
            metrics: {
                improvement: 'Event discovery',
                impact: 'Engaging visual identity'
            },
            links: {
                figma: 'https://www.figma.com/design/fqe2mj3BKBqIR9RclYk8PB/Prototipo-lo-fi---app-contrataci%C3%B3n-de-m%C3%BAsicos?node-id=123-2&t=VNVpllMgyl7K0xVH-1'
            },
            gallery: [
                {
                    title: "Final Prototype",
                    images: Array.from({ length: 7 }, (_, i) => `/assets/projects/findies/findies${i + 1}.PNG`)
                }
            ],
            // English Content - Restored from component
            context: "Findies is a mobile application designed to help music enthusiasts discover live events and emerging artists in their area. The app needed to stand out in a crowded entertainment app market by offering superior discovery and booking experiences.",
            problem: "Existing event discovery apps prioritized major venues and popular artists, making it difficult for users to find intimate shows and emerging talent. Users also struggled with fragmented booking processes requiring navigation to multiple external sites.",
            role: "End-to-end UX/UI designer responsible for creating the complete mobile app experience.",
            responsibilities: [
                'User research and competitive analysis',
                'User flow design and optimization',
                'Visual design and brand identity',
                'Mobile interface design (iOS/Android patterns)',
                'Interactive prototyping',
                'Collaboration with developers on implementation'
            ],
            processSteps: [
                {
                    title: 'User Research',
                    description: 'Interviewed music enthusiasts about how they discover live events. Found that users rely on social media, word-of-mouth, and venue websites—leading to fragmented, time-consuming searches. Identified desire for personalized recommendations based on music taste.'
                },
                {
                    title: 'Flow Design',
                    description: 'Designed three primary user flows: browsing events (visual-first exploration), searching artists, and booking tickets. Prioritized reducing friction between discovery and purchase. Created seamless transitions between browse, detail, and booking states.'
                },
                {
                    title: 'Visual Design',
                    description: 'Developed vibrant, energetic visual language reflecting live music atmosphere. Used gradient overlays on event photography to maintain legibility. Created distinctive iconography and UI elements that feel fresh and engaging without sacrificing usability.'
                },
                {
                    title: 'Prototyping',
                    description: 'Built interactive prototype demonstrating key interactions: swipe-based discovery, artist detail pages with embedded music previews, and streamlined booking flow. Tested gesture-based navigation patterns.'
                }
            ],
            keyDecisions: [
                'Visual-first browsing with high-quality event photography and artist imagery as primary navigation',
                'Integrated music preview without leaving app context to maintain engagement',
                'Personalized recommendation engine based on listening history and saved artists',
                'Social features allowing friends to share and coordinate event attendance',
                'In-app booking reducing external site redirects and cart abandonment'
            ],
            results: [
                'Created engaging visual identity distinguishing app from competitors',
                'Designed intuitive event discovery flow praised in user testing',
                'Streamlined booking process reducing steps required by 60%',
                'Developed scalable design system for future feature additions',
                'Demonstrated capability in entertainment and social app UX'
            ],
            learnings: "Entertainment apps must evoke emotion while remaining highly functional. Users need to feel the energy and excitement of live music through the interface itself, but discovery and booking must be effortless. Visual design serves both aesthetic and functional purposes in this domain."
        },
        {
            id: 7,
            slug: 'goodmeal',
            galleryCols: 3,
            title: 'GoodMeal',
            subtitle: 'Meal Planning & Nutrition App',
            year: '2024',
            industry: 'Salud y Bienestar',
            type: 'Mobile App UX/UI',
            description: 'Health-focused meal planning application with streamlined onboarding and low-friction user acquisition flow.',
            coverImage: '/assets/projects/goodmeal-cover.png',
            tags: ['Mobile Design', 'Onboarding', 'Health Tech', 'UX Strategy'],
            metrics: {
                improvement: 'User acquisition',
                impact: 'Accessible nutrition tracking'
            },
            links: {
                figma: 'https://www.figma.com/design/dFQzwm8NK6z86GDVmIcUd8/Wireframe-App-GoodMeal---Equipo-3?node-id=113-3&t=XpVD9THQJRMtoRae-1'
            },
            gallery: [
                {
                    title: "Final Prototype",
                    images: [
                        ...Array.from({ length: 5 }, (_, i) => `/assets/projects/goodmeal/goodmeal${i + 1}.PNG`),
                        '/assets/projects/goodmeal/goodmealuikit.PNG'
                    ]
                }
            ],
            // English Content - Restored from component
            context: "GoodMeal is a meal planning and nutrition tracking app designed to make healthy eating accessible and sustainable. The app needed to balance comprehensive nutrition features with an approachable, non-intimidating user experience.",
            problem: "Many nutrition apps overwhelm users with data entry requirements and complex calorie tracking, leading to abandonment. Users want to eat healthier but don't want to feel like they're doing homework every meal.",
            role: "UX/UI designer focusing on onboarding experience, authentication flow, and overall visual design strategy.",
            responsibilities: [
                'User journey mapping for new user acquisition',
                'Onboarding flow design and optimization',
                'Authentication experience (email, social sign-in)',
                'Visual design and friendly brand expression',
                'Mobile-first interface design',
                'Form optimization and input validation UX'
            ],
            processSteps: [
                {
                    title: 'User Research',
                    description: 'Analyzed user reviews of competitor apps, identifying common complaints about onboarding friction and complexity. Conducted surveys revealing users abandon nutrition apps when initial setup feels overwhelming. Key insight: simplicity beats comprehensiveness for user retention.'
                },
                {
                    title: 'Onboarding Strategy',
                    description: 'Designed progressive onboarding collecting only essential information upfront. Deferred detailed nutrition preferences until after users experienced core value. Created friendly, encouraging copy reducing anxiety about tracking.'
                },
                {
                    title: 'Authentication Design',
                    description: 'Implemented social sign-in options (Google, Apple) alongside traditional email registration. Reduced form fields to minimum viable set. Designed clear value proposition on login screen to motivate registration.'
                },
                {
                    title: 'Visual Design',
                    description: 'Created warm, approachable visual language using friendly illustrations and encouraging color palette. Avoided clinical healthcare aesthetic in favor of lifestyle brand feel. Designed interface feeling supportive rather than judgmental.'
                }
            ],
            keyDecisions: [
                'Social authentication as primary registration path to reduce friction',
                'Illustrated onboarding explaining value before requesting data',
                'Pink color palette conveying friendliness rather than traditional health app green/blue',
                'Gamification elements making nutrition tracking feel rewarding rather than burdensome',
                'Smart defaults and AI-suggested meals reducing manual data entry'
            ],
            results: [
                'Streamlined onboarding reducing registration abandonment',
                'Social authentication increasing successful account creation',
                'Friendly visual design improving user perception of app approachability',
                'Created accessible entry point to nutrition tracking for non-expert users',
                'Demonstrated ability to design for health tech with mainstream appeal'
            ],
            learnings: "Health apps must balance data collection with user motivation. Every additional field in onboarding increases abandonment risk. The key is providing immediate value with minimal friction, then progressively collecting data as users become engaged and see benefits."
        }
    ]
}

export default projectsData
