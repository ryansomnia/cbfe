/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f4f2',
          100: '#cce9e5',
          200: '#99d3cb',
          300: '#66bfb2',
          400: '#33a998',
          500: '#028174', // ⭐ CORE
          600: '#026b61',
          700: '#02564e',
          800: '#01403a',
          900: '#012b27',
        },
        primaryDark: '#04757B',
        primaryLight: '#92DE8B',
        leaf: '#0AB68B',
        softYellow: '#FFE3B3',
        softWhite: '#EDF6F3',
        textGreen: '#749F82',
      }
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tw-elements/dist/plugin')
  ],
}