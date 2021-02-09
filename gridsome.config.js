
const tailwindcss = require('tailwindcss');

module.exports = {
  siteName: 'BrianDev',
  plugins: [],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ],
      },
    },
  }
}
