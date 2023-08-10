/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {

    extend: {
      backgroundImage: {
        'graph-paper': 'repeating-linear-gradient(0deg, transparent, transparent 9px, rgba(228, 228, 231, 1) 10px), repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(228, 228, 231, 1) 10px)',
        'graph-paper-dark': 'repeating-linear-gradient(0deg, transparent, transparent 9px, rgba(30, 41, 59, 1) 10px), repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(30, 41, 59, 1) 10px)',
      },
      
      backgroundSize: {
        'graph-paper': '100px 100px',
      },
      
      fontFamily: {
        body: ['Caprasimo']
      }
      
    },
    variants: {
      extend: {
        backgroundColor: ['dark']
      },
    },
    
  },
  plugins: [],
}

