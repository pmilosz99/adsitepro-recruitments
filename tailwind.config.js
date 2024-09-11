/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-400': '#0147ff',
        'blue-300': '#2764ff',
        'blue-200': '#497dff',
        'blue-100': '#eaf0ff',
        'blue-50': '#f3f6ff',
        'footer': '#282828',
      }
    },
  },
  plugins: [],
}

