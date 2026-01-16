import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const GoodMeal = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'goodmeal')

    return (
        <CaseStudyTemplate
            project={project}
            context="GoodMeal is a meal planning and nutrition tracking app designed to make healthy eating accessible and sustainable. The app needed to balance comprehensive nutrition features with an approachable, non-intimidating user experience."
            problem="Many nutrition apps overwhelm users with data entry requirements and complex calorie tracking, leading to abandonment. Users want to eat healthier but don't want to feel like they're doing homework every meal."
            role="UX/UI designer focusing on onboarding experience, authentication flow, and overall visual design strategy."
            responsibilities={[
                'User journey mapping for new user acquisition',
                'Onboarding flow design and optimization',
                'Authentication experience (email, social sign-in)',
                'Visual design and friendly brand expression',
                'Mobile-first interface design',
                'Form optimization and input validation UX'
            ]}
            processSteps={[
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
            ]}
            keyDecisions={[
                'Social authentication as primary registration path to reduce friction',
                'Illustrated onboarding explaining value before requesting data',
                'Pink color palette conveying friendliness rather than traditional health app green/blue',
                'Gamification elements making nutrition tracking feel rewarding rather than burdensome',
                'Smart defaults and AI-suggested meals reducing manual data entry'
            ]}
            results={[
                'Streamlined onboarding reducing registration abandonment',
                'Social authentication increasing successful account creation',
                'Friendly visual design improving user perception of app approachability',
                'Created accessible entry point to nutrition tracking for non-expert users',
                'Demonstrated ability to design for health tech with mainstream appeal'
            ]}
            learnings="Health apps must balance data collection with user motivation. Every additional field in onboarding increases abandonment risk. The key is providing immediate value with minimal friction, then progressively collecting data as users become engaged and see benefits."
        />
    )
}

export default GoodMeal
