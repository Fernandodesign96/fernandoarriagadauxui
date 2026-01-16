/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
            },
            colors: {
                // Professional B2B/SaaS Palette
                primary: {
                    50: '#f0f4f8',
                    100: '#d9e2ec',
                    200: '#bcccdc',
                    300: '#9fb3c8',
                    400: '#829ab1',
                    500: '#627d98',
                    600: '#486581',
                    700: '#334e68',
                    800: '#243b53',
                    900: '#102a43',
                },
                neutral: {
                    50: '#f7fafc',
                    100: '#edf2f7',
                    200: '#e2e8f0',
                    300: '#cbd5e0',
                    400: '#a0aec0',
                    500: '#718096',
                    600: '#4a5568',
                    700: '#2d3748',
                    800: '#1a202c',
                    900: '#171923',
                    950: '#0d1117',
                },
                accent: {
                    500: '#3b82f6',
                    600: '#2563eb',
                    700: '#1d4ed8',
                },
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
            },
            maxWidth: {
                '8xl': '88rem',
            },
        },
    },
    plugins: [],
}
