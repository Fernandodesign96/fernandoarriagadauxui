import fs from 'fs';
const path = 'c:/Users/Fernando/Desktop/fernandoarriagadauxui/src/data/projects.js';
let content = fs.readFileSync(path, 'utf8');

const findiesEnStart = content.indexOf('slug: \'findies\'', content.indexOf('en: ['));
const sectionsStart = content.indexOf('sections: {', findiesEnStart);
// We want to find the real end of the findies object.
// It should be followed by { id: 7,
const nextProjectId7 = content.indexOf('id: 7,', findiesEnStart);
const projectEnd = content.lastIndexOf('}', nextProjectId7);

const cleanSections = `sections: {
                overview: {
                    title: 'Project Overview',
                    items: [
                        { label: "Project", val: "Findies", icon: "🎵" },
                        { label: "Type", val: "Mobile App UX/UI", icon: "📱" },
                        { label: "Domain", val: "Music / Entertainment", icon: "🎸" },
                        { label: "Year", val: "2023–2024", icon: "📅" },
                        { label: "Role", val: "UX Researcher & UI Designer", icon: "👤" },
                        { label: "Context", val: "UX Bootcamp Project", icon: "🎓" }
                    ]
                },
                challenge: {
                    title: 'Context & Challenge',
                    problem: 'Difficulty discovering independent artists and low visibility for small events.',
                    details: 'Fragmented experiences across platforms and lack of direct connection between artists and audience.'
                },
                solution: {
                    title: 'The Solution',
                    items: [
                        { title: 'Discovery', desc: 'Visual Recommendation Systems.' },
                        { title: 'Connection', desc: 'Interactive Artist Profiles.' },
                        { title: 'Social', desc: 'Tracking system and direct connection.' }
                    ]
                },
                process: {
                    title: 'UX Design Process',
                    steps: [
                        { title: 'Research', insight: 'Identification of pain points in discovery.', decision: 'Focus on visual algorithms.' },
                        { title: 'Analysis', insight: 'Archetype definition and user journeys.', decision: 'Priority on local discovery.' },
                        { title: 'Design', insight: 'IA structure and low-fidelity wireframes.', decision: 'Visual-first navigation.' },
                        { title: 'Prototyping', insight: 'High-fidelity with real interactions.', decision: 'Social micro-interactions.' },
                        { title: 'Testing', insight: 'Validation with real users and artists.', decision: 'Refinement of booking flows.' },
                        { title: 'Refinement', insight: 'Iterations based on qualitative feedback.', decision: 'Consolidation of vibrant identity.' }
                    ]
                },
                kpis: {
                    title: 'Key Performance Indicators',
                    chartTitle: 'Improvements Achieved',
                    items: [
                        { label: "Engagement", val: 70 },
                        { label: "Discoveries", val: 80 },
                        { label: "Connections", val: 65 },
                        { label: "Retention", val: 75 }
                    ]
                },
                results: {
                    title: 'Results & Impact',
                    items: [
                        "70% Session Engagement",
                        "80% Increase in discovery",
                        "65% More artist-listener connections",
                        "75% Initial retention",
                        "Successful concept validation"
                    ]
                },
                evolution: {
                    title: 'Project Evolution: Findies',
                    details: 'Move from pure music discovery towards a complete live event and local experience with integrated booking.',
                    visuals: 'Use of energetic photography and vibrant gradients for an emotional UX.'
                },
                experience: {
                    title: 'Visual Design & Experience',
                    items: [
                        { title: 'Energy', desc: 'Vibrant visual language and photography.' },
                        { title: 'Visual-First', desc: 'Gesture-based navigation.' },
                        { title: 'Native', desc: 'Mobile UI (iOS/Android).' }
                    ]
                },
                prototype: {
                    title: 'Final Validated Prototype (Figma)',
                    note: 'Discovery, artist detail, and in-app booking flows validated.',
                    qualities: [
                        { label: 'VISUAL CLARITY', val: 'Minimalist' },
                        { label: 'ACCESSIBILITY', val: 'WCAG 2.1 AA' },
                        { label: 'FOCUS', val: 'Mobile First' },
                        { label: 'NAVIGATION', val: 'Intuitive' }
                    ]
                },
                conclusions: {
                    title: 'Strategic Learnings',
                    items: [
                        { title: "Balance", text: "Crucial balance between emotion and usability." },
                        { title: "Engagement Engine", text: "Discovery as the main driver of retention." },
                        { title: "Friction", text: "Critical reduction of friction in booking." },
                        { title: "Visual UX", text: "Visual design as function, not just aesthetics." }
                    ]
                }
            }`;

const newContent = content.substring(0, sectionsStart) + cleanSections + content.substring(projectEnd);
fs.writeFileSync(path, newContent);
console.log('Repair successful');
