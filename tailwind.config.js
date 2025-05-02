/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // অথবা 'media' (যদি আপনি চান যে ব্রাউজারের ডার্ক মোডের সেটিং অনুসারে কাজ করুক)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#20D374',
        secondary: '#FF6347', // দ্বিতীয় রঙ আপনি এখানেও দিতে পারেন
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light", "dark"],  // লাইট এবং ডার্ক থিম উভয়ই অন্তর্ভুক্ত করা হয়েছে
  },
}
