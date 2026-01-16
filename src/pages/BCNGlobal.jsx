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
        />
    )
}

export default BCNGlobal
