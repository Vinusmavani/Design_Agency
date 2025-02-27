/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#1E1E1E',
        secondary: {
          100: '#FFFFFF',
          200: '#F4F4F4'
        },
        tertiary: '#B8FF64',
      },
      fontFamily: {
        body: ['Poppins']
      }
    },
  },
  plugins: [],
}

