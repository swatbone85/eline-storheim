// tailwind.config.js  (ES-modules)

import typography from '@tailwindcss/typography';   // ← sync import

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        // Google’s CSS declares it as “Source Sans Pro”
        sans:  ['"Source Sans Pro"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            h1: { fontFamily: '"Playfair Display", serif' },
            h2: { fontFamily: '"Playfair Display", serif' },
            h3: { fontFamily: '"Playfair Display", serif' },
            h4: { fontFamily: '"Playfair Display", serif' },
          },
        },
      },
    },
  },
  plugins: [typography],   // ← pass the plugin object, not a promise
  darkMode: 'class',
};
