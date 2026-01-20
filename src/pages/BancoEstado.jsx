import CaseStudyTemplate from '../components/CaseStudyTemplate'
import projectsData from '../data/projects'
import { useLanguage } from '../context/LanguageContext'
import KPISection from '../components/KPISection'

const BancoEstado = () => {
    const { currentLang } = useLanguage()
    const projects = projectsData[currentLang]
    const project = projects.find(p => p.slug === 'banco-estado')

    return (
        <CaseStudyTemplate
            project={project}
        >
            <KPISection currentLang={currentLang} />
        </CaseStudyTemplate>
    )
}

export default BancoEstado
