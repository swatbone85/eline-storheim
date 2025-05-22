/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
				serif: ['Playfair Display', 'Georgia', 'serif']
			},
			colors: {
				// Custom color palette if needed
			},
			typography: {
				DEFAULT: {
					css: {
						h1: {
							fontFamily: 'Playfair Display, serif'
						},
						h2: {
							fontFamily: 'Playfair Display, serif'
						},
						h3: {
							fontFamily: 'Playfair Display, serif'
						},
						h4: {
							fontFamily: 'Playfair Display, serif'
						}
					}
				}
			}
		}
	},
	plugins: [import('@tailwindcss/typography')]
};
