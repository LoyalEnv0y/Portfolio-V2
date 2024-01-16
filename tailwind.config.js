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
				"gStart-hover": "#992de6"
			},

			dropShadow: {
				'c-sm': "0 2px 1px rgba(0, 0, 0, 0.25)",
				'c': "0 4px 2px rgba(0, 0, 0, 0.25)",
				'c-lg': "0 6px 4px rgba(0, 0, 0, 0.25)",
				'c-xl': "0 8px 3px rgba(0, 0, 0, 0.25)",
			},

			boxShadow: {
				'c-sm': "0 2px 1px rgba(0, 0, 0, 0.25)",
				'c': "0 4px 2px rgba(0, 0, 0, 0.25)",
				'c-lg': "0 6px 4px rgba(0, 0, 0, 0.25)",
				'c-xl': "0 8px 3px rgba(0, 0, 0, 0.25)",
			}
		},
	},
	plugins: [],
};