/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3ac5ff",
      },
      gridTemplateColumns: {
        "default-layout": "20% auto",
        "mobile-layout": "auto",
        "auth-layout": "70% 30%",
      },
      gridTemplateRows: {
        "default-layout": "100px auto",
      },
    },
  },
  plugins: [],
};
