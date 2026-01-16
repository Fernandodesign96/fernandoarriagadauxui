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
        />
    )
}

export default LaEspecieria
