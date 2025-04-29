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
        primary: '#20D374', // Custom primary color
        secondary: '', // Custom secondary color
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

