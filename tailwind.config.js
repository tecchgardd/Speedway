/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url('/assets/carrotamanhoreal/bg.jpg')",
        "home2": "url('/assets/bg4.jpg')"
    
      },
      
    },
  },
  plugins: [],
}
