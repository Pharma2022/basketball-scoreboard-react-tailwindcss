/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      light_blue:`#9AABD8`,
      navy_blue: `#1B244A`,
      light_gray:`#eee`,
      pink_red:`#F94F6D`,
      blackish: `#080001`,
    },
    fontSize: {
       'xs': '.75rem',
       'sm': '.875rem',
       'tiny': '.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
       '3xl': '1.875rem',
       '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
       '7xl': '5rem',
       '8xl':`5.7rem`
      },
      fontFamily:{
      verdana : ['Verdana, Geneva, Tahoma', 'sans-serif'],
      cursedTimer:['Cursed Timer ULiL', 'sans-serif']
      },
    extend: {},
  },
  plugins: [],
}

