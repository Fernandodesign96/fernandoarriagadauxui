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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
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
            ]
        }
    ]
}

export default projectsData
