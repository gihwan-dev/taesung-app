/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#072958",
        "modal-backdrop": "rgba(80, 85, 92, 0.50)",
      },
    },
  },
  plugins: [],
};
