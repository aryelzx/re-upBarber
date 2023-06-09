/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'karantina': ['Karantina', 'cursive'],
      'poppins' : ['Poppins', 'sans-serif'],
      'inter': ['Inter', 'sans-serif']
  },

  plugins: [],
}

}