/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				vesterbro: ['vesterbro', 'serif'],
				lato: ['lato', 'sans-serif']
			},
			colors: {
				demo: {
					50: 'hsl(207.56, 45%, 90%)',
					100: 'hsl(207.56, 53%, 50%)',
					300: 'hsl(207.56, 57%, 37%)',
					400: 'hsl(207.56, 100%, 26.47%)'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
