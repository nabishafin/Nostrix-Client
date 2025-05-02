/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20D374',
        secondary: '',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}