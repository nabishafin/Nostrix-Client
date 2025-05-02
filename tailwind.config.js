// tailwind.config.js
export default {
  darkMode: false, // disable Tailwind dark classes
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20D374',
        secondary: '#FACC15',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#20D374",
          secondary: "#FACC15",
          accent: "#37CDBE",
          neutral: "#3D4451",
          "base-100": "#FFFFFF", // Background color
          info: "#3ABFF8",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
    darkTheme: false,
  },
}
