/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{js,jsx}',
		'.src/components/**/*.{html,jsx,js}',
		'./index.html',
	],
	plugins: [],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			aboutMe: '604px',
		},
		fontSize: {
			heading: [
				'56px',
				{
					fontWeight: '700',
				},
			],
		},
	},
}
