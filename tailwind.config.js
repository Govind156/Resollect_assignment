/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue color for primary elements
          hover: '#2563EB',
        },
        sidebar: {
          active: '#3B82F6',
          hover: '#EFF6FF',
        }
      }
    },
  },
  plugins: [],
} 