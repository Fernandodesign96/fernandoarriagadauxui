const tools = [
    // STRATEGY & RESEARCH
    { category: 'strategy', name: 'Google Analytics', level: 'advanced' },
    { category: 'strategy', name: 'Hotjar', level: 'advanced' },
    { category: 'strategy', name: 'Optimal Workshop', level: 'advanced' },
    { category: 'strategy', name: 'Lyssna / UXtweak', level: 'advanced' },

    // DESIGN & PROTOTYPING
    { category: 'design', name: 'Figma', level: 'master' },
    { category: 'design', name: 'Adobe Creative Cloud', level: 'advanced' },
    { category: 'design', name: 'Framer', level: 'advanced' },
    { category: 'design', name: 'Maze', level: 'advanced' },

    // DEVELOPMENT & IMPLEMENTATION
    { category: 'dev', name: 'React.js', level: 'intermediate' },
    { category: 'dev', name: 'Tailwind CSS', level: 'intermediate' },
    { category: 'dev', name: 'GitHub', level: 'intermediate' },
    { category: 'dev', name: 'VS Code / Antigravity', level: 'advanced' },

    // PRODUCTIVITY & AI
    { category: 'ai', name: 'OpenAI / Gemini / Copilot', level: 'advanced' },
    { category: 'ai', name: 'Notion', level: 'advanced' },
    { category: 'ai', name: 'Lovable', level: 'advanced' },
    { category: 'ai', name: 'Jira', level: 'advanced' }
]

export const toolCategories = {
    es: {
        strategy: 'Estrategia & Research',
        design: 'Diseño & Prototipado',
        dev: 'Desarrollo & Implementación',
        ai: 'Productividad & IA'
    },
    en: {
        strategy: 'Strategy & Research',
        design: 'Design & Prototyping',
        dev: 'Development & Implementation',
        ai: 'Productivity & AI'
    }
}

export default tools
