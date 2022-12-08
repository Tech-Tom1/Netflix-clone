/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#333333",
        lightGray: "#8C8C8C"
      },
      backgroundImage: {
        'home-background': "url('img/netflix-bg-image.jpg')",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        netflix: ['NetflixSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
