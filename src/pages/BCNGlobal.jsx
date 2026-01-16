import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const BCNGlobal = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'bcn-global')

    return (
        <CaseStudyTemplate
            project={project}
            context="BCN Global, a leading corporate training solutions provider, needed a complete homepage redesign to better communicate their value proposition and drive lead generation. Their existing website lacked clear messaging and modern UX standards."
            problem="Unclear service differentiation, poor information architecture, and dated visual design were limiting their ability to compete in the B2B e-learning market. The site needed to convey professionalism, credibility, and innovation to attract enterprise clients."
            role="End-to-end ownership of information architecture, UX strategy, visual design, design system creation, and front-end implementation."
            responsibilities={[
                'Stakeholder interviews and requirements gathering',
                'Content strategy and information architecture',
                'Visual design system creation',
                'High-fidelity UI design',
                'Front-end development and hosting setup',
                'Performance optimization and SEO implementation'
            ]}
            processSteps={[
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
            ]}
            keyDecisions={[
                'Service-focused homepage hero highlighting three pillars of training solutions with clear visual differentiation',
                'Conversion-optimized CTAs placed strategically throughout the page with A/B tested copy',
                'Trust-building elements prominently displayed: client logos, certifications, case study metrics',
                'Mobile-first responsive design considering that initial research often happens on mobile devices'
            ]}
            results={[
                'Deployed fully functional website with custom domain and hosting',
                'Significantly improved brand perception based on client feedback',
                'Created scalable design system for future page development',
                'Achieved excellent performance scores (90+ Lighthouse)',
                'Established clear visual and content hierarchy for lead generation'
            ]}
            learnings="B2B websites require credibility-first design. Enterprise clients need to quickly understand what you do, who you've worked with, and why you're qualified. Visual polish matters, but clear communication and trust signals drive conversion in this market."
        />
    )
}

export default BCNGlobal
