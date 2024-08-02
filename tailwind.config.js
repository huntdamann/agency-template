/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./**/*.{html,js}', './src/**/*.{html,js}'],
    theme: {
        screens: {
            'mobile': '375px',

            'mobile-2': '414px',
            'samsung': '412px',
            'small': '320px'
        },
        extend: {
            animation: {
                open: 'open .5s ease-in',
                close: 'close .5s ease-in',
            },
            keyframes: {
                open: {

                    '0%': { opacity: '0', transform: 'translateX(-300px)' },
                    '100%': { opacity: '1', transform: 'translateX(0px)' }
                },
                close: {

                    '0%': { opacity: '1', transform: 'translateX(0px)' },
                    '100%': { opacity: '0', transform: 'translateX(-300px)' }
                },
            },
            fontFamily: {

                'main': ['Roboto', 'sans-serif']
            },
            colors: {
                'logo-red': '#D72323',
                'bg-purple': '#473191',
                'bg-pink': '#9D288E',
            },
            backgroundImage: {
                'star-icon': "url(./src/img/brand.png)",
                'wall-paper': "url('./src/img/brand.png')",
            },
        },
    },
    plugins: [],
};
