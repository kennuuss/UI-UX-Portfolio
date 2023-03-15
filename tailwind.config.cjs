/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{js,jsx}',
		'.src/components/**/*.{html,jsx,js}',
		'./index.html',
	],
	darkMode: 'class',
	plugins: [],
	theme: {
		screens: {
			sm: '500px',
			md: '800px',
			pc: '1200px',
		},
		extend: {
			colors: {
				/* restaurant */
				'dark-brown': '#402923',
				'light-brown': '#6b4e42',
				'lighter-brown': '#9d7e6f',

				/* experienced */
				primary: '#ACBAEC',
				secondary: '#FFFFFF',
				abstract: '#C2D2F6' /* /#BBCDF2 */,

				darkPrimary: '#1B2631',
				darkSecondary: '#FFFFFF',
				darkAbstract: '#2C3E50',

				'gray-text': 'rgb(116,115,110)',
			},
		},
	},
}
