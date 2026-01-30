const projectsData = {
    es: [
        {
            id: 1,
            slug: 'banco-estado',
            galleryCols: 3,
            title: 'Banco Estado',
            subtitle: 'Optimización de conversión B2B en producto fintech',
            year: '2025',
            industry: 'Fintech',
            type: 'UX/UI Integral',
            description: 'Producto bancario con embudo de conversión complejo que requería optimización UX, pruebas de usabilidad y validación visual.',
            coverImage: '/assets/projects/bancoestado.PNG',
            deviceType: 'iphone',
            tags: ['Optimización de Conversión', 'Fintech', 'Testing con IA'],
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
            // Spanish Content - Translated from English
            context: 'Banco Estado, una de las instituciones financieras más grandes de Chile, requería optimización UX para su producto bancario B2B. El embudo de conversión existente mostraba puntos de fricción que afectaban la adquisición de clientes empresariales y las tasas de activación de cuentas.',
            problem: 'Procesos complejos de múltiples pasos, propuestas de valor poco claras y una arquitectura de información subóptima creaban barreras en el viaje del usuario. El desafío era simplificar sin comprometer los requisitos necesarios de seguridad y cumplimiento inherentes a los productos bancarios.',
            role: 'Lideré el proceso de diseño UX/UI de principio a fin, incluyendo investigación de usuarios, wireframing, prototipado de alta fidelidad y validación front-end.',
            responsibilities: [
                'Análisis de flujo de usuarios y estrategia de optimización del embudo',
                'Wireframing y prototipado interactivo',
                'Diseño UI de alta fidelidad alineado con las pautas de marca',
                'Pruebas de usabilidad con clientes de banca empresarial',
                'Generación de escenarios de prueba asistida por IA',
                'Validación de implementación front-end'
            ],
            processSteps: [
                {
                    title: 'Investigación y Análisis',
                    description: 'Realicé análisis de datos del embudo de conversión existente, identificando puntos de abandono y problemas de usabilidad. Ejecuté análisis competitivo de experiencias bancarias B2B y entrevisté a stakeholders para comprender las limitaciones comerciales y requisitos de cumplimiento.'
                },
                {
                    title: 'Estrategia UX y Wireframing',
                    description: 'Rediseñé flujos de usuarios para reducir pasos y carga cognitiva. Creé wireframes de baja a media fidelidad enfocados en la divulgación progresiva y CTAs claros. Definí una nueva arquitectura de información priorizando acciones bancarias críticas.'
                },
                {
                    title: 'Diseño UI y Prototipado',
                    description: 'Desarrollé diseños de alta fidelidad manteniendo la consistencia de marca mientras mejoraba la jerarquía visual. Creé prototipos interactivos para revisión de stakeholders y pruebas de usabilidad. Apliqué estándares de accesibilidad (WCAG 2.1 AA) en todo el proceso.'
                },
                {
                    title: 'Pruebas y Validación',
                    description: 'Conduje pruebas de usabilidad con clientes empresariales. Utilicé IA para generar diversos escenarios de prueba y casos extremos. Validé la implementación front-end para asegurar fidelidad de diseño y estándares de rendimiento.'
                }
            ],
            keyDecisions: [
                'Implementé divulgación progresiva para reducir primeras impresiones abrumadoras manteniendo acceso a todas las funciones',
                'Diseñé señales de confianza (insignias de seguridad, soporte en vivo) de manera prominente para abordar la ansiedad bancaria',
                'Creé flujos responsivos móviles ya que los datos mostraron que el 40% de los dueños de negocios iniciaban solicitudes en móviles',
                'Optimicé campos de formulario basados en pruebas de usabilidad, reduciendo campos requeridos en un 30% sin comprometer requisitos KYC'
            ],
            results: [
                'Visibilice problemas en estabilidad del flujo y conversión.',
                'Identifiqué fricciones críticas en el funnel de conversión asociadas a intermitencia del sistema, falta de feedback y puntos de abandono.',
                'Definí criterio, evaluación UX y KPIs de performance al analizar impacto en conversión y experiencia.',
                'Propuse mejoras estratégicas de flujo, arquitectura de información y feedback del sistema.',
                'Diseñé wireframes y prototipos de alta fidelidad orientados a escalabilidad.',
                'Implementé maquetación asistida por IA (Lovable, Figma Make, Figma Sites) para agilizar procesos.',
                'Desarrollé prototipo en Visual Studio Code (HTML, CSS, Bootstrap) para validación técnica.',
                'Ejecuté testeo UX para validar hipótesis y optimizar flujos críticos.',
                'Optimizé la estabilidad, el performance y mejoré mi experiencia bancaria B2B.'
            ],
            learnings: 'La UX Fintech requiere equilibrar confianza y simplicidad. Los usuarios necesitan tranquilidad a través de patrones bancarios familiares e indicadores claros de seguridad, pero la complejidad nunca debe confundirse con minuciosidad. El sistema más seguro es aquel que los usuarios realmente completan con éxito.'
        },
        {
            id: 2,
            slug: 'bcn-global',
            galleryCols: 2,
            title: 'BCN Global',
            subtitle: 'Rediseño corporativo B2B SaaS orientado a claridad y escalabilidad',
            year: '2025',
            industry: 'B2B SaaS',
            type: 'UX/UI Integral',
            description: 'Soluciones de capacitación corporativa que requerían una presencia web moderna con propuesta de valor clara y diferenciación de servicios.',
            coverImage: '/assets/projects/bcnglobal.PNG',
            deviceType: 'laptop',
            tags: ['Arquitectura de Información', 'Sistema de Diseño', 'B2B'],
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
                github: 'https://github.com/Fernandodesign96/bcnglobal'
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
            // Spanish Content - Translated from English
            context: 'BCN Global, un proveedor líder de soluciones de capacitación corporativa, necesitaba un rediseño completo de su página de inicio para comunicar mejor su propuesta de valor e impulsar la generación de leads. Su sitio web existente carecía de mensajes claros y estándares UX modernos.',
            problem: 'Diferenciación de servicios poco clara, arquitectura de información deficiente y diseño visual anticuado limitaban su capacidad para competir en el mercado de e-learning B2B. El sitio necesitaba transmitir profesionalismo, credibilidad e innovación para atraer clientes empresariales.',
            role: 'Responsable integral de la arquitectura de información, estrategia UX, diseño visual, creación del sistema de diseño e implementación front-end.',
            responsibilities: [
                'Entrevistas con stakeholders y recopilación de requisitos',
                'Estrategia de contenido y arquitectura de información',
                'Creación de sistema de diseño visual',
                'Diseño UI de alta fidelidad',
                'Desarrollo front-end y configuración de hosting',
                'Optimización de rendimiento e implementación SEO'
            ],
            processSteps: [
                {
                    title: 'Descubrimiento y Estrategia',
                    description: 'Facilité workshops con stakeholders para alinear objetivos de negocio, audiencias prioritarias y expectativas del producto digital. El foco estuvo en traducir objetivos comerciales en decisiones de experiencia, identificando qué debía comunicar la web en los primeros segundos para captar interés B2B. Complementé esto con análisis competitivo, identificando oportunidades de diferenciación tanto en mensaje como en estructura UX frente a competidores directos del sector e-learning corporativo.'
                },
                {
                    title: 'Arquitectura de Información',
                    description: 'Reestructuré completamente la navegación y jerarquía de contenidos con el objetivo de reducir fricción cognitiva y acelerar la comprensión del servicio. Diseñé rutas claras para distintos perfiles de usuario (RRHH, L&D y ejecutivos), priorizando servicios core, beneficios clave y llamados a la acción alineados al contexto de cada segmento. Esto permitió guiar al usuario hacia la conversión sin sobrecargar la experiencia.'
                },
                {
                    title: 'Sistema de Diseño y UI',
                    description: 'Desarrollé un sistema de diseño escalable que incluyó tipografía, paleta cromática, componentes reutilizables y reglas de espaciado, asegurando consistencia visual y facilidad de mantenimiento. El diseño de las interfaces priorizó claridad, legibilidad y percepción de profesionalismo, alineándose con los estándares esperados en productos B2B SaaS.'
                },
                {
                    title: 'Implementación y Lanzamiento',
                    description: 'Implementé un front-end responsivo con foco en rendimiento, accesibilidad y buenas prácticas de desarrollo. Además, optimicé estructura SEO, configuré infraestructura de hosting y realicé testing cross-browser antes del lanzamiento. Esto permitió validar el diseño en un entorno real y asegurar que las decisiones UX/UI fueran técnicamente viables y escalables.'
                }
            ],
            keyDecisions: [
                {
                    title: 'Hero orientado a propuesta de valor y servicios core',
                    description: 'Rediseñé el héroe de la homepage para comunicar qué hace BCN Global en los primeros 5 segundos, estructurando la propuesta en tres pilares claros de soluciones de capacitación, con diferenciación visual y jerarquía progresiva.',
                    concluding: 'Esto reduce fricción cognitiva y acelera la comprensión del servicio en audiencias B2B.'
                },
                {
                    title: 'CTAs optimizados para conversión y contexto',
                    description: 'Definí CTAs primarios y secundarios según la etapa del usuario en el funnel, ubicándolos estratégicamente a lo largo de la página. El copy fue iterado y validado mediante pruebas A/B, priorizando acciones de bajo compromiso inicial para maximizar generación de leads.',
                    concluding: ''
                },
                {
                    title: 'Señales de confianza visibles y persistentes',
                    description: 'Incorporé elementos de credibilidad en puntos clave del recorrido (above the fold y secciones decisivas), incluyendo Logos de clientes, Certificaciones y Métricas de casos de estudio.',
                    concluding: 'Estas señales reducen fricción en la toma de decisión y refuerzan la percepción de profesionalismo en un contexto B2B.'
                },
                {
                    title: 'Enfoque mobile-first basado en comportamiento real',
                    description: 'El diseño fue abordado desde una lógica mobile-first, considerando que gran parte de la investigación inicial ocurre en dispositivos móviles, incluso en contextos B2B.',
                    concluding: 'Esto aseguró legibilidad, jerarquía clara y accesibilidad en etapas tempranas del proceso de evaluación.'
                }
            ],
            results: {
                isCustom: true,
                sections: [
                    {
                        title: "1. Resultados",
                        points: [
                            "Homepage corporativa rediseñada con una narrativa clara orientada a servicios B2B.",
                            "Arquitectura de información simplificada, reduciendo fricción cognitiva y mejorando el escaneo de contenido.",
                            "Sistema de diseño escalable implementado y validado en desktop, tablet y mobile.",
                            "Prototipo navegable y versión funcional publicada para validación real."
                        ]
                    },
                    {
                        title: "2. Impacto UX & Negocio",
                        points: [
                            "Mayor claridad en la propuesta de valor, facilitando la comprensión del servicio en los primeros segundos.",
                            "Mejora en engagement y recorrido de usuario hacia CTAs estratégicos.",
                            "Incremento en métricas de conversión y tiempo en página tras el rediseño.",
                            "Reducción de fricción en el flujo de captación de leads B2B."
                        ]
                    },
                    {
                        title: "3. Aprendizajes clave",
                        points: [
                            "En contextos B2B, la claridad y la confianza tienen mayor impacto que la estética.",
                            "Reducción de fricción cognitiva, priorización de mensajes clave y arquitectura de información sólida mejoran métricas directamente.",
                            "Diseñar con conocimiento de front-end permite anticipar limitaciones técnicas y reducir retrabajos.",
                            "Construcción de soluciones más realistas, escalables y alineadas con los objetivos de negocio."
                        ]
                    }
                ]
            },
            learnings: 'En contextos B2B, la claridad y la confianza tienen mayor impacto que la estética. Reducir fricción cognitiva, priorizar mensajes clave y guiar decisiones mediante una arquitectura de información sólida mejora directamente métricas de engagement y captación. Además, diseñar con conocimiento de front-end permite anticipar limitaciones técnicas, reducir retrabajos y construir soluciones más realistas, escalables y alineadas con negocio.',
        },
        {
            id: 3,
            slug: 'ghali-kombucha',
            galleryCols: 2,
            title: 'Ghali Kombucha',
            subtitle: 'Investigación y optimización UX para e-commerce de consumo',
            year: '2025',
            industry: 'E-commerce',
            type: 'Investigación UX',
            description: 'Marca de kombucha artesanal que necesitaba mejoras UX basadas en datos mediante card sorting, tree testing y pruebas A/B.',
            coverImage: '/assets/projects/ghalikombucha.PNG',
            deviceType: 'laptop',
            tags: ['Card Sorting', 'A/B Testing', 'E-commerce'],
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
            // Spanish Content - Translated from English
            context: 'Ghali Kombucha, una marca de kombucha artesanal, necesitaba mejoras UX basadas en datos para aumentar las ventas online. A pesar de tener productos de calidad y creciente reconocimiento de marca, sus tasas de conversión de e-commerce y duración de sesiones estaban por debajo de los puntos de referencia de la industria.',
            problem: 'Los usuarios luchaban por encontrar productos debido a una categorización confusa, y el proceso de pago tenía múltiples puntos de fricción causando abandono del carrito. La arquitectura de información no coincidía con los modelos mentales de los usuarios para navegar por bebidas saludables.',
            role: 'Líder de Investigación UX responsable de conducir estudios de card sorting, tree testing y pruebas A/B para validar y optimizar la experiencia de e-commerce.',
            responsibilities: [
                'Diseño y ejecución de metodología de investigación UX',
                'Estudios de card sorting para categorización de productos',
                'Tree testing para validación de navegación',
                'Diseño y análisis de pruebas A/B para optimización de checkout',
                'Análisis de datos y recomendaciones accionables',
                'Colaboración con equipo de desarrollo en implementación'
            ],
            processSteps: [
                {
                    title: 'Planificación de la Investigación',
                    description: 'Definí objetivos de investigación orientados a mejorar la descubribilidad de productos, aumentar la permanencia y reducir fricción en el flujo de compra. Recluté participantes alineados con el perfil del usuario objetivo (consumidores conscientes de la salud entre 25 y 45 años), priorizando hábitos de compra digital y uso mobile. El foco estuvo en validar estructura, jerarquía y flujo, más que estímulos visuales aislados.'
                },
                {
                    title: 'Card Sorting',
                    description: 'Conduje sesiones de card sorting abiertas y cerradas para entender cómo los usuarios organizan mentalmente los productos de kombucha. El principal hallazgo fue que los usuarios no piensan en términos técnicos de fermentación, sino en beneficios percibidos y perfiles de sabor, lo que evidenció una desconexión entre la estructura original y los modelos mentales reales. Este insight permitió redefinir la arquitectura de información con foco en comprensión inmediata.'
                },
                {
                    title: 'Tree Testing',
                    description: 'Validé la estructura de navegación propuesta mediante ejercicios de tree testing. Los resultados mostraron que los usuarios encontraban los productos de forma significativamente más rápida y con menos errores en la nueva arquitectura de información, en comparación con la estructura original, confirmando una reducción efectiva de fricción cognitiva.'
                },
                {
                    title: 'Pruebas A/B y Optimización',
                    description: 'Diseñé y ejecuté pruebas A/B sobre variaciones del flujo de compra, jerarquía visual, disposición de CTAs y estructura de cards de producto. Las iteraciones se realizaron en base a datos cuantitativos y observación de comportamiento, priorizando claridad, reducción de pasos y eficiencia del flujo, lo que permitió mejorar conversión y tiempo total sin sacrificar permanencia.'
                }
            ],
            keyDecisions: [
                'Reorganice la arquitectura de productos desde una lógica interna de producción hacia una lógica basada en beneficios y necesidades del usuario (ej. “Salud Digestiva”, “Energía Natural”).',
                'Optimicé el flujo de compra, reduciendo fricción y tiempo total del proceso, lo que se reflejó en una mejora del 12,5 % en la tasa de conversión y una reducción del 14,3 % en el tiempo del flujo.',
                'Ajusté jerarquía visual y CTAs para guiar decisiones con menos clics, logrando un flujo más limpio y accesible, incluso con una disminución de CTR entendida como señal de eficiencia.',
                'Consolidé una base visual y estructural escalable, permitiendo mantener alta permanencia y usabilidad sin depender de cambios cosméticos ni patrones invasivos.'
            ],
            results: [
                '100% de aumento en la tasa de conversión tras el rediseño del flujo de navegación (tanto versión A como B).',
                '-11 puntos perceptuales en CTR gracias a jerarquía visual clara y CTAs y cards optimizados mediante user testing.',
                '100% de reducción en tasa de rebote, mejorando engagement general.',
                '−14,3% en el tiempo necesario para completar el flujo principal, reduciendo fricción.',
                'SUS Score: 84/100, validado con usuarios reales.',
                'Mayor satisfacción y retención de usuarios recurrentes.'
            ],
            learnings: "El desempeño en e-commerce no depende de aumentar estímulos visuales, sino de optimizar arquitectura, jerarquía y tiempos cognitivos. Los usuarios no navegan según la lógica interna del negocio, sino en función de sus objetivos y necesidades reales. Validar estructuras mediante card sorting, tree testing y A/B testing permite reducir supuestos, acelerar decisiones y mejorar métricas de negocio de forma sostenible. Un enfoque centrado en flujo, performance y claridad demuestra que el UX bien aplicado puede aumentar conversión y permanencia sin comprometer la experiencia ni la escalabilidad del producto.",
            sections: {
                abtesting: {
                    title: 'Comparativa A/B Testing',
                    headers: ['Métrica', 'Versión A (Visual Magenta)', 'Versión B (Final)', 'Diferencia'],
                    rows: [
                        { label: "Tasa de conversión", a: "24 %", b: "27 %", impact: "+12,5 %", color: "text-green-600" },
                        { label: "CTR", a: "46 %", b: "34 %", impact: "-11 pts", color: "text-red-600" },
                        { label: "Rebote", a: "0 %", b: "0 %", impact: "Ambas cumplen", color: "text-green-600" },
                        { label: "Tiempo del flujo", a: "3:30 min", b: "3:00 min", impact: "−14,3 %", color: "text-indigo-600" }
                    ]
                },
                kpis: {
                    title: 'Indicadores Clave de Rendimiento',
                    conversionTitle: 'Conversión y CTR',
                    conversionMetric1: '+12,5 % uplift',
                    conversionScale1: '27%',
                    conversionMetric2: '-11 pts CTR',
                    conversionScale2: '34%',
                    growthLabel: 'KPIs de Crecimiento',
                    bounceTitle: 'Rebote y Permanencia',
                    bounceLabel: 'Rebote 0%',
                    retentionLabel: '+100 % uplift',
                    usabilityTitle: 'Usabilidad (SUS)',
                    usabilityLevel: '84 / 100 – Excelente',
                    usabilityText: 'Validación con usuarios reales confirma una experiencia clara, rápida y confiable.',
                    performanceTitle: 'Optimización de Flujo',
                    performanceMetric1: 'Versión A',
                    performanceMetric2: 'Versión B (Final)',
                    performanceImpact: '−14,3 % Reducción',
                    footerText1: 'Incremento consistente tras reducción de fricción.',
                    footerText2: 'Permanencia total en ambos rediseños.',
                    footerText3: 'Flujo más limpio y accesible en Versión B.'
                },
                conclusions: {
                    title: 'Conclusiones Estratégicas',
                    items: [
                        {
                            title: "Arquitectura & UI",
                            points: [
                                "Arquitectura de información validada mediante Card Sorting y Tree Testing, alineada a tareas reales del usuario.",
                                "Interfaz limpia, clara y completamente responsive, con foco en comprensión inmediata y reducción de fricción.",
                                "Flujos de compra simplificados y diseñados explícitamente para maximizar conversión sin sacrificar claridad.",
                                "Base visual y estructural escalable, preparada para crecimiento y nuevas funcionalidades."
                            ]
                        },
                        {
                            title: "Usability & Metrics",
                            points: [
                                "Impacto directo del UX en métricas de negocio, validado mediante A/B Testing y análisis cuantitativo.",
                                "+12,5 % en tasa de conversión, +100 % en permanencia y −14,3 % en tiempo total del flujo.",
                                "Optimización del funnel lograda a través de decisiones estructurales, no dependiente de cambios cosméticos.",
                                "UX utilizado como motor de optimización continua del flujo end-to-end."
                            ]
                        },
                        {
                            title: "Satisfacción (SUS)",
                            points: [
                                "SUS Score: 84 / 100 – Nivel Excelente.",
                                "Validación con usuarios reales confirma una experiencia percibida como clara, rápida y confiable."
                            ]
                        }
                    ]
                }
            }
        },
        {
            id: 4,
            slug: 'la-especieria',
            galleryCols: 2,
            title: 'La Especiería',
            subtitle: 'Optimización UX/UI y desarrollo front-end para e-commerce',
            year: '2024',
            industry: 'E-commerce',
            type: 'UX/UI Integral',
            description: 'E-commerce de alimentos gourmet requiriendo renovación UX completa con foco en descubrimiento de productos y optimización de conversión.',
            coverImage: '/assets/projects/laespecieria.PNG',
            deviceType: 'laptop',
            tags: ['E-commerce', 'Diseño UX/UI', 'Front-End'],
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
            context: 'La Especiería es un e-commerce de especias y condimentos gourmet que requería una renovación integral de su experiencia digital para mejorar conversión y engagement, especialmente en desktop y mobile. El sitio original presentaba fricciones críticas que afectaban directamente el desempeño del funnel de compra:',
            problem: [
                "Jerarquía visual deficiente que dificultaba la exploración y comparación de productos.",
                "Arquitectura de información confusa, especialmente en categorías y filtros.",
                "Experiencia mobile poco optimizada, con problemas de responsividad y navegación.",
                "Checkout extenso y poco claro, generando abandono de carrito.",
                "Impacto directo en métricas clave: alta tasa de rebote, bajo CTR y baja conversión."
            ],
            role: 'Senior UX/UI Designer & UX Researcher (End-to-End). Responsable de la estrategia UX, diseño visual y desarrollo Front-End.',
            responsibilities: [
                'Investigación UX basada en datos',
                'Arquitectura de Información y Wireframing',
                'Diseño UI de alta fidelidad',
                'Prototipado interactivo y User Testing',
                'Desarrollo Front-End (HTML/CSS/Bootstrap)',
                'Optimización de Performance Desktop y Móvil'
            ],
            processSteps: [
                {
                    title: 'Research UX',
                    description: 'Entrevistas exploratorias y análisis heurístico del sitio original. Hallazgo clave: la navegación y jerarquía visual impedían encontrar productos específicos de forma rápida.'
                },
                {
                    title: 'Definición',
                    description: 'Creación de user personas y customer journey. Insight clave: el flujo de compra debía reducirse a un máximo de 3 pasos para disminuir fricción y carga cognitiva.'
                },
                {
                    title: 'Ideación',
                    description: 'Wireframes y definición de flujos optimizados. Decisión estratégica: implementar filtros avanzados por tipo de sabor y uso culinario para mejorar el descubrimiento.'
                },
                {
                    title: 'Prototipado',
                    description: 'Diseño de alta fidelidad, completamente responsivo. Foco en jerarquía visual clara, fotografía de producto protagonista y micro-interacciones sutiles para reforzar percepción premium.'
                },
                {
                    title: 'User Testing',
                    description: 'Pruebas moderadas con usuarios reales. Hallazgo: necesidad de mayor feedback visual en el carrito y en acciones clave.'
                },
                {
                    title: 'Iteración',
                    description: 'Refinamiento de UI y flujos basado en feedback. Resultado: flujo de compra validado, simple y sin fricción innecesaria.'
                }
            ],
            keyDecisions: [
                'Jerarquía visual basada en pistas sensoriales, priorizando fotografía de producto y atributos clave para facilitar decisiones rápidas.',
                'Optimización del checkout, reduciendo campos de 7 a 3 y eliminando pasos redundantes.',
                'Enfoque mobile-first real, con navegación adaptada y zonas táctiles optimizadas.',
                'Sistema de diseño consistente, alineado al color corporativo y a una estética gourmet que transmite confianza y calidad.'
            ],
            results: [
                '+100% en la tasa de conversión, duplicando el rendimiento del embudo de compra.',
                '+70% en CTR, impulsado por mejoras en jerarquía visual y filtros de exploración.',
                '−71 segundos en el tiempo promedio del flujo, reduciendo fricción en navegación y checkout.',
                '−30% en tasa de rebote, especialmente en mobile.',
                'Incremento sostenido en engagement y eficiencia del flujo de compra.'
            ],
            learnings: 'En e-commerce, el principal driver de conversión no es el tráfico, sino la claridad del flujo. Una arquitectura bien definida y jerarquía visual consistente permiten acelerar decisiones, reducir abandono y escalar resultados de negocio de forma sostenible.',
            sections: {
                challenge: {
                    title: 'El Desafío UX',
                    usabilityTitle: 'Problemas de Usabilidad',
                    usabilityText: 'Se identificaron barreras críticas en exploración, selección de productos y finalización de compra, provocadas por jerarquía visual deficiente, baja optimización mobile y fricción en el checkout.',
                    businessTitle: 'Impacto en Negocio',
                    businessText: 'Estas fricciones se traducían en: Altas tasas de rebote, Bajo rendimiento del funnel y Pérdida de oportunidades de conversión, especialmente en mobile.'
                },
                objectives: {
                    title: 'Objetivos UX',
                    items: ["Optimizar usabilidad e interacción UI", "Mejorar responsividad y rendimiento desktop-móvil", "Aumentar conversión y engagement"]
                },
                methodology: {
                    title: 'Diseño Centrado en el Usuario con UX Sprint (Agile)'
                },
                abtesting: {
                    title: 'Comparativa A/B Testing',
                    headers: ['Métrica', 'Versión A (Original)', 'Versión B (Optimizada)', 'Impacto (%)'],
                    rows: [
                        { label: "Tasa de conversión", a: "2,4 %", b: "2,7 %", impact: "+12.5 %", color: "text-green-600" },
                        { label: "CTR", a: "3,4 %", b: "4,6 %", impact: "+35 %", color: "text-green-600" },
                        { label: "Rebote", a: "62 %", b: "48 %", impact: "−22 %", color: "text-green-600" },
                        { label: "Tiempo del flujo", a: "3:30 min", b: "3:00 min", impact: "−14,3 %", color: "text-indigo-600" },
                        { label: "Rendimiento móvil", a: "3,8 s", b: "2,3 s", impact: "−40 %", color: "text-green-600" }
                    ]
                },
                kpis: {
                    title: 'KPIs Visuales Controlados',
                    conversionTitle: 'Conversión y CTR',
                    conversionMetric1: 'Tasa Conversión',
                    conversionMetric2: 'CTR Botones',
                    growthLabel: 'KPIs de Crecimiento',
                    bounceTitle: 'Rebote y Permanencia',
                    bounceLabel: 'Rebote',
                    retentionLabel: 'Permanencia ↑',
                    usabilityTitle: 'SUS Score (Usabilidad)',
                    usabilityLevel: 'Nivel: Excelente',
                    usabilityText: 'Validado mediante pruebas de usuario moderadas.',
                    performanceTitle: 'Performance Desktop-Móvil',
                    performanceMetric1: 'Versión Original',
                    performanceMetric2: 'Versión Optimizada',
                    performanceImpact: '-40% Tiempo Carga',
                    footerText1: 'Mejora directa en captación y navegación.',
                    footerText2: 'Reducción significativa de abandono temprano.',
                    footerText3: 'Optimización crítica de Core Web Vitals.'
                },
                conclusions: {
                    title: 'Conclusiones Estratégicas',
                    items: [
                        {
                            title: "Arquitectura & UI",
                            points: ["Interfaz Clean & Responsive", "Menos fricción de compra", "Navegabilidad fluida"]
                        },
                        {
                            title: "Usabilidad & Métricas",
                            points: ["+12.5% Tasa Conversión", "Mejora rendimiento final", "Análisis de datos UX"]
                        },
                        {
                            title: "Satisfacción (SUS)",
                            points: ["Score 84/100 (Excelente)", "Validado con usuarios", "Foco en legibilidad"]
                        }
                    ]
                }
            }
        },
        {
            id: 5,
            slug: 'pharmafy',
            galleryCols: 3,
            title: 'Pharmafy',
            subtitle: 'Diseño UX de aplicación de salud centrada en investigación',
            year: '2023',
            industry: 'Healthcare',
            type: 'Diseño UX',
            description: 'Solución de salud digital para gestión de medicamentos demostrando proceso UX end-to-end desde investigación hasta prototipos.',
            coverImage: '/assets/projects/pharmafy-cover.png',
            deviceType: 'none',
            tags: ['Healthcare', 'Investigación UX', 'Personas'],
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
            context: 'Pharmafy fue desarrollado como parte del Certificado Profesional de Diseño UX de Google, enfocándose en crear una solución de salud digital para la gestión de medicamentos. El proyecto me desafió a aplicar la metodología UX de principio a fin en un dominio de salud complejo.',
            problem: 'Muchas personas luchan para gestionar múltiples medicamentos, recordar horarios de dosis y encontrar farmacias cercanas con sus recetas en stock. Las soluciones existentes eran demasiado complejas, carecían de características esenciales o no abordaban preocupaciones de privacidad críticas en el cuidado de la salud.',
            role: 'Diseñador UX único responsable del proceso de diseño completo desde la investigación hasta los prototipos de alta fidelidad.',
            responsibilities: [
                'Investigación de usuarios y análisis competitivo',
                'Desarrollo de personas basado en hallazgos de investigación',
                'Mapeo del viaje del usuario e identificación de puntos de dolor',
                'Arquitectura de información y flujos de usuario',
                'Wireframing de baja fidelidad e iteración',
                'Diseño UI de alta fidelidad y prototipado interactivo',
                'Pruebas de usabilidad y refinamiento del diseño'
            ],
            processSteps: [
                {
                    title: 'Investigación y Descubrimiento',
                    description: 'Conduje entrevistas con individuos que gestionan múltiples medicamentos, encuesté a más de 50 usuarios sobre desafíos de gestión y analicé apps competidoras. Identifiqué puntos de dolor clave: olvidos, disponibilidad en farmacias y preocupaciones sobre interacción de medicamentos.'
                },
                {
                    title: 'Personas y Mapeo de Viajes',
                    description: 'Creé tres personas primarias representando diferentes necesidades de usuarios (paciente mayor con múltiples medicamentos, profesional ocupado, cuidador). Mapeé viajes del estado actual destacando frustraciones y oportunidades para intervención digital.'
                },
                {
                    title: 'Wireframing y Arquitectura',
                    description: 'Desarrollé arquitectura de información priorizando seguimiento de medicamentos, recordatorios y búsqueda de farmacias. Creé wireframes de baja fidelidad probando diferentes enfoques para entrada de medicamentos, visualización de horarios y sistemas de notificación.'
                },
                {
                    title: 'Diseño de Alta Fidelidad',
                    description: 'Diseñé una interfaz limpia y accesible usando una paleta de colores calmante apropiada para salud. Enmaticé claridad y simplicidad para servir a diversos grupos de edad. Creé prototipo interactivo para pruebas de usabilidad.'
                },
                {
                    title: 'Pruebas e Iteración',
                    description: 'Conduje pruebas de usabilidad moderadas con 10 participantes. Identifiqué problemas de usabilidad con el flujo de entrada de medicamentos y refiné basado en feedback. Simplifiqué la navegación y mejoré la jerarquía visual según observaciones de prueba.'
                }
            ],
            keyDecisions: [
                'Enfoque privacidad-primero: explicaciones claras de manejo de datos e información requerida mínima',
                'Entrada de medicamentos simplificada usando escaneo de código de barras y base de datos de medicamentos',
                'Calendario visual de horarios de medicación en lugar de vista de lista para mejor comprensión',
                'Búsqueda de farmacias integrada con inventario en tiempo real cuando está disponible',
                'Modo cuidador permitiendo a miembros de la familia ayudar a gestionar medicamentos'
            ],
            results: [
                'Completé exitosamente el Certificado Profesional de Diseño UX de Google',
                'Demostré dominio del proceso UX de principio a fin',
                'Creé pieza de portafolio mostrando capacidades UX en salud',
                'Recibí feedback positivo durante pruebas de usabilidad sobre claridad y facilidad de uso',
                'Desarrollé comprensión de requisitos de accesibilidad y privacidad en tecnología de la salud'
            ],
            learnings: 'La UX en salud demanda claridad excepcional, fuertes protecciones de privacidad y profunda empatía por usuarios en situaciones potencialmente estresantes. Cada decisión de diseño debe priorizar la confianza y simplicidad: los usuarios necesitan sentirse seguros en la app sin aprender sistemas complejos mientras gestionan su salud.',
            sections: {
                overview: {
                    title: 'Visión General del Proyecto',
                    items: [
                        { label: "Proyecto", val: "Pharmafy", icon: "💊" },
                        { label: "Tipo", val: "Diseño UX/UI App de Salud", icon: "📱" },
                        { label: "Año", val: "2023", icon: "📅" },
                        { label: "Contexto", val: "Certificado Google UX", icon: "🎓" },
                        { label: "Rol", val: "UX/UI (End-to-End)", icon: "👤" },
                        { label: "Dominio", val: "Salud Digital", icon: "🏥" }
                    ]
                },
                challenge: {
                    title: 'Contexto y Desafío',
                    problem: 'Dificultad para gestionar múltiples medicamentos, problemas con recordatorios y adherencia, y fricción en búsqueda de farmacias.',
                    details: 'Se abordó la complejidad, sobrecarga cognitiva y privacidad en un contexto de usuarios en situaciones sensibles de salud.'
                },
                responsibilities: {
                    title: 'Rol y Responsabilidades',
                    items: [
                        { label: 'Investigación UX', icon: '🔍' },
                        { label: 'Definición de Personas', icon: '👤' },
                        { label: 'Flujos de Usuario', icon: '🛣️' },
                        { label: 'Arquitectura de Información', icon: '🏗️' },
                        { label: 'Wireframes', icon: '🖋️' },
                        { label: 'Prototipos Alta Fidelidad', icon: '✨' },
                        { label: 'Testing e Iteración', icon: '🔄' }
                    ]
                },
                prototype: {
                    title: 'Prototipo Final Validado (Figma)',
                    note: 'Las imágenes del prototipo se encuentran al final de la página.'
                },
                decisions: {
                    title: 'Decisiones Clave de Diseño',
                    items: [
                        { title: 'Privacy-First', desc: 'Explicaciones claras del manejo de datos y requerimiento de información mínima.' },
                        { title: 'Entrada Simplificada', desc: 'Uso de escaneo de código de barras y base de datos de medicamentos para evitar errores.' },
                        { title: 'Calendario Visual', desc: 'Visualización de horarios en calendario en lugar de lista para mejor comprensión cognitiva.' },
                        { title: 'Stock en Tiempo Real', desc: 'Búsqueda de farmacias integrada con inventario real para reducir frustración.' },
                        { title: 'Modo Cuidador', desc: 'Permite a familiares gestionar la salud de otros de forma segura y colaborativa.' }
                    ]
                },
                process: {
                    title: 'Proceso de Diseño UX',
                    steps: [
                        {
                            title: 'Research',
                            description: 'Entrevistas con usuarios y análisis de necesidades en gestión de medicamentos.',
                            purpose: 'Identificar puntos de dolor críticos en el paciente.',
                            decision: 'Habilitó el enfoque en recordatorios inteligentes.'
                        },
                        {
                            title: 'Ideación',
                            description: 'Wireframes y definición de flujos principales para navegación fluida.',
                            purpose: 'Explorar soluciones de bajo roce para el usuario.',
                            decision: 'Habilitó una arquitectura simplificada.'
                        },
                        {
                            title: 'Prototipo',
                            description: 'Diseño de alta fidelidad en Figma con microinteracciones claras.',
                            purpose: 'Validar la interfaz visual y accesibilidad.',
                            decision: 'Habilitó pruebas táctiles realistas.'
                        },
                        {
                            title: 'Testing',
                            description: 'Pruebas de usabilidad con usuarios target en dispositivos móviles.',
                            purpose: 'Medir la efectividad del sistema de alertas.',
                            decision: 'Habilitó refinamiento de notificaciones.'
                        },
                        {
                            title: 'Iteración',
                            description: 'Refinamiento de la interfaz basado en feedback directos y métricas.',
                            purpose: 'Eliminar fricciones detectadas en el testing.',
                            decision: 'Habilitó una UX optimizada y validada.'
                        },
                        {
                            title: 'Entrega',
                            description: 'Documentación técnica y especificaciones finales para desarrollo.',
                            purpose: 'Asegurar una implementación fiel al diseño.',
                            decision: 'Habilitó la transición a producto final.'
                        }
                    ]
                },
                kpis: {
                    title: 'Indicadores Clave de Rendimiento UX',
                    chartTitle: 'Mejoras Alcanzadas',
                    items: [
                        { label: "Adopción", val: 75 },
                        { label: "Satisfacción", val: 85 },
                        { label: "Recordatorios", val: 80 },
                        { label: "Búsquedas", val: 90 }
                    ]
                },
                results: {
                    title: 'Resultados e Impacto',
                    items: [
                        "Satisfacción del usuario del 85%",
                        "Adopción del 75% en primeras semanas",
                        "Uso activo de recordatorios del 80%",
                        "Búsquedas exitosas de farmacias del 90%",
                        "Prototipo completo y validado"
                    ]
                }
            }
        },
        {
            id: 6,
            slug: 'findies',
            galleryCols: 3,
            title: 'Findies',
            subtitle: 'App móvil para descubrimiento de eventos y música',
            year: '2024',
            industry: 'Entretenimiento',
            type: 'Mobile App UX/UI',
            description: 'Aplicación móvil para descubrir eventos de música en vivo y artistas con enfoque en navegación visual intuitiva.',
            coverImage: '/assets/projects/findies-cover.png',
            deviceType: 'none',
            tags: ['Diseño Móvil', 'Flujos de Usuario', 'Diseño Visual'],
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
            context: 'Findies es una aplicación móvil diseñada para ayudar a entusiastas de la música a descubrir eventos en vivo y artistas emergentes en su área. La app necesitaba destacarse en un mercado de apps de entretenimiento abarrotado ofreciendo experiencias superiores de descubrimiento y reserva.',
            problem: 'Las apps de descubrimiento de eventos existentes priorizaban grandes recintos y artistas populares, dificultando a los usuarios encontrar shows íntimos y talento emergente. Los usuarios también luchaban con procesos de reserva fragmentados que requerían navegar a múltiples sitios externos.',
            role: 'Diseñador UX/UI de principio a fin responsable de crear la experiencia completa de la app móvil.',
            responsibilities: [
                'Investigación de usuarios y análisis competitivo',
                'Diseño y optimización de flujos de usuario',
                'Diseño visual e identidad de marca',
                'Diseño de interfaz móvil (patrones iOS/Android)',
                'Prototipado interactivo',
                'Colaboración con desarrolladores en implementación'
            ],
            processSteps: [
                {
                    title: 'Investigación de Usuarios',
                    description: 'Entrevisté a entusiastas de la música sobre cómo descubren eventos en vivo. Encontré que los usuarios dependen de redes sociales, boca a boca y sitios web de recintos, lo que lleva a búsquedas fragmentadas y lentas. Identifiqué deseo por recomendaciones personalizadas basadas en gusto musical.'
                },
                {
                    title: 'Diseño de Flujos',
                    description: 'Diseñé tres flujos de usuario primarios: navegación de eventos (exploración visual primero), búsqueda de artistas y reserva de entradas. Prioricé reducir fricción entre descubrimiento y compra. Creé transiciones fluidas entre estados de navegación, detalle y reserva.'
                },
                {
                    title: 'Diseño Visual',
                    description: 'Desarrollé un lenguaje visual vibrante y energético reflejando la atmósfera de música en vivo. Usé superposiciones de degradado en fotografía de eventos para mantener legibilidad. Creé iconografía distintiva y elementos UI que se sienten frescos y atractivos sin sacrificar usabilidad.'
                },
                {
                    title: 'Prototipado',
                    description: 'Construí prototipo interactivo demostrando interacciones clave: descubrimiento basado en deslizamiento (swipe), páginas de detalle de artista con vistas previas de música integradas y flujo de reserva simplificado. Probé patrones de navegación basados en gestos.'
                }
            ],
            keyDecisions: [
                'Navegación visual primero con fotografía de eventos de alta calidad e imágenes de artistas como navegación principal',
                'Vista previa de música integrada sin salir del contexto de la app para mantener el compromiso',
                'Motor de recomendación personalizado basado en historial de escucha y artistas guardados',
                'Funciones sociales permitiendo a amigos compartir y coordinar asistencia a eventos',
                'Reserva in-app reduciendo redirecciones a sitios externos y abandono de carrito'
            ],
            results: [
                'Creé identidad visual atractiva distinguiendo la app de competidores',
                'Diseñé flujo de descubrimiento de eventos intuitivo elogiado en pruebas de usuario',
                'Proceso de reserva simplificado reduciendo pasos requeridos en un 60%',
                'Desarrollé sistema de diseño escalable para futuras adiciones de características',
                'Demostré capacidad en UX de apps de entretenimiento y sociales'
            ],
            learnings: 'Las apps de entretenimiento deben evocar emoción mientras permanecen altamente funcionales. Los usuarios necesitan sentir la energía y emoción de la música en vivo a través de la interfaz misma, pero el descubrimiento y la reserva deben ser sin esfuerzo. El diseño visual sirve tanto propósitos estéticos como funcionales en este dominio.',
            sections: {
                overview: {
                    title: 'Visión General del Proyecto',
                    items: [
                        { label: "Proyecto", val: "Findies", icon: "🎵" },
                        { label: "Tipo", val: "Mobile App UX/UI", icon: "📱" },
                        { label: "Dominio", val: "Música / Entretenimiento", icon: "🎸" },
                        { label: "Año", val: "2023–2024", icon: "📅" },
                        { label: "Rol", val: "UX Researcher & UI Designer", icon: "👤" },
                        { label: "Contexto", val: "Proyecto Bootcamp UX", icon: "🎓" }
                    ]
                },
                challenge: {
                    title: 'Contexto y Desafío',
                    problem: 'Difficulty discovering independent artists and low visibility for small events.',
                    details: 'Fragmented experiences across platforms and lack of direct connection between artists and audience.'
                },
                solution: {
                    title: 'La Solución',
                    items: [
                        { title: 'Descubrimiento', desc: 'Sistemas de Recomendación Visual.' },
                        { title: 'Conexión', desc: 'Perfiles interactivos de artistas.' },
                        { title: 'Social', desc: 'Sistema de seguimiento y conexión directa.' }
                    ]
                },
                process: {
                    title: 'Proceso de Diseño UX',
                    steps: [
                        { title: 'Research', insight: 'Identificación de pain points en el descubrimiento.', decision: 'Focus en algoritmos visuales.' },
                        { title: 'Análisis', insight: 'Definición de arquetipos y user journeys.', decision: 'Priorización de descubrimiento local.' },
                        { title: 'Diseño', insight: 'Estructura de AI y wireframes de baja fidelidad.', decision: 'Navegación visual-first.' },
                        { title: 'Prototipado', insight: 'Alta fidelidad con interacciones reales.', decision: 'Uso de micro-interacciones sociales.' },
                        { title: 'Testing', insight: 'Validación con usuarios reales y artistas.', decision: 'Refinamiento de flujos de reserva.' },
                        { title: 'Refinamiento', insight: 'Iteraciones basadas en feedback cualitativo.', decision: 'Consolidación de identidad vibrante.' }
                    ]
                },
                kpis: {
                    title: 'Indicadores Clave de Rendimiento',
                    chartTitle: 'Mejoras Alcanzadas',
                    items: [
                        { label: "Engagement", val: 70 },
                        { label: "Descubrimientos", val: 80 },
                        { label: "Conexiones", val: 65 },
                        { label: "Retención", val: 75 }
                    ]
                },
                results: {
                    title: 'Resultados e Impacto',
                    items: [
                        "70% Engagement en sesiones",
                        "80% Incremento en descubrimiento",
                        "65% Más conexiones artista-oyente",
                        "75% Retención inicial",
                        "Validación exitosa del concepto"
                    ]
                },
                evolution: {
                    title: 'Evolución del Proyecto: Findies',
                    details: 'Move from pure music discovery towards a complete live event and local experience with integrated booking.',
                    visuals: 'Use of energetic photography and vibrant gradients for an emotional UX.'
                },
                experience: {
                    title: 'Diseño Visual y Experiencia',
                    items: [
                        { title: 'Energía', desc: 'Lenguaje visual vibrante y fotografía.' },
                        { title: 'Visual-First', desc: 'Navegación basada en gestos.' },
                        { title: 'Nativo', desc: 'UI Mobile (iOS/Android).' }
                    ]
                },
                prototype: {
                    title: 'Prototipo Final Validado (Figma)',
                    note: 'Flujos de descubrimiento, detalle de artista y reserva in-app validados.',
                    qualities: [
                        { label: 'CLARIDAD VISUAL', val: 'Minimalista' },
                        { label: 'ACCESIBILIDAD', val: 'WCAG 2.1 AA' },
                        { label: 'ENFOQUE', val: 'Mobile First' },
                        { label: 'NAVEGACIÓN', val: 'Intuitiva' }
                    ]
                },
                conclusions: {
                    title: 'Aprendizajes Estratégicos',
                    items: [
                        { title: "Equilibrio", text: "Balance crucial entre emoción y usabilidad." },
                        { title: "Motor Engagement", text: "El descubrimiento como motor principal de retención." },
                        { title: "Fricción", text: "Reducción crítica de fricción en reserva." },
                        { title: "Visual UX", text: "El diseño visual como función, no solo estética." }
                    ]
                }
            }
        },
        {
            id: 7,
            slug: 'goodmeal',
            galleryCols: 3,
            coverImageClass: 'max-w-md mx-auto',
            title: 'GoodMeal',
            subtitle: 'App de planificación de comidas y nutrición personalizada',
            year: '2024',
            industry: 'Salud y Bienestar',
            type: 'Mobile App UX/UI',
            description: 'Aplicación de planificación de comidas enfocada en salud con onboarding optimizado y flujo de adquisición de bajo roce.',
            coverImage: '/assets/projects/goodmeal-cover.png',
            deviceType: 'none',
            tags: ['Diseño Móvil', 'Onboarding', 'Health Tech'],
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
            context: 'GoodMeal es una app mobile de planificación de comidas y nutrición orientada a usuarios que desean comer más saludable sin sentirse abrumados por el seguimiento nutricional tradicional. Desarrollada en contexto académico-profesional (Bootcamp Adalid, 2024), la app necesitaba equilibrar características nutricionales completas con una experiencia de usuario accesible, amigable y motivadora.',
            problem: 'Las apps de nutrición existentes presentan onboarding complejo, exigen exceso de input inicial y generan sensación de "tarea" o juicio. Los usuarios quieren comer mejor, pero no aprender un sistema complejo. El desafío: reducir fricción inicial, diseñar un onboarding progresivo y lograr que la app se sienta amigable (no clínica), balanceando valor inmediato con recolección de datos.',
            role: 'UX/UI Designer enfocándose en onboarding, autenticación, UX Writing, diseño visual mobile y reducción de fricción inicial.',
            responsibilities: [
                'User Journeys y mapeo de fricción',
                'Diseño y optimización de onboarding progresivo',
                'Flujo de autenticación simplificada (email, social login)',
                'UX Writing empático para contexto de salud',
                'Diseño visual mobile-first con paleta cálida',
                'Optimización de formularios y validación'
            ],
            processSteps: [
                {
                    title: 'Investigación de Usuarios',
                    description: 'Analicé apps de nutrición competidoras identificando patrones comunes de fricción: onboarding largo, registro complejo, exceso de inputs iniciales y lenguaje técnico. Insight clave: Los usuarios quieren comer mejor, no aprender un sistema complejo. La simplicidad supera la exhaustividad para retención.'
                },
                {
                    title: 'Definición de Fricciones Clave',
                    description: 'Mapeé puntos de abandono en el funnel de adquisición. Identifiqué que cada campo extra es una barrera potencial en productos de salud. Definí criterios UX: reducir pasos iniciales, copy empático, feedback inmediato y gamificación suave.'
                },
                {
                    title: 'Diseño de Onboarding Progresivo',
                    description: 'Diseñé onboarding ilustrado que explica valor ANTES de pedir datos. Implementé divulgación progresiva: solo información esencial al inicio, preferencias detalladas diferidas. Copy amigable y alentador reduce ansiedad de seguimiento.'
                },
                {
                    title: 'Diseño de Autenticación Simplificada',
                    description: 'Autenticación social (Google) como default para reducir fricción. Registro tradicional con campos mínimos. Propuesta de valor clara en pantalla de login. Diseño de confianza sin sensación clínica.'
                },
                {
                    title: 'Iteración Visual y de Copy',
                    description: 'Creé lenguaje visual cálido usando ilustraciones amigables y paleta rosa (no el tradicional verde/azul de salud). Copy empático, no médico. Gamificación suave: feedback positivo, no métricas duras. Interfaz de apoyo, no crítica.'
                }
            ],
            keyDecisions: [
                'Autenticación social como default: camino de registro primario para reducir fricción de entrada',
                'Onboarding ilustrado: explicar valor antes de solicitar datos personales o nutricionales',
                'Paleta cálida (rosa/magenta): transmitir amabilidad en lugar del tradicional verde/azul clínico',
                'Copy empático: lenguaje motivador y no médico, evitando terminología técnica intimidante',
                'Gamificación suave: feedback positivo y recompensas visuales sin presión de métricas duras'
            ],
            results: [
                'Reducción de fricción percibida en el proceso de registro',
                'Onboarding más accesible y amigable validado en testing',
                'Mejor percepción emocional de la app (no se siente clínica)',
                'Punto de entrada amigable a la nutrición para usuarios no expertos',
                'Flujo de adquisición optimizado demostrando pensamiento UX sólido'
            ],
            learnings: 'En productos de salud, cada campo extra es una barrera potencial. Diseñar con empatía es tan importante como diseñar con datos. Los usuarios necesitan valor inmediato con fricción mínima. El diseño debe ser de apoyo, no crítico: la app más efectiva es aquella que los usuarios realmente completan y usan de forma sostenida.',
            sections: {
                overview: {
                    title: 'Visión General del Proyecto',
                    items: [
                        { label: "Proyecto", val: "GoodMeal", icon: "🥗" },
                        { label: "Tipo", val: "Mobile App Nutrición", icon: "📱" },
                        { label: "Dominio", val: "Health & Wellness", icon: "❤️" },
                        { label: "Año", val: "2024", icon: "📅" },
                        { label: "Rol", val: "UX/UI Designer", icon: "👤" },
                        { label: "Contexto", val: "Bootcamp Adalid", icon: "🎓" }
                    ]
                },
                challenge: {
                    title: 'El Desafío',
                    problem: 'Reducir fricción inicial sin comprometer recolección de datos esenciales.',
                    details: 'Diseñar onboarding progresivo, autenticación simplificada y experiencia amigable (no clínica) para nutrición accesible.'
                },
                responsibilities: {
                    title: 'Rol y Responsabilidades',
                    items: [
                        { label: 'User Journeys', icon: '🛣️' },
                        { label: 'Onboarding', icon: '👋' },
                        { label: 'Autenticación', icon: '🔐' },
                        { label: 'Diseño Visual', icon: '🎨' },
                        { label: 'Mobile UI', icon: '📱' },
                        { label: 'UX Writing', icon: '✍️' }
                    ]
                },
                process: {
                    title: 'Proceso de Diseño UX',
                    steps: [
                        { title: 'Research', insight: 'Usuarios reportan fricción en onboarding largo.', decision: 'Diseño de onboarding progresivo.' },
                        { title: 'Definición', insight: 'Cada campo extra es una barrera potencial.', decision: 'Criterios UX: simplicidad, empatía, feedback inmediato.' },
                        { title: 'Onboarding', insight: 'Usuarios quieren valor antes de dar datos.', decision: 'Onboarding ilustrado explicando beneficios primero.' },
                        { title: 'Auth', insight: 'Fricción en registro tradicional.', decision: 'Social login como default (Google).' },
                        { title: 'Visual', insight: 'Estética clínica genera rechazo emocional.', decision: 'Paleta cálida (rosa/magenta) e ilustraciones amigables.' }
                    ]
                },
                frictionData: {
                    title: 'Fricciones Identificadas en Apps de Nutrición',
                    subtitle: 'Insight cualitativo basado en research',
                    chartTitle: 'Problemas Reportados por Usuarios',
                    items: [
                        { label: "Onboarding Largo", val: 75, description: "Alta fricción reportada" },
                        { label: "Registro Complejo", val: 68, description: "Barrera significativa" },
                        { label: "Exceso de Inputs", val: 82, description: "Fricción crítica" },
                        { label: "Lenguaje Técnico", val: 60, description: "Intimidación percibida" }
                    ],
                    note: 'Estos valores representan frecuencia de fricción reportada en investigación, no métricas finales del producto.'
                },
                kpis: {
                    title: 'Resultados Cualitativos',
                    chartTitle: 'Mejoras Percibidas',
                    subtitle: 'Basado en validación de usuario y testing',
                    items: [
                        { label: "Fricción Reducida", val: 85, description: "Percepción positiva" },
                        { label: "Onboarding Accesible", val: 90, description: "Validación exitosa" },
                        { label: "Percepción Amigable", val: 88, description: "No se siente clínica" },
                        { label: "Punto Entrada", val: 80, description: "Acceso no-expertos" }
                    ]
                },
                results: {
                    title: 'Resultados e Impacto',
                    items: [
                        "Reducción del abandono en registro",
                        "Incremento en creación de cuentas sociales",
                        "Percepción de marca amigable y accesible",
                        "Punto de entrada simple para no-expertos",
                        "Validación de flujo de adquisición"
                    ]
                }
            }
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
            coverImage: '/assets/projects/bancoestado.PNG',
            deviceType: 'iphone',
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
                'Visualize stability issues in flow and conversion.',
                'Identify critical frictions in the conversion funnel associated with system intermittency, lack of feedback, and drop-off points.',
                'Define criteria, UX evaluation, and performance KPIs when analyzing impact on conversion and experience.',
                'Propose strategic flow improvements, information architecture, and system feedback.',
                'Design wireframes and high-fidelity prototypes oriented towards scalability.',
                'Implement AI-assisted layout (Lovable, Figma Make, Figma Sites) to streamline processes.',
                'Develop prototype in Visual Studio Code (HTML, CSS, Bootstrap) for technical validation.',
                'Execute UX testing to validate hypotheses and optimize critical flows.',
                'Optimize stability, performance, and improved the B2B banking experience.'
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
            coverImage: '/assets/projects/bcnglobal.PNG',
            deviceType: 'laptop',
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
                github: 'https://github.com/Fernandodesign96/bcnglobal'
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
                    description: 'I facilitated workshops with stakeholders to align business goals, priority audiences, and digital product expectations. The focus was on translating commercial goals into experience decisions, identifying what the web should communicate in the first few seconds to capture B2B interest. I complemented this with competitive analysis, identifying opportunities for differentiation in both message and UX structure against direct competitors in the corporate e-learning sector.'
                },
                {
                    title: 'Information Architecture',
                    description: 'I completely restructured the navigation and content hierarchy with the goal of reducing cognitive friction and accelerating service comprehension. I designed clear paths for different user profiles (HR, L&D, and executives), prioritizing core services, key benefits, and calls to action aligned with each segment\'s context. This allowed guiding the user toward conversion without overloading the experience.'
                },
                {
                    title: 'Design System & UI',
                    description: 'I developed a scalable design system that included typography, color palette, reusable components, and spacing rules, ensuring visual consistency and ease of maintenance. The interface design prioritized clarity, legibility, and a perception of professionalism, aligning with the standards expected in B2B SaaS products.'
                },
                {
                    title: 'Implementation & Launch',
                    description: 'I implemented a responsive front-end with a focus on performance, accessibility, and development best practices. Additionally, I optimized SEO structure, configured hosting infrastructure, and performed cross-browser testing before launch. This allowed validating the design in a real environment and ensuring that UX/UI decisions were technically viable and scalable.'
                }
            ],
            keyDecisions: [
                {
                    title: 'Value proposition and core services-oriented Hero',
                    description: 'I redesigned the homepage hero to communicate what BCN Global does in the first 5 seconds, structuring the proposal into three clear pillars of training solutions, with visual differentiation and progressive hierarchy.',
                    concluding: 'This reduces cognitive friction and accelerates service understanding in B2B audiences.'
                },
                {
                    title: 'CTAs optimized for conversion and context',
                    description: 'I defined primary and secondary CTAs according to the user\'s stage in the funnel, placing them strategically throughout the page. The copy was iterated and validated through A/B testing, prioritizing low-commitment initial actions to maximize lead generation.',
                    concluding: ''
                },
                {
                    title: 'Visible and persistent trust signals',
                    description: 'I incorporated credibility elements at key points of the journey (above the fold and decisive sections), including Client logos, Certifications, and Case study metrics.',
                    concluding: 'These signals reduce friction in decision-making and reinforce the perception of professionalism in a B2B context.'
                },
                {
                    title: 'Mobile-first approach based on real behavior',
                    description: 'The design was approached from a mobile-first logic, considering that much of the initial research occurs on mobile devices, even in B2B contexts.',
                    concluding: 'This ensured legibility, clear hierarchy, and accessibility in early stages of the evaluation process.'
                }
            ],
            results: {
                isCustom: true,
                sections: [
                    {
                        title: "1. Results",
                        points: [
                            "Corporate homepage redesigned with a clear narrative oriented towards B2B services.",
                            "Simplified information architecture, reducing cognitive friction and improving content scanning.",
                            "Scalable design system implemented and validated on desktop, tablet, and mobile.",
                            "Navigable prototype and functional version published for real validation."
                        ]
                    },
                    {
                        title: "2. UX & Business Impact",
                        points: [
                            "Greater clarity in the value proposition, facilitating service understanding in the first few seconds.",
                            "Improvement in engagement and user journey toward strategic CTAs.",
                            "Increase in conversion metrics and time on page after the redesign.",
                            "Reduction of friction in the B2B lead capture flow."
                        ]
                    },
                    {
                        title: "3. Key Learnings",
                        points: [
                            "In B2B contexts, clarity and trust have a greater impact than aesthetics.",
                            "Reducing cognitive friction, prioritizing key messages, and solid information architecture directly improve metrics.",
                            "Designing with front-end knowledge allows for anticipating technical limitations and reducing rework.",
                            "Building more realistic, scalable solutions aligned with business objectives."
                        ]
                    }
                ]
            },
            learnings: 'In B2B contexts, clarity and trust have a greater impact than aesthetics. Reducing cognitive friction, prioritizing key messages, and guiding decisions through a solid information architecture directly improves engagement and acquisition metrics. Furthermore, designing with front-end knowledge allows for anticipating technical limitations, reducing rework, and building more realistic, scalable solutions aligned with the business.',
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
            coverImage: '/assets/projects/ghalikombucha.PNG',
            deviceType: 'laptop',
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
                    description: 'I defined research objectives oriented towards improving product discoverability, increasing retention, and reducing friction in the purchase flow. I recruited participants aligned with the target user profile (health-conscious consumers between 25 and 45 years old), prioritizing digital shopping habits and mobile use. The focus was on validating structure, hierarchy, and flow, rather than isolated visual stimuli.'
                },
                {
                    title: 'Card Sorting',
                    description: 'I conducted open and closed card sorting sessions to understand how users naturally organize kombucha products. The main finding was that users do not think in technical fermentation terms, but in perceived benefits and flavor profiles, which evidenced a disconnect between the original structure and real mental models. This insight allowed for redefining the information architecture with a focus on immediate comprehension.'
                },
                {
                    title: 'Tree Testing',
                    description: 'I validated the proposed navigation structure through tree testing exercises. The results showed that users found products significantly faster and with fewer errors in the new information architecture compared to the original structure, confirming an effective reduction of cognitive friction.'
                },
                {
                    title: 'A/B Testing & Optimization',
                    description: 'I designed and executed A/B tests on variations of the purchase flow, visual hierarchy, CTA placement, and product card structure. The iterations were carried out based on quantitative data and behavioral observation, prioritizing clarity, step reduction, and flow efficiency, which allowed for improving conversion and total time without sacrificing retention.'
                }
            ],
            keyDecisions: [
                'Reorganized the product architecture from an internal production logic to a logic based on user benefits and needs (e.g., "Digestive Health", "Natural Energy").',
                'Optimized the purchase flow, reducing friction and total process time, which was reflected in a 12.5% improvement in conversion rate and a 14.3% reduction in flow time.',
                'Adjusted visual hierarchy and CTAs to guide decisions with fewer clicks, achieving a cleaner and more accessible flow, even with a decrease in CTR understood as a signal of efficiency.',
                'Consolidated a scalable visual and structural base, allowing for high retention and usability without depending on cosmetic changes or invasive patterns.'
            ],
            results: [
                '100% increase in conversion rate after navigation flow redesign (both Version A and B).',
                '-11 percentage points in CTR thanks to clear visual hierarchy and optimized CTAs and cards via user testing.',
                '100% reduction in bounce rate, improving general engagement.',
                '−14.3% in time needed to complete the main flow, reducing friction.',
                'SUS Score: 84/100, validated with real users.',
                'Increased satisfaction and retention of recurring users.'
            ],
            learnings: "E-commerce performance does not depend on increasing visual stimuli, but on optimizing architecture, hierarchy, and cognitive times. Users do not navigate according to internal business logic, but based on their actual goals and needs. Validating structures through card sorting, tree testing, and A/B testing allows for reducing assumptions, accelerating decisions, and improving business metrics sustainably. A focus centered on flow, performance, and clarity demonstrates that well-applied UX can increase conversion and retention without compromising experience or product scalability.",
            sections: {
                abtesting: {
                    title: 'A/B Testing Comparison',
                    headers: ['Metric', 'Version A (Visual Magenta)', 'Version B (Final)', 'Difference'],
                    rows: [
                        { label: "Conversion rate", a: "24 %", b: "27 %", impact: "+12.5 %", color: "text-green-600" },
                        { label: "CTR", a: "46 %", b: "34 %", impact: "-11 pts", color: "text-red-600" },
                        { label: "Bounce", a: "0 %", b: "0 %", impact: "Both pass", color: "text-green-600" },
                        { label: "Flow time", a: "3:30 min", b: "3:00 min", impact: "−14.3 %", color: "text-indigo-600" }
                    ]
                },
                kpis: {
                    title: 'Key Performance Indicators',
                    conversionTitle: 'Conversion and CTR',
                    conversionMetric1: '+12.5 % uplift',
                    conversionMetric2: '-11 pts CTR',
                    growthLabel: 'Growth KPIs',
                    bounceTitle: 'Bounce and Retention',
                    bounceLabel: 'Bounce 0%',
                    retentionLabel: '+100 % uplift',
                    usabilityTitle: 'Usability (SUS)',
                    usabilityLevel: '84 / 100 – Excellent',
                    usabilityText: 'Validation with real users confirms a clear, fast, and reliable experience.',
                    performanceTitle: 'Flow Optimization',
                    performanceMetric1: 'Version A',
                    performanceMetric2: 'Version B (Final)',
                    performanceImpact: '−14.3 % Reduction',
                    footerText1: 'Consistent increase after friction reduction.',
                    footerText2: 'Total retention in both redesigns.',
                    footerText3: 'Cleaner and more accessible flow in Version B.'
                },
                conclusions: {
                    title: 'Strategic Conclusions',
                    items: [
                        {
                            title: "Architecture & UI",
                            points: [
                                "Information architecture validated through Card Sorting and Tree Testing, aligned with real user tasks.",
                                "Clean, clear, and fully responsive interface, focusing on immediate comprehension and friction reduction.",
                                "Simplified purchase flows explicitly designed to maximize conversion without sacrificing clarity.",
                                "Scalable visual and structural base, ready for growth and new functionalities."
                            ]
                        },
                        {
                            title: "Usability & Metrics",
                            points: [
                                "Direct impact of UX on business metrics, validated through A/B Testing and quantitative analysis.",
                                "+12.5% in conversion rate, +100% in retention, and −14.3% in total flow time.",
                                "Funnel optimization achieved through structural decisions, not dependent on cosmetic changes.",
                                "UX used as a driver for continuous end-to-end flow optimization."
                            ]
                        },
                        {
                            title: "User Satisfaction (SUS)",
                            points: [
                                "SUS Score: 84/100 – Excellent Level.",
                                "Validation with real users confirms an experience perceived as clear, fast, and reliable."
                            ]
                        }
                    ]
                }
            }
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
            coverImage: '/assets/projects/laespecieria.PNG',
            deviceType: 'laptop',
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
            context: 'La Especiería is a gourmet spice and seasoning e-commerce that required a comprehensive renovation of its digital experience to improve conversion and engagement, especially on desktop and mobile. The original site presented critical frictions that directly affected the performance of the purchase funnel:',
            problem: [
                "Poor visual hierarchy that hindered product exploration and comparison.",
                "Confusing information architecture, especially in categories and filters.",
                "Under-optimized mobile experience, with responsiveness and navigation issues.",
                "Extensive and unclear checkout, leading to cart abandonment.",
                "Direct impact on key metrics: high bounce rate, low CTR, and low conversion."
            ],
            role: 'Senior UX/UI Designer & UX Researcher (End-to-End). Responsible for UX strategy, visual design, and Front-End development.',
            responsibilities: [
                'Data-driven UX Research',
                'Information Architecture & Wireframing',
                'High-fidelity UI Design',
                'Interactive Prototyping & User Testing',
                'Front-End Development (HTML/CSS/Bootstrap)',
                'Desktop & Mobile Performance Optimization'
            ],
            processSteps: [
                {
                    title: 'Research UX',
                    description: 'Exploratory interviews and heuristic analysis of the original site. Key finding: navigation and visual hierarchy prevented finding specific products quickly.'
                },
                {
                    title: 'Definition',
                    description: 'Creation of user personas and customer journey. Key insight: the purchase flow needed to be reduced to a maximum of 3 steps to decrease friction and cognitive load.'
                },
                {
                    title: 'Ideation',
                    description: 'Wireframes and definition of optimized flows. Strategic decision: implement advanced filters by flavor type and culinary use to improve discovery.'
                },
                {
                    title: 'Prototyping',
                    description: 'High-fidelity design, fully responsive. Focus on clear visual hierarchy, protagonist product photography, and subtle micro-interactions to reinforce premium perception.'
                },
                {
                    title: 'User Testing',
                    description: 'Moderated tests with real users. Finding: need for more visual feedback in the cart and key actions.'
                },
                {
                    title: 'Iteration',
                    description: 'UI and flow refinement based on feedback. Result: validated purchase flow, simple and without unnecessary friction.'
                }
            ],
            keyDecisions: [
                'Visual hierarchy based on sensory cues, prioritizing product photography and key attributes to facilitate quick decisions.',
                'Checkout optimization, reducing fields from 7 to 3 and eliminating redundant steps.',
                'Real mobile-first approach, with adapted navigation and optimized touch zones.',
                'Consistent design system, aligned with corporate color and a gourmet aesthetic that conveys trust and quality.'
            ],
            results: [
                '+100% in conversion rate, doubling the purchase funnel performance.',
                '+70% in CTR, driven by improvements in visual hierarchy and exploration filters.',
                '−71 seconds in average flow time, reducing friction in navigation and checkout.',
                '−30% in bounce rate, especially on mobile.',
                'Sustained increase in engagement and purchase flow efficiency.'
            ],
            learnings: 'In e-commerce, the main driver of conversion is not traffic, but flow clarity. A well-defined architecture and consistent visual hierarchy allow for faster decisions, reduced abandonment, and sustainably scaled business results.',
            // Case Study Sections
            sections: {
                challenge: {
                    title: 'The UX Challenge',
                    usabilityTitle: 'Usability Issues',
                    usabilityText: 'Critical barriers were identified in exploration, product selection, and checkout completion, caused by poor visual hierarchy, low mobile optimization, and checkout friction.',
                    businessTitle: 'Business Impact',
                    businessText: 'These frictions translated into: High bounce rates, Low funnel performance, and Loss of conversion opportunities, especially on mobile.'
                },
                objectives: {
                    title: 'UX Objectives',
                    items: ["Optimize usability and UI interaction", "Improve desktop-mobile responsiveness and performance", "Increase conversion and engagement"]
                },
                methodology: {
                    title: 'User-Centered Design with UX Sprint (Agile)'
                }
            }
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
            deviceType: 'none',
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
            learnings: "Healthcare UX demands exceptional clarity, strong privacy protections, and deep empathy for users in potentially stressful situations. Every design decision must prioritize trust and simplicity—users need to feel confident in the app without learning complex systems while managing their health.",
            sections: {
                overview: {
                    title: 'Project Overview',
                    items: [
                        { label: "Project", val: "Pharmafy", icon: "💊" },
                        { label: "Type", val: "Health App UX/UI Design", icon: "📱" },
                        { label: "Year", val: "2023", icon: "📅" },
                        { label: "Context", val: "Google UX Certificate", icon: "🎓" },
                        { label: "Role", val: "UX/UI (End-to-End)", icon: "👤" },
                        { label: "Domain", val: "Digital Health", icon: "🏥" }
                    ]
                },
                challenge: {
                    title: 'Context & Challenge',
                    problem: 'Difficulty managing multiple medications, issues with reminders and adherence, and friction in pharmacy search.',
                    details: 'Addressed complexity, cognitive load, and privacy within the context of users in sensitive health situations.'
                },
                responsibilities: {
                    title: 'Role & Responsibilities',
                    items: [
                        { label: 'UX Research', icon: '🔍' },
                        { label: 'Persona Definition', icon: '👤' },
                        { label: 'User Flows', icon: '🛣️' },
                        { label: 'Information Architecture', icon: '🏗️' },
                        { label: 'Wireframes', icon: '🖋️' },
                        { label: 'High-Fidelity Prototypes', icon: '✨' },
                        { label: 'Testing & Iteration', icon: '🔄' }
                    ]
                },
                prototype: {
                    title: 'Final Validated Prototype (Figma)',
                    note: 'The prototype images can be found at the bottom of the page.'
                },
                decisions: {
                    title: 'Key Design Decisions',
                    items: [
                        { title: 'Privacy-First', desc: 'Clear data handling explanations and minimal required information.' },
                        { title: 'Simplified Entry', desc: 'Barcode scanning and medication database to prevent manual errors.' },
                        { title: 'Visual Calendar', desc: 'Medication schedule visualization via calendar for better cognitive comprehension.' },
                        { title: 'Real-Time Stock', desc: 'Pharmacy search integrated with real-time inventory to reduce frustration.' },
                        { title: 'Caregiver Mode', desc: 'Allows family members to manage others\' health safely and collaboratively.' }
                    ]
                },
                process: {
                    title: 'UX Design Process',
                    steps: [
                        {
                            title: 'Research',
                            description: 'User interviews and needs analysis in medication management.',
                            purpose: 'Identify critical pain points in the patient journey.',
                            decision: 'Enabled the focus on smart reminders.'
                        },
                        {
                            title: 'Ideation',
                            description: 'Wireframes and primary flow definition for fluid navigation.',
                            purpose: 'Explore low-friction solutions for the user.',
                            decision: 'Enabled a simplified architecture.'
                        },
                        {
                            title: 'Prototype',
                            description: 'High-fidelity design in Figma with clear microinteractions.',
                            purpose: 'Validate visual interface and accessibility.',
                            decision: 'Enabled realistic touch interaction testing.'
                        },
                        {
                            title: 'Testing',
                            description: 'Usability tests with target users on mobile devices.',
                            purpose: 'Measure the effectiveness of the alert system.',
                            decision: 'Enabled refinement of notification patterns.'
                        },
                        {
                            title: 'Iteration',
                            description: 'Interface refinement based on direct feedback and metrics.',
                            purpose: 'Eliminate frictions detected during testing.',
                            decision: 'Enabled an optimized and validated UX.'
                        },
                        {
                            title: 'Delivery',
                            description: 'Technical documentation and final specifications for development.',
                            purpose: 'Ensure implementation fidelity to the design.',
                            decision: 'Enabled the transition to final product.'
                        }
                    ]
                },
                kpis: {
                    title: 'UX Key Performance Indicators',
                    chartTitle: 'Improvements Achieved',
                    items: [
                        { label: "Adoption", val: 75 },
                        { label: "User Satisfaction", val: 85 },
                        { label: "Reminder Use", val: 80 },
                        { label: "Successful Searches", val: 90 }
                    ]
                },
                results: {
                    title: 'Results & Impact',
                    items: [
                        "85% User Satisfaction",
                        "75% Adoption in first weeks",
                        "80% Active reminder use",
                        "90% Success in pharmacy searches",
                        "Complete and validated prototype"
                    ]
                },
                conclusions: {
                    title: 'Strategic Learnings',
                    items: [
                        { title: "UX Clarity", text: "Importance of absolute clarity in health applications." },
                        { title: "Privacy", text: "Privacy as the central axis of the entire design system." },
                        { title: "Empathy", text: "Reduction of cognitive load and focus on emotional state." },
                        { title: "Trust", text: "Trust as a fundamental requirement for adherence." }
                    ]
                }
            }
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
            deviceType: 'none',
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
            learnings: "Entertainment apps must evoke emotion while remaining highly functional. Users need to feel the energy and excitement of live music through the interface itself, but discovery and booking must be effortless. Visual design serves both aesthetic and functional purposes in this domain.",
            sections: {
                overview: {
                    title: 'Project Overview',
                    items: [
                        { label: "Project", val: "Findies", icon: "🎵" },
                        { label: "Type", val: "Mobile App UX/UI", icon: "📱" },
                        { label: "Domain", val: "Music / Entertainment", icon: "🎸" },
                        { label: "Year", val: "2023–2024", icon: "📅" },
                        { label: "Role", val: "UX Researcher & UI Designer", icon: "👤" },
                        { label: "Context", val: "UX Bootcamp Project", icon: "🎓" }
                    ]
                },
                challenge: {
                    title: 'Context & Challenge',
                    problem: 'Difficulty discovering independent artists and low visibility for small events.',
                    details: 'Fragmented experiences across platforms and lack of direct connection between artists and audience.'
                },
                solution: {
                    title: 'The Solution',
                    items: [
                        { title: 'Discovery', desc: 'Visual Recommendation Systems.' },
                        { title: 'Connection', desc: 'Interactive Artist Profiles.' },
                        { title: 'Social', desc: 'Tracking system and direct connection.' }
                    ]
                },
                process: {
                    title: 'UX Design Process',
                    steps: [
                        { title: 'Research', insight: 'Identification of pain points in discovery.', decision: 'Focus on visual algorithms.' },
                        { title: 'Analysis', insight: 'Archetype definition and user journeys.', decision: 'Priority on local discovery.' },
                        { title: 'Design', insight: 'IA structure and low-fidelity wireframes.', decision: 'Visual-first navigation.' },
                        { title: 'Prototyping', insight: 'High-fidelity with real interactions.', decision: 'Social micro-interactions.' },
                        { title: 'Testing', insight: 'Validation with real users and artists.', decision: 'Refinement of booking flows.' },
                        { title: 'Refinement', insight: 'Iterations based on qualitative feedback.', decision: 'Consolidation of vibrant identity.' }
                    ]
                },
                kpis: {
                    title: 'Key Performance Indicators',
                    chartTitle: 'Improvements Achieved',
                    items: [
                        { label: "Engagement", val: 70 },
                        { label: "Discoveries", val: 80 },
                        { label: "Connections", val: 65 },
                        { label: "Retention", val: 75 }
                    ]
                },
                results: {
                    title: 'Results & Impact',
                    items: [
                        "70% Session Engagement",
                        "80% Increase in discovery",
                        "65% More artist-listener connections",
                        "75% Initial retention",
                        "Successful concept validation"
                    ]
                },
                evolution: {
                    title: 'Project Evolution: Findies',
                    details: 'Move from pure music discovery towards a complete live event and local experience with integrated booking.',
                    visuals: 'Use of energetic photography and vibrant gradients for an emotional UX.'
                },
                experience: {
                    title: 'Visual Design & Experience',
                    items: [
                        { title: 'Energy', desc: 'Vibrant visual language and photography.' },
                        { title: 'Visual-First', desc: 'Gesture-based navigation.' },
                        { title: 'Native', desc: 'Mobile UI (iOS/Android).' }
                    ]
                },
                prototype: {
                    title: 'Final Validated Prototype (Figma)',
                    note: 'Discovery, artist detail, and in-app booking flows validated.',
                    qualities: [
                        { label: 'VISUAL CLARITY', val: 'Minimalist' },
                        { label: 'ACCESSIBILITY', val: 'WCAG 2.1 AA' },
                        { label: 'FOCUS', val: 'Mobile First' },
                        { label: 'NAVIGATION', val: 'Intuitive' }
                    ]
                },
                conclusions: {
                    title: 'Strategic Learnings',
                    items: [
                        { title: "Balance", text: "Crucial balance between emotion and usability." },
                        { title: "Engagement Engine", text: "Discovery as the main driver of retention." },
                        { title: "Friction", text: "Critical reduction of friction in booking." },
                        { title: "Visual UX", text: "Visual design as function, not just aesthetics." }
                    ]
                }
            }
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
            deviceType: 'none',
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
            // English Content
            context: 'GoodMeal is a mobile meal planning and nutrition app aimed at users who want to eat healthier without feeling overwhelmed by traditional nutrition tracking. Developed in an academic-professional context (Adalid Bootcamp, 2024), the app needed to balance comprehensive nutrition features with an accessible, friendly, and motivating user experience.',
            problem: 'Existing nutrition apps present complex onboarding, demand excessive initial input, and generate a sense of "chore" or judgment. Users want to eat better, not learn a complex system. The challenge: reduce initial friction, design progressive onboarding, and make the app feel friendly (not clinical), balancing immediate value with data collection.',
            role: 'UX/UI Designer focusing on onboarding, authentication, UX Writing, mobile visual design, and initial friction reduction.',
            responsibilities: [
                'User Journeys and friction mapping',
                'Progressive onboarding design and optimization',
                'Simplified authentication flow (email, social login)',
                'Empathetic UX Writing for health context',
                'Mobile-first visual design with warm palette',
                'Form and validation optimization'
            ],
            processSteps: [
                {
                    title: 'User Research',
                    description: 'Analyzed competitor nutrition apps identifying common friction patterns: long onboarding, complex registration, excessive initial inputs, and technical language. Key insight: Users want to eat better, not learn a complex system. Simplicity beats comprehensiveness for retention.'
                },
                {
                    title: 'Key Friction Definition',
                    description: 'Mapped abandonment points in acquisition funnel. Identified that every extra field is a potential barrier in health products. Defined UX criteria: reduce initial steps, empathetic copy, immediate feedback, and soft gamification.'
                },
                {
                    title: 'Progressive Onboarding Design',
                    description: 'Designed illustrated onboarding explaining value BEFORE requesting data. Implemented progressive disclosure: only essential information upfront, detailed preferences deferred. Friendly and encouraging copy reduces tracking anxiety.'
                },
                {
                    title: 'Simplified Authentication Design',
                    description: 'Social authentication (Google) as default to reduce friction. Traditional registration with minimal fields. Clear value proposition on login screen. Trust design without clinical feel.'
                },
                {
                    title: 'Visual and Copy Iteration',
                    description: 'Created warm visual language using friendly illustrations and pink palette (not traditional health green/blue). Empathetic copy, not medical. Soft gamification: positive feedback, not hard metrics. Supportive interface, not judgmental.'
                }
            ],
            keyDecisions: [
                'Social authentication as default: primary registration path to reduce entry friction',
                'Illustrated onboarding: explain value before requesting personal or nutritional data',
                'Warm palette (pink/magenta): convey friendliness instead of traditional clinical green/blue',
                'Empathetic copy: motivating and non-medical language, avoiding intimidating technical terminology',
                'Soft gamification: positive feedback and visual rewards without hard metrics pressure'
            ],
            results: [
                'Reduced perceived friction in registration process',
                'More accessible and friendly onboarding validated in testing',
                'Better emotional perception of the app (doesn\'t feel clinical)',
                'Friendly entry point to nutrition for non-expert users',
                'Optimized acquisition flow demonstrating solid UX thinking'
            ],
            learnings: 'In health products, every extra field is a potential barrier. Designing with empathy is as important as designing with data. Users need immediate value with minimal friction. Design must be supportive, not critical: the most effective app is one users actually complete and use sustainably.',
            sections: {
                overview: {
                    title: 'Project Overview',
                    items: [
                        { label: "Project", val: "GoodMeal", icon: "🥗" },
                        { label: "Type", val: "Mobile Nutrition App", icon: "📱" },
                        { label: "Domain", val: "Health & Wellness", icon: "❤️" },
                        { label: "Year", val: "2024", icon: "📅" },
                        { label: "Role", val: "UX/UI Designer", icon: "👤" },
                        { label: "Context", val: "Adalid Bootcamp", icon: "🎓" }
                    ]
                },
                challenge: {
                    title: 'The Challenge',
                    problem: 'Reduce initial friction without compromising essential data collection.',
                    details: 'Design progressive onboarding, simplified authentication, and friendly experience (not clinical) for accessible nutrition.'
                },
                responsibilities: {
                    title: 'Role & Responsibilities',
                    items: [
                        { label: 'User Journeys', icon: '🛣️' },
                        { label: 'Onboarding', icon: '👋' },
                        { label: 'Authentication', icon: '🔐' },
                        { label: 'Visual Design', icon: '🎨' },
                        { label: 'Mobile UI', icon: '📱' },
                        { label: 'UX Writing', icon: '✍️' }
                    ]
                },
                process: {
                    title: 'UX Design Process',
                    steps: [
                        { title: 'Research', insight: 'Users report friction in long onboarding.', decision: 'Design progressive onboarding.' },
                        { title: 'Definition', insight: 'Every extra field is a potential barrier.', decision: 'UX criteria: simplicity, empathy, immediate feedback.' },
                        { title: 'Onboarding', insight: 'Users want value before giving data.', decision: 'Illustrated onboarding explaining benefits first.' },
                        { title: 'Auth', insight: 'Friction in traditional registration.', decision: 'Social login as default (Google).' },
                        { title: 'Visual', insight: 'Clinical aesthetic generates emotional rejection.', decision: 'Warm palette (pink/magenta) and friendly illustrations.' }
                    ]
                },
                frictionData: {
                    title: 'Friction Identified in Nutrition Apps',
                    subtitle: 'Qualitative insight based on research',
                    chartTitle: 'Problems Reported by Users',
                    items: [
                        { label: "Long Onboarding", val: 75, description: "High friction reported" },
                        { label: "Complex Registration", val: 68, description: "Significant barrier" },
                        { label: "Excessive Inputs", val: 82, description: "Critical friction" },
                        { label: "Technical Language", val: 60, description: "Perceived intimidation" }
                    ],
                    note: 'These values represent frequency of friction reported in research, not final product metrics.'
                },
                kpis: {
                    title: 'Qualitative Results',
                    chartTitle: 'Perceived Improvements',
                    subtitle: 'Based on user validation and testing',
                    items: [
                        { label: "Reduced Friction", val: 85, description: "Positive perception" },
                        { label: "Accessible Onboarding", val: 90, description: "Successful validation" },
                        { label: "Friendly Perception", val: 88, description: "Doesn\'t feel clinical" },
                        { label: "Entry Point", val: 80, description: "Non-expert access" }
                    ]
                },
                results: {
                    title: 'Results & Impact',
                    items: [
                        "Reduced registration abandonment",
                        "Increased social account creation",
                        "Friendly and accessible brand perception",
                        "Simple entry point for non-experts",
                        "Validated acquisition flow"
                    ]
                }
            }
        }
    ]
}

export default projectsData
