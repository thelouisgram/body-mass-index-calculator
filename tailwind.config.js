/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
        Inter : [ 'Inter', "sans-serif"]
      },
      colors: {
        blue : 'hsl(215,31%,21%)',
        skyBlue: 'hsl(227,96%,63%)',
        white: 'hsl(0,0%,100%)',
        grey: 'hsl(206, 21%, 45%)',
        lightBlue: 'hsl(194,47%,90%)'
      },
       screens: {
			xs: '375px',
			ss: '620px',
			sm: '768px',
			md: '1200px',
			lg: '1300px',
			xl: '1700px'
		},
    },
  },
  plugins: [],
}