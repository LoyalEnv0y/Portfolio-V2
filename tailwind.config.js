/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				"aldrich": ["Aldrich", "sans-serif"],
				"poppins": ["Poppins", "sans-serif"]
			},

			colors: {
				"primary": "#EFEFEF",
				"secondary": "#000000",
				"gStart": "#A02FF2",
				"gEnd": "#D32CE6",
				"primary-hover": "#E5E5E5",
				"gStart-hover": "#8e44c3"
			}
		},
	},
	plugins: [],
};