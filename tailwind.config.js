/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', './src/**/*.{html,js}'],
  theme: {
    screens: {
      mobile: '375px',

      'mobile-2': '414px',
      samsung: '412px',
    },
    extend: {
      colors: {
        'logo-red': '#D72323',
      },
      backgroundImage: {
        'star-icon': "url('https://img.icons8.com/?size=100&id=qdQpy48X3Rjv&format=png&color=000000')",
      },
    },
  },
  plugins: [],
};
