/** @type {import('tailwindcss').Config} */
export default {
  content: [  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      'font-image': "url('/images/photo-front,jpg')"
    },
  },
  plugins: [],
}

