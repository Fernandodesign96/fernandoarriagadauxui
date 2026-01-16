const tools = [
    // Design & Prototyping
    {
        category: 'design',
        name: 'Figma',
        icon: '🎨'
    },
    {
        category: 'design',
        name: 'Sketch',
        icon: '💎'
    },
    {
        category: 'design',
        name: 'Framer',
        icon: '⚡'
    },

    // Project Management
    {
        category: 'pm',
        name: 'Miro',
        icon: '📋'
    },
    {
        category: 'pm',
        name: 'Trello',
        icon: '📊'
    },
    {
        category: 'pm',
        name: 'Jira',
        icon: '✏️'
    },

    // Analytics & Research
    {
        category: 'analytics',
        name: 'Google Analytics',
        icon: '📈'
    },
    {
        category: 'analytics',
        name: 'Hotjar',
        icon: '🔥'
    },
    {
        category: 'analytics',
        name: 'Optimal Workshop',
        icon: '🔧'
    },

    // Development
    {
        category: 'dev',
        name: 'React',
        icon: '⚛️'
    },
    {
        category: 'dev',
        name: 'HTML5',
        icon: '🌐'
    },
    {
        category: 'dev',
        name: 'CSS3',
        icon: '🎨'
    },

    // AI Tools
    {
        category: 'ai',
        name: 'ChatGPT',
        icon: '🤖'
    },
    {
        category: 'ai',
        name: 'Lovable',
        icon: '💙'
    },
]

export const toolCategories = {
    es: {
        design: 'Diseño & Prototipado',
        pm: 'Gestión de Proyectos',
        analytics: 'Analítica & Research',
        dev: 'Desarrollo',
        ai: 'IA & Automatización'
    },
    en: {
        design: 'Design & Prototyping',
        pm: 'Project Management',
        analytics: 'Analytics & Research',
        dev: 'Development',
        ai: 'AI & Automation'
    }
}

export default tools
