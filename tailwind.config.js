/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pspc-rich-black': '#11202d',
        'pspc-navy': '#003b5c',
        'pspc-cyan': '#00c2f3',
        'pspc-cyan-30': '#c6eafb',
        'pspc-dark-grey-5': '#f1f2f2',
        'pspc-dark-grey': '#4b4e58',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light', 'dark'],
  },
}