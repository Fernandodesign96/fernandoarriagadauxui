import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

const GhaliKombucha = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'ghali-kombucha')

    return (
        <CaseStudyTemplate
            project={project}
            context="Ghali Kombucha, an artisan kombucha brand, needed data-driven UX improvements to increase online sales. Despite having quality products and growing brand awareness, their e-commerce conversion rates and session durations were below industry benchmarks."
            problem="Users struggled to find products due to confusing categorization, and the checkout process had multiple friction points causing cart abandonment. The information architecture didn't match user mental models for browsing health beverages."
            role="UX Research lead responsible for conducting card sorting studies, tree testing, and A/B testing to validate and optimize the e-commerce experience."
            responsibilities={[
                'UX research methodology design and execution',
                'Card sorting studies for product categorization',
                'Tree testing for navigation validation',
                'A/B test design and analysis for checkout optimization',
                'Data analysis and actionable recommendations',
                'Collaboration with development team on implementation'
            ]}
            processSteps={[
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
            ]}
            keyDecisions={[
                'Reorganized product categories from production-based to benefit-based (e.g., "Digestive Health" instead of "Original Blend")',
                'Simplified checkout to single-page design based on A/B test showing 12.5% conversion improvement',
                'Added product comparison feature after research showed users struggled to differentiate between flavors',
                'Implemented persistent cart with email recovery based on abandonment data'
            ]}
            results={[
                '+12.5% conversion rate increase after implementing single-page checkout',
                '+100% increase in average session duration following IA improvements',
                'Reduced cart abandonment by 18% through strategic friction point removal',
                'Improved product findability scores by 78% in follow-up tree testing',
                'Data-driven recommendations adopted by development team'
            ]}
            learnings="E-commerce success depends on friction-free discovery and purchase flows. Users don't care about your internal product organization—they think in terms of their own needs and goals. Testing with real users early and often prevents costly assumptions and ensures the IA actually serves user mental models."
        />
    )
}

export default GhaliKombucha
