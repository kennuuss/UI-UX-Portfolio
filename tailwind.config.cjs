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
				restaurant__bg: '#402923' /* darker than primary */,
				restaurant__text: '#ffffff',
				restaurant__lessImportantText: 'rgb(235,235,235)',
				restaurant__primary: '#6b4e42',
				restaurant__secondary: '#876354' /* lighter than primary */,

				restaurant__darkBg: '#291A16' /* darker than primary  */,
				restaurant__darkPrimary: '#402923',
				restaurant__darkSecondary: '#6b4e42' /* lighter than primary */,
				/* Restaurant */

				/* Portfolio */
				primary: '#ACBAEC',
				secondary: '#FFFFFF',
				abstract: '#C2D2F6' /* /#BBCDF2 */,

				darkPrimary: '#1B2631',
				darkSecondary: '#FFFFFF',
				darkAbstract: '#2C3E50',
				/* Portfolio */
			},
		},
	},
}
