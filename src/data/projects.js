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
                    description: 'Realicé talleres con stakeholders para definir objetivos comerciales, audiencias objetivo y diferenciadores clave. Analicé sitios web de competidores e identifiqué oportunidades de diferenciación en mensajes y UX.'
                },
                {
                    title: 'Arquitectura de Información',
                    description: 'Reestructuré la navegación del sitio y la jerarquía de contenido para priorizar servicios y propuestas de valor. Creé caminos claros para diferentes segmentos de usuarios (gerentes de RRHH, profesionales de L&D, ejecutivos).'
                },
                {
                    title: 'Sistema de Diseño y UI',
                    description: 'Desarrollé un sistema de diseño integral incluyendo tipografía, paleta de colores, componentes y pautas de espaciado. Creé mockups de alta fidelidad enfatizando el profesionalismo y una estética moderna alineada con las expectativas B2B.'
                },
                {
                    title: 'Implementación y Lanzamiento',
                    description: 'Construí un front-end responsivo con enfoque en rendimiento y accesibilidad. Configuré la infraestructura de hosting, implementé mejores prácticas SEO y realicé pruebas cruzadas en navegadores antes del lanzamiento.'
                }
            ],
            keyDecisions: [
                'Héroe de página de inicio centrado en servicios destacando tres pilares de soluciones de capacitación con clara diferenciación visual',
                'CTAs optimizados para conversión ubicados estratégicamente a lo largo de la página con copy probado en A/B',
                'Elementos generadores de confianza mostrados prominentemente: logos de clientes, certificaciones, métricas de casos de estudio',
                'Diseño responsivo mobile-first considerando que la investigación inicial a menudo ocurre en dispositivos móviles'
            ],
            results: [
                'Rediseñé homepage corporativa con foco en captación y claridad de propuesta de valor.',
                'Analicé el flujo y estructura, identifiqué problemas de jerarquía, arquitectura y conversión.',
                'Definí criterios UX alineados a objetivos de negocio B2B y métricas de engagement.',
                'Propuse una nueva arquitectura y narrativa visual orientada a confianza y conversión.',
                'Agilicé procesos con maquetación asistida por IA (Lovable).',
                'Diseñé wireframes, prototipos de alta fidelidad, y un Design System responsivo y consistente (Desktop, tablet y mobile)',
                'Hosting de prueba funcional y responsiva para cada breakpoint (Figma y figma.to.website)',
                'Ejecuté testeo UX para validar decisiones de diseño.',
                'Desarrollé la solución en HTML, CSS y Bootstrap para asegurar viabilidad técnica.',
                'Solucioné y comprendí flujos end to end, B2B, conversión y performance UX.'
            ],
            learnings: 'Los sitios web B2B requieren diseño priorizando la credibilidad. Los clientes empresariales necesitan entender rápidamente qué haces, con quién trabajaste y por qué estás calificado. El pulido visual importa, pero la comunicación clara y las señales de confianza impulsan la conversión en este mercado.'
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
                    title: 'Planificación de Investigación',
                    description: 'Definí objetivos de investigación enfocados en mejorar la descubribilidad de productos y reducir fricción en el pago. Recluté participantes que coincidían con la demografía de clientes objetivo (consumidores conscientes de la salud de 25-45 años).'
                },
                {
                    title: 'Card Sorting y AI',
                    description: 'Conduje sesiones de card sorting abiertas y cerradas para entender cómo los usuarios categorizan naturalmente los productos de kombucha. Descubrí que los usuarios preferían categorización por perfil de sabor y beneficios en lugar de detalles técnicos de fermentación.'
                },
                {
                    title: 'Tree Testing',
                    description: 'Validé la estructura de navegación propuesta a través de ejercicios de tree testing. Identifiqué que los usuarios encontraban productos exitosamente un 78% más rápido con la nueva AI comparada con la estructura existente.'
                },
                {
                    title: 'Pruebas A/B y Optimización',
                    description: 'Diseñé y ejecuté pruebas A/B en variaciones del flujo de pago, copy de CTAs, señales de confianza y diseños de formularios. Itere basándome en datos para maximizar conversión mientras minimizaba la fricción.'
                }
            ],
            keyDecisions: [
                'Reorganicé categorías de productos de base-producción a base-beneficio (ej., "Salud Digestiva" en lugar de "Mezcla Original")',
                'Simplifiqué el checkout a diseño de una sola página basado en prueba A/B mostrando mejora del 15% en conversión',
                'Añadí función de comparación de productos después de que la investigación mostró que usuarios luchaban para diferenciar entre sabores',
                'Implementé carrito persistente con recuperación por email basado en datos de abandono'
            ],
            results: [
                "Versión B seleccionada como mejor opción",
                "Mejora del 15% en tasa de conversión",
                "Reducción de 50 segundos en tiempo de compra",
                "CTR constante del 100% en ambas versiones",
                "Optimización exitosa de usabilidad y reducción de fricciones"
            ],
            learnings: 'El éxito en e-commerce depende de flujos de descubrimiento y compra libres de fricción. A los usuarios no les importa tu organización interna de productos—piensan en términos de sus propias necesidades y objetivos. Probar con usuarios reales temprano y a menudo previene suposiciones costosas y asegura que la AI realmente sirva a los modelos mentales de los usuarios.'
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
            // Spanish Content - Translated from English
            context: 'La Especiería, una tienda de e-commerce de especias y condimentos gourmet, requería una renovación UX/UI completa para mejorar las tasas de conversión y el compromiso del cliente. El sitio existente tenía una jerarquía visual deficiente, navegación confusa y bajas tasas de finalización de compra.',
            problem: 'Los usuarios rebotaban rápidamente debido a una diferenciación de productos poco clara, falta de señales de confianza y flujos de pago engorrosos. La experiencia móvil era particularmente problemática, a pesar de que el tráfico móvil representaba más del 60% de los visitantes.',
            role: 'Diseño UX/UI de principio a fin y desarrollo front-end, desde la investigación inicial de usuarios hasta la implementación final.',
            responsibilities: [
                'Mapeo del viaje del usuario y optimización de flujos',
                'Wireframing y arquitectura de información',
                'Diseño visual y expresión de marca',
                'Desarrollo Front-end (HTML, CSS, JavaScript)',
                'Implementación responsiva Mobile-first',
                'Optimización de rendimiento y testing'
            ],
            processSteps: [
                {
                    title: 'Investigación y Análisis de Usuarios',
                    description: 'Analicé analíticas existentes, realicé entrevistas a usuarios y ejecuté evaluaciones heurísticas. Identifiqué puntos débiles clave en el descubrimiento de productos, comparación y flujos de compra. Mapeé los viajes de usuario actuales vs. ideales.'
                },
                {
                    title: 'Estrategia UX y Wireframing',
                    description: 'Rediseñé la arquitectura de información priorizando la fotografía de productos y una categorización clara. Creé wireframes mobile-first enfatizando el descubrimiento visual de productos y una experiencia de carrito simplificada.'
                },
                {
                    title: 'Diseño Visual',
                    description: 'Desarrollé un diseño visual cálido y apetitoso que refleja la naturaleza artesanal de las especias. Creé una fuerte jerarquía visual a través de la tipografía, color y espaciado. Diseñé tarjetas de productos que muestran fotografía de alta calidad.'
                },
                {
                    title: 'Desarrollo Front-End',
                    description: 'Construí un sitio web responsivo con enfoque en rendimiento y accesibilidad. Optimicé imágenes para carga rápida. Implementé interacciones suaves y micro-animaciones para mejorar la sensación premium sin sacrificar velocidad.'
                }
            ],
            keyDecisions: [
                'Diseño de página de inicio centrado en el producto con fotografía grande para evocar atractivo sensorial',
                'Señales de confianza prominentes: insignias de pago seguro, reseñas de clientes, historias de origen',
                'Función de reorden de un clic basada en la percepción de que los clientes de especias son compradores recurrentes',
                'Diseño mobile-first con navegación simplificada adaptada a interacciones táctiles',
                'Uso estratégico de escasez y prueba social sin parecer manipulador'
            ],
            results: [
                '+100% de aumento en tasa de conversión post-rediseño',
                '+70% de mejora en tasa de clics (CTR) en páginas de productos',
                'Reducción de tasa de rebote en 35% a través de mejor compromiso inicial',
                'Tasa de conversión móvil mejorada en 90% con enfoque mobile-first',
                'Valor medio de pedido aumentado en 25% a través de mejor venta cruzada'
            ],
            learnings: 'El diseño de e-commerce debe equilibrar emoción y funcionalidad. Para productos alimenticios especializados, el atractivo visual y la narración impulsan el deseo, pero el camino a la compra debe ser completamente libre de fricción. La optimización móvil es innegociable: la mayoría de los usuarios navegan en móviles incluso si finalmente compran en escritorio.'
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
            // Spanish Content - Translated from English
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
            learnings: 'La UX en salud demanda claridad excepcional, fuertes protecciones de privacidad y profunda empatía por usuarios en situaciones potencialmente estresantes. Cada decisión de diseño debe priorizar la confianza y simplicidad: los usuarios necesitan sentirse seguros en la app sin aprender sistemas complejos mientras gestionan su salud.'
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
            // Spanish Content - Translated from English
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
            learnings: 'Las apps de entretenimiento deben evocar emoción mientras permanecen altamente funcionales. Los usuarios necesitan sentir la energía y emoción de la música en vivo a través de la interfaz misma, pero el descubrimiento y la reserva deben ser sin esfuerzo. El diseño visual sirve tanto propósitos estéticos como funcionales en este dominio.'
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
            // Spanish Content - Translated from English
            context: 'GoodMeal es una app de planificación de comidas y seguimiento nutricional diseñada para hacer la alimentación saludable accesible y sostenible. La app necesitaba equilibrar características nutricionales completas con una experiencia de usuario accesible y no intimidante.',
            problem: 'Muchas apps de nutrición abruman a los usuarios con requisitos de entrada de datos y seguimiento complejo de calorías, llevando al abandono. Los usuarios quieren comer más saludable pero no quieren sentir que están haciendo tarea en cada comida.',
            role: 'Diseñador UX/UI enfocándose en experiencia de onboarding, flujo de autenticación y estrategia general de diseño visual.',
            responsibilities: [
                'Mapeo de viaje del usuario para adquisición de nuevos usuarios',
                'Diseño y optimización de flujo de onboarding',
                'Experiencia de autenticación (email, inicio de sesión social)',
                'Diseño visual y expresión de marca amigable',
                'Diseño de interfaz mobile-first',
                'Optimización de formularios y UX de validación de entrada'
            ],
            processSteps: [
                {
                    title: 'Investigación de Usuarios',
                    description: 'Analicé reseñas de usuarios de apps competidoras, identificando quejas comunes sobre fricción en onboarding y complejidad. Conduje encuestas revelando que usuarios abandonan apps de nutrición cuando la configuración inicial se siente abrumadora. Insight clave: la simplicidad supera a la exhaustividad para la retención de usuarios.'
                },
                {
                    title: 'Estrategia de Onboarding',
                    description: 'Diseñé onboarding progresivo recolectando solo información esencial al principio. Diferí preferencias nutricionales detalladas hasta después de que los usuarios experimentaran el valor central. Creé copy amigable y alentador reduciendo ansiedad sobre el seguimiento.'
                },
                {
                    title: 'Diseño de Autenticación',
                    description: 'Implementé opciones de inicio de sesión social (Google, Apple) junto con registro tradicional por email. Reduje campos de formulario al conjunto mínimo viable. Diseñé propuesta de valor clara en pantalla de inicio de sesión para motivar el registro.'
                },
                {
                    title: 'Diseño Visual',
                    description: 'Creé lenguaje visual cálido y accesible usando ilustraciones amigables y paleta de colores alentadora. Evité estética clínica de salud en favor de sensación de marca de estilo de vida. Diseñé interfaz sintiéndose de apoyo en lugar de crítica.'
                }
            ],
            keyDecisions: [
                'Autenticación social como camino de registro primario para reducir fricción',
                'Onboarding ilustrado explicando valor antes de solicitar datos',
                'Paleta de color rosa transmitiendo amabilidad en lugar del tradicional verde/azul de apps de salud',
                'Elementos de gamificación haciendo que el seguimiento nutricional se sienta gratificante en lugar de una carga',
                'Valores predeterminados inteligentes y comidas sugeridas por IA reduciendo entrada manual de datos'
            ],
            results: [
                'Onboarding simplificado reduciendo abandono de registro',
                'Autenticación social incrementando creación exitosa de cuentas',
                'Diseño visual amigable mejorando percepción del usuario sobre accesibilidad de la app',
                'Creé punto de entrada accesible al seguimiento nutricional para usuarios no expertos',
                'Demostré habilidad para diseñar para tecnología de salud con atractivo masivo'
            ],
            learnings: 'Las apps de salud deben equilibrar la recolección de datos con la motivación del usuario. Cada campo adicional en el onboarding aumenta el riesgo de abandono. La clave es proveer valor inmediato con mínima fricción, luego recolectar datos progresivamente a medida que los usuarios se comprometen y ven beneficios.'
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
                'Redesigned corporate homepage with a focus on acquisition and clarity of value proposition.',
                'Analyzed the flow and structure, identified problems with hierarchy, architecture, and conversion.',
                'Defined UX criteria aligned with B2B business objectives and engagement metrics.',
                'Proposed a new architecture and visual narrative oriented towards trust and conversion.',
                'Streamlined processes with AI-assisted layout (Lovable).',
                'Designed wireframes, high-fidelity prototypes, and a responsive and consistent Design System (Desktop, tablet, and mobile)',
                'Functional and responsive test hosting for each breakpoint (Figma and figma.to.website)',
                'Executed UX testing to validate design decisions.',
                'Developed the solution in HTML, CSS, and Bootstrap to ensure technical feasibility.',
                'Solved and understood end-to-end flows, B2B, conversion, and UX performance.'
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
                'Simplified checkout to single-page design based on A/B test showing 15% conversion improvement',
                'Added product comparison feature after research showed users struggled to differentiate between flavors',
                'Implemented persistent cart with email recovery based on abandonment data'
            ],
            results: [
                "Version B selected as the best option",
                "15% improvement in conversion rate",
                "50 seconds reduction in purchase time",
                "Constant CTR of 100% in both versions",
                "Successful usability optimization and friction reduction"
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
