/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      //colors, fonts, spacing 
      fontFamily: {
        body: ['Raleway', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        },
      keyframes: {
          bounceTwice: {
            '0%, 20%, 40%, 60%, 80%, 100%': { transform: 'translateY(0)' },
            '10%, 30%, 50%, 70%, 90%': { transform: 'translateY(-10px)' },
          },
        },
        animation: {
          bounceTwice: 'bounceTwice s ease-in-out',
        },
        colors: {
        rosequartz: '#9e8fb2', 
        lavendar: '#DBD4E6',
        melon: '#FFA69E',
        rosetaupe: '#885A5A',
        lightrosetaupe: '#D0ABAB',
        cambridgeblue: '#92AA83',
        mintcream: '#C2D5B9',
        indigodye: '#254E70',
        },
  },
  plugins: [],
 }
}
