/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				cal: ["Cal Sans", ...fontFamily.serif],
				sans: ["Inter", ...fontFamily.sans],
				mono: ["Roboto Mono", "monospace"],
			},
		},
	},
	plugins: [require("@tailwindcss/typography")],
};
