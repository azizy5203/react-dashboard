/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        "default-layout": "15% auto",
      },
      gridTemplateRows: {
        "default-layout": "7% auto",
      },
    },
  },
  plugins: [],
};
