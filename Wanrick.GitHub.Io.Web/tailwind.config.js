/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./Components/*.{razor,html,cshtml}", 
        "./Layout/*.{razor,html,cshtml}", 
        "./Pages/*.{razor,html,cshtml}",
        "./wwwroot/index.html",
    ],
    darkMode: 'selector',
    theme: {
        container: {
            center: true
        },
        extend: {
            backgroundImage: {
                'light-ps-background': 'url("/assets/images/bg-light.svg")',
                'dark-ps-background': 'url("/assets/images/bg-dark.svg")'
            },
            colors: {
                'accent-1': '#FAFAFA',
                'accent-2': '#EAEAEA',
                'accent-7': '#333',
                success: '#0070f3',
                'almost-black': '#00323E',
                cyan: '#0A9396',
                'cyan-light': '#4ecdc3',
                'cyan-dark': '#005F73',
                green: '#6E9755',
                'dark-green': '#4C683B',
                yellow: '#EE9B00',
                'dark-yellow': '#CA6702',
                'custom-red': '#CB2415',
                'dark-red': '#861D21',
                'cyan-chill': {
                    '50': '#f0fdfb',
                    '100': '#cbfcf7',
                    '200': '#97f8f0',
                    '300': '#5bede6',
                    '400': '#29d8d5',
                    '500': '#10bcbc',
                    '600': '#0a9396',
                    '700': '#0d7478',
                    '800': '#0f5d60',
                    '900': '#124c4f',
                    '950': '#032c30'
                }
            },
            spacing: {
                28: '7rem'
            },
            letterSpacing: {
                tighter: '-.04em'
            },
            lineHeight: {
                tight: '1.2'
            },
            fontSize: {
                '5xl': '2.5rem',
                '6xl': '2.75rem',
                '7xl': '4.5rem',
                '8xl': '6.25rem'
            },
            boxShadow: {
                sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
                md: '0 8px 30px rgba(0, 0, 0, 0.12)'
            }
        },
        fontFamily: {
            'display': ['"Space Mono"', 'Consolas', 'monospace'],
            'body': ['"Roboto Serif"', 'serif']
        }
    },
    plugins: []
}