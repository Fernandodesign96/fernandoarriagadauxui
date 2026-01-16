import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const LaEspecieria = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'la-especieria')

    return (
        <CaseStudyTemplate
            project={project}
            context="La Especiería, a specialty spice and seasoning e-commerce store, required a complete UX/UI overhaul to improve conversion rates and customer engagement. The existing site had poor visual hierarchy, confusing navigation, and low purchase completion rates."
            problem="Users were bouncing quickly due to unclear product differentiation, lack of trust signals, and cumbersome checkout flows. The mobile experience was particularly problematic, despite mobile traffic representing over 60% of visitors."
            role="End-to-end UX/UI design and front-end development, from initial user research through final implementation."
            responsibilities={[
                'User journey mapping and flow optimization',
                'Wireframing and information architecture',
                'Visual design and brand expression',
                'Front-end development (HTML, CSS, JavaScript)',
                'Mobile-first responsive implementation',
                'Performance optimization and testing'
            ]}
            processSteps={[
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
            ]}
            keyDecisions={[
                'Product-focused homepage layout with large photography to evoke sensory appeal of spices',
                'Prominent trust signals: secure payment badges, customer reviews, origin stories',
                'One-click reorder feature based on insight that spice customers are repeat buyers',
                'Mobile-first design with simplified navigation tailored to touch interactions',
                'Strategic use of scarcity and social proof without appearing manipulative'
            ]}
            results={[
                '+100% increase in conversion rate post-redesign',
                '+70% improvement in click-through rate on product pages',
                'Reduced bounce rate by 35% through improved initial engagement',
                'Mobile conversion rate improved by 90% with mobile-first approach',
                'Average order value increased by 25% through better cross-selling'
            ]}
            learnings="E-commerce design must balance emotion and functionality. For specialty food products, visual appeal and storytelling drive desire, but the path to purchase must be completely frictionless. Mobile optimization is non-negotiable—most users browse on mobile even if they ultimately purchase on desktop."
        />
    )
}

export default LaEspecieria
