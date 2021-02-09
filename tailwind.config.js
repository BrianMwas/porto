const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // Removed unused styles after production.
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      default: '.12rem',
      'lg': '.5rem',
      'full': '9999px'
    },
    fontFamily: {
      sans: ['Rubik', ...defaultTheme.fontFamily.sans],
      display: ['Hammersmith One', 'sans-serif'],
      body: ['Rubik']
    },
    extend: {
      spacing: {
        '96': '24rem',
        '128': '32rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
