/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "nav": "80px",
        "footer": "40px"
      },
    },
  },
  plugins: [],
};
