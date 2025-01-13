import type { Config } from 'tailwindcss'

export default {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // colors: {
            //     background: 'var(--background)',
            //     foreground: 'var(--foreground)',
            //     darkGrey: '#44334A',
            //     lightPurple: '#8D77A8',
            //     lightBg: '#C4ADDD',
            // },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                // darkGreen: '#43722d',
                // darkGreen: '#4f8736',
                darkGreen: '#477f2d',
                lemonGreen: '#86c232',
                // darkGrey: '#474B4F',
                darkGrey: '#393c3f',
                lightGrey: '#6B6E70',
            },
            fontFamily: {
                playwrite: ['Playwrite IS', 'serif'],
                bonheur: ['Bonheur Royale', 'serif'],
                alex_brush: ['Alex Brush', 'serif'],
                roboto: ['Roboto', 'serif'],
                open_sans: ['Open Sans', 'serif'],
            },
        },
    },
    plugins: [],
} satisfies Config
