/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
    theme: {
        borderRadius: {
            none: '0',
            sm: '10px',
            md: '20px',
            lg: '50px',
            xl: '100px',
            xxl: '100%'
        },
        gap: {
            none: '0',
            sm: '10px',
            DEFAULT: '20px',
            lg: '50px',
            xl: '100px',
            xxl: '200px'
        },
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1200px',
                xxl: '1440px'
            },
            colors: {
                brand: '#233D4D',
                primary: '#5789C7',
                confirm: '#259F5E',
                cancel: '#B60E16',
                warning: 'FDCF4E',
                error: '#B60E16',
                success: '#D28494',
            }
        },
    },
    plugins: [
        require("tailwindcss-animate")
    ],
}

