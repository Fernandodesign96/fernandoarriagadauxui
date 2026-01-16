import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const Pharmafy = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'pharmafy')

    return (
        <CaseStudyTemplate
            project={project}
            context="Pharmafy was developed as part of the Google UX Design Professional Certificate, focusing on creating a digital health solution for medication management. The project challenged me to apply end-to-end UX methodology to a complex healthcare domain."
            problem="Many people struggle to manage multiple medications, remember dosing schedules, and find nearby pharmacies with their prescriptions in stock. Existing solutions were either too complex, lacked essential features, or failed to address privacy concerns critical in healthcare."
            role="Sole UX designer responsible for the complete design process from research to high-fidelity prototypes."
            responsibilities={[
                'User research and competitive analysis',
                'Persona development based on research findings',
                'User journey mapping and pain point identification',
                'Information architecture and user flows',
                'Low-fidelity wireframing and iteration',
                'High-fidelity UI design and interactive prototyping',
                'Usability testing and design refinement'
            ]}
            processSteps={[
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
            ]}
            keyDecisions={[
                'Privacy-first approach: clear data handling explanations and minimal required information',
                'Simplified medication entry using barcode scanning and medication database',
                'Visual medication schedule calendar rather than list view for better comprehension',
                'Pharmacy search integrated with real-time inventory when available',
                'Caregiver mode allowing family members to help manage medications'
            ]}
            results={[
                'Successfully completed Google UX Design Professional Certificate',
                'Demonstrated mastery of end-to-end UX process',
                'Created portfolio piece showcasing healthcare UX capabilities',
                'Received positive feedback during usability testing on clarity and ease of use',
                'Developed understanding of accessibility and privacy requirements in health tech'
            ]}
            learnings="Healthcare UX demands exceptional clarity, strong privacy protections, and deep empathy for users in potentially stressful situations. Every design decision must prioritize trust and simplicity—users need to feel confident in the app without learning complex systems while managing their health."
        />
    )
}

export default Pharmafy
