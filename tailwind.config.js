/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {

    extend: {
      backgroundImage: {
        'graph-paper': 'repeating-linear-gradient(0deg, transparent, transparent 9px, rgba(228, 228, 231, 1) 10px), repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(228, 228, 231, 1) 10px)',
        'graph-paper-dark': 'repeating-linear-gradient(0deg, transparent, transparent 9px, rgba(39,38,43,255) 10px), repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(39,38,43,255) 10px)',
      },
      
      backgroundSize: {
        'graph-paper': '100px 100px',
      },
      
      fontFamily: {
        body: ['Caprasimo'],
      },
      colors: {
        'svg-fill-light': '#E0F2FE',
        'svg-fill-dark': '#1a202c',
        'regal-blue': '#243c5a',
        'true-gray-800': '#18171c',
        'true-gray-700': '#27262b',
        

      },
      
    },
    variants: {
      extend: {
        backgroundColor: ['dark']
      },
    },
    
  },
  plugins: [],
}

