import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import GhaliKombuchaKPIs from '../components/GhaliKombuchaKPIs'

const GhaliKombucha = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'ghali-kombucha')

    return (
        <CaseStudyTemplate
            project={project}
        >
            <GhaliKombuchaKPIs currentLang={currentLang} />
        </CaseStudyTemplate>
    )
}

export default GhaliKombucha
