import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const BancoEstado = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'banco-estado')

    const content = {
        es: {
            context: "Banco Estado, una de las instituciones financieras más grandes de Chile, requería optimización UX para su producto bancario B2B. El embudo de conversión existente mostraba puntos de fricción que afectaban la adquisición de clientes comerciales y las tasas de activación de cuentas.",
            problem: "Procesos complejos de múltiples pasos, propuestas de valor poco claras y una arquitectura de información subóptima estaban creando barreras en el viaje del usuario. El desafío era simplificar sin comprometer los requisitos necesarios de seguridad y cumplimiento inherentes a los productos bancarios.",
            role: "Lideré el proceso de diseño UX/UI de principio a fin, incluyendo investigación de usuarios, wireframing, prototipado de alta fidelidad y validación front-end.",
            responsibilities: [
                'Análisis de flujo de usuarios y estrategia de optimización de embudo',
                'Wireframing y prototipado interactivo',
                'Diseño UI de alta fidelidad alineado con pautas de marca',
                'Pruebas de usabilidad con clientes de banca empresas',
                'Generación de escenarios de prueba asistida por IA',
                'Validación de implementación front-end',
            ],
            processSteps: [
                {
                    title: 'Investigación y Análisis',
                    description: 'Realicé análisis de datos del embudo de conversión existente, identificando puntos de abandono y problemas de usabilidad. Realicé análisis competitivo de experiencias bancarias B2B y entrevisté a stakeholders para entender restricciones comerciales y requisitos de cumplimiento.'
                },
                {
                    title: 'Estrategia UX y Wireframing',
                    description: 'Rediseñé flujos de usuarios para reducir pasos y carga cognitiva. Creé wireframes de baja a media fidelidad enfocados en divulgación progresiva y CTAs claros. Definí nueva arquitectura de información priorizando acciones bancarias críticas.'
                },
                {
                    title: 'Diseño UI y Prototipado',
                    description: 'Desarrollé diseños de alta fidelidad manteniendo consistencia de marca mientras mejoraba jerarquía visual. Creé prototipos interactivos para revisión de stakeholders y pruebas de usabilidad. Apliqué estándares de accesibilidad (WCAG 2.1 AA) en todo el proceso.'
                },
                {
                    title: 'Pruebas y Validación',
                    description: 'Realicé pruebas de usabilidad con clientes comerciales. Usé IA para generar escenarios de prueba diversos y casos extremos. Validé implementación front-end para asegurar fidelidad de diseño y estándares de rendimiento.'
                }
            ],
            keyDecisions: [
                'Implementé divulgación progresiva para reducir primeras impresiones abrumadoras manteniendo acceso a todas las funciones',
                'Diseñé señales de confianza (insignias de seguridad, soporte en vivo) prominentemente para abordar ansiedad bancaria',
                'Creé flujos responsive móvil ya que datos mostraron que 40% de dueños de negocios iniciaban solicitudes en móvil',
                'Optimicé campos de formulario basado en pruebas de usabilidad, reduciendo campos requeridos en 30% sin comprometer requisitos KYC'
            ],
            results: [
                'Embudo de conversión simplificado con pasos reducidos',
                'Mejora en puntajes de satisfacción de usuario en pruebas post-lanzamiento',
                'Validación exitosa de implementación front-end contra especificaciones de diseño',
                'Mejoras de rendimiento medibles demostradas en flujos de usuario clave'
            ],
            learnings: "El UX Fintech requiere equilibrar confianza y simplicidad. Los usuarios necesitan tranquilidad a través de patrones bancarios familiares e indicadores de seguridad claros, pero la complejidad nunca debe confundirse con exhaustividad. El sistema más seguro es aquel que los usuarios realmente completan con éxito."
        },
        en: {
            context: "Banco Estado, one of Chile's largest financial institutions, required UX optimization for their B2B banking product. The existing conversion funnel showed friction points affecting business customer acquisition and account activation rates.",
            problem: "Complex multi-step processes, unclear value propositions, and suboptimal information architecture were creating barriers in the user journey. The challenge was to simplify without compromising the necessary security and compliance requirements inherent to banking products.",
            role: "Led end-to-end UX/UI design process including user research, wireframing, high-fidelity prototyping, and front-end validation.",
            responsibilities: [
                'User flow analysis and funnel optimization strategy',
                'Wireframing and interactive prototyping',
                'High-fidelity UI design aligned with brand guidelines',
                'Usability testing with business banking customers',
                'AI-assisted testing scenario generation',
                'Front-end implementation validation',
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
        }
    }

    const t = content[currentLang]

    return (
        <CaseStudyTemplate
            project={project}
            context={t.context}
            problem={t.problem}
            role={t.role}
            responsibilities={t.responsibilities}
            processSteps={t.processSteps}
            keyDecisions={t.keyDecisions}
            results={t.results}
            learnings={t.learnings}
        />
    )
}

export default BancoEstado
