export default {
  darkMode: false, // completely disable dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20D374',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light"], // Force light theme in DaisyUI
  },
}
