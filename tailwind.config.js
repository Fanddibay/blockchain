/** @type {import('tailwindcss').Config} */
export const darkMode = ['selector', '[class*="app-dark"]'];
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'];
export const plugins = [require('tailwindcss-primeui')];
export const theme = {
    screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1920px'
    },
    extend: {
        colors: {
            'Blue-Primary': '#046378',
            'text-primary': '#191D23',
            'text-secondary': '#64748B',
            'text-teritary': '#4B5768'
        }
    },
    important: '#app'
};
