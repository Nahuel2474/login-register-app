/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
	mode: "jit",
	theme: {
		gridTemplateColumns: {
			"fill-40": "repeat(auto-fill, 20rem)",
		},
		extend: {},
	},
	plugins: [require("tailwindcss-animated")],
};
