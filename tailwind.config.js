/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ["./**/*.{html,js}"],
  theme: {
    extend: {
		fontFamily: {
			futura: ['"FuturaPt"', "sans-serif"],
			sans: ["FuturaPt"],
		},
		colors: {
			'black': '#1C1C1E',
			'black-light': '#333333',
			'black-light2': '#37474F',
			'black-light3': '#777777',
			'blue': '#007AFF', // d5
			'blue2': '#037AFB', //
			'blue-light': '#E3ECF8',
			'blue-light2': '#DDE9F5', //
			'blue-light3': '#AEC8E4',
			'blue-light4': '#DAE8F7',
			'blue-light5': '#F3F6FA',
			'gray-light': '#F7F8F8',
			'gray': '#D0D4D8', // arrows bg
			'gray2': '#777777', // font
			'gray3': '#DDE9F5', // lab bg
			'gray4': '#EFEFF3', // lab bg
			'gray5': '#3C3E3F',
			'gray6': '#ECECEC',
			'green': '#C9F87D', // hightlight
			'green2': '#AEFF91',
			'orange': '#FF9F0A',
			'orange2': '#F98A07',
		},
	},
  },
  plugins: [],
}

