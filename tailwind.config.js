/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      colors:{
        'custom-brown': '#A79277',
        'custom-dark':'#B0926A',
        'custom-light':'#FFF2E1',
      }
    },
  },
  plugins: [],
}

