const tools = [
    // 1. STRATEGY & RESEARCH (The "Why")
    {
        category: 'strategy',
        name: 'Google Analytics',
        icon: '📈',
        role: 'Data / KPI',
        isCore: true
    },
    {
        category: 'strategy',
        name: 'Hotjar',
        icon: '🔥',
        role: 'Heatmaps',
        isCore: true
    },
    {
        category: 'strategy',
        name: 'Optimal Workshop',
        icon: '🔧',
        role: 'Card Sorting',
        isCore: false
    },
    {
        category: 'strategy',
        name: 'Looker Studio',
        icon: '📊',
        role: 'Reporting',
        isCore: false
    },

    // 2. DESIGN & PROTOTYPING (The "How")
    {
        category: 'design',
        name: 'Figma',
        icon: '🎨',
        role: 'UI / UX / Prototyping',
        isCore: true
    },
    {
        category: 'design',
        name: 'Adobe Creative Cloud',
        icon: '✨',
        role: 'Graphic / Motion',
        isCore: false
    },
    {
        category: 'design',
        name: 'Framer',
        icon: '⚡',
        role: 'High-Fi / Sites',
        isCore: true
    },
    {
        category: 'design',
        name: 'Maze',
        icon: '🧪',
        role: 'Testing',
        isCore: false
    },

    // 3. DEVELOPMENT (The "Build")
    {
        category: 'dev',
        name: 'React.js',
        icon: '⚛️',
        role: 'Frontend',
        isCore: true
    },
    {
        category: 'dev',
        name: 'Tailwind CSS',
        icon: '🌊',
        role: 'Styling',
        isCore: true
    },
    {
        category: 'dev',
        name: 'GitHub',
        icon: '🐙',
        role: 'Version Control',
        isCore: true
    },
    {
        category: 'dev',
        name: 'VS Code',
        icon: '💻',
        role: 'IDE',
        isCore: false
    },

    // 4. PRODUCTIVITY & AI (The "Boost")
    {
        category: 'ai',
        name: 'ChatGPT / Claude',
        icon: '🤖',
        role: 'AI Assistant',
        isCore: true
    },
    {
        category: 'ai',
        name: 'Notion',
        icon: '📝',
        role: 'Documentation',
        isCore: true
    },
    {
        category: 'ai',
        name: 'Lovable',
        icon: '💙',
        role: 'AI Coding',
        isCore: false
    },
    {
        category: 'ai',
        name: 'Jira',
        icon: '🎫',
        role: 'Agile',
        isCore: false
    }
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
