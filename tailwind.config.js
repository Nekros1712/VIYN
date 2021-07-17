module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#121212',
				secondary: '#333333'
			},
			width: {
				45: '45%',
				85: '85%'
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
