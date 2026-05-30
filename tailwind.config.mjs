/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
			screens: {
				sm: "100%",
				md: "100%",
				lg: "560px",
				xl: "660px"
			},
			padding: '1.5rem',
		},
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
			fontFamily: {
				mono: ['JetBrains Mono', 'Fira Code', 'Cascadia Code', 'ui-monospace', 'SFMono-Regular', 'monospace'],
			},
			colors: {
				// Legacy tokens (kept for shadcn compatibility)
				'light-theme': '#E9EBEC',
				'primary-light': '#3FB950',
				'primary-hover-light': '#56D364',
				'dark-theme': '#0D1117',
				'primary-dark': '#3FB950',
				'primary-hover-dark': '#56D364',
				'text-dark': '#E6EDF3',
				'n900': '#E6EDF3',
				'n700': '#C9D1D9',
				'n500': '#8B949E',

				// CLI Terminal Design Tokens
				'cli-bg': '#0D1117',
				'cli-surface': '#161B22',
				'cli-surface-2': '#1C2128',
				'cli-border': '#30363D',
				'cli-border-muted': '#21262D',
				'cli-green': '#3FB950',
				'cli-green-bright': '#56D364',
				'cli-green-dim': '#1A7F37',
				'cli-amber': '#E3B341',
				'cli-red': '#F85149',
				'cli-yellow': '#D29922',
				'cli-blue': '#79C0FF',
				'cli-text': '#E6EDF3',
				'cli-text-dim': '#8B949E',
				'cli-text-muted': '#6E7681',
			},
    	}
    },
	plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}
