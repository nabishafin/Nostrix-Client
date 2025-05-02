/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false, // Tailwind dark mode off
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
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // Only allow light
    darkTheme: false,  // ✅ Disable dark mode behavior
  },
}
