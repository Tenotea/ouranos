/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			sans: ['Prompt', 'sans-serif'],
			serif: ['Roboto Serif', 'serif'],
		},
		extend: {
			colors: {
				app: {
					'dark-green': '#002147'
				}
			}
		},
	},
	plugins: [],
}
