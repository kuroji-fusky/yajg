/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			inter: ['Inter', ...defaultTheme.fontFamily.sans],
			'open-sans': ['Open Sans', ...defaultTheme.fontFamily.sans]
		},
		extend: {}
	},
	plugins: []
}
