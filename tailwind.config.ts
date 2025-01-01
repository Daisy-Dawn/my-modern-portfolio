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
            //     lightPurple: '#6e1f86',
            //     purple: '#491358',
            //     darkPurple: '#220b39',
            // },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                darkGrey: '#443349',
                lightPurple: '#8D77A8',
                lightBg: '#C4ADDD',
            },
        },
    },
    plugins: [],
} satisfies Config
