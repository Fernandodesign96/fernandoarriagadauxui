import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const Findies = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'findies')

    return (
        <CaseStudyTemplate
            project={project}
            context="Findies is a mobile application designed to help music enthusiasts discover live events and emerging artists in their area. The app needed to stand out in a crowded entertainment app market by offering superior discovery and booking experiences."
            problem="Existing event discovery apps prioritized major venues and popular artists, making it difficult for users to find intimate shows and emerging talent. Users also struggled with fragmented booking processes requiring navigation to multiple external sites."
            role="End-to-end UX/UI designer responsible for creating the complete mobile app experience."
            responsibilities={[
                'User research and competitive analysis',
                'User flow design and optimization',
                'Visual design and brand identity',
                'Mobile interface design (iOS/Android patterns)',
                'Interactive prototyping',
                'Collaboration with developers on implementation'
            ]}
            processSteps={[
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
            ]}
            keyDecisions={[
                'Visual-first browsing with high-quality event photography and artist imagery as primary navigation',
                'Integrated music preview without leaving app context to maintain engagement',
                'Personalized recommendation engine based on listening history and saved artists',
                'Social features allowing friends to share and coordinate event attendance',
                'In-app booking reducing external site redirects and cart abandonment'
            ]}
            results={[
                'Created engaging visual identity distinguishing app from competitors',
                'Designed intuitive event discovery flow praised in user testing',
                'Streamlined booking process reducing steps required by 60%',
                'Developed scalable design system for future feature additions',
                'Demonstrated capability in entertainment and social app UX'
            ]}
            learnings="Entertainment apps must evoke emotion while remaining highly functional. Users need to feel the energy and excitement of live music through the interface itself, but discovery and booking must be effortless. Visual design serves both aesthetic and functional purposes in this domain."
        />
    )
}

export default Findies
