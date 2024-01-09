/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#072958",
        "modal-backdrop": "rgba(80, 85, 92, 0.50)",
        "card-bg-1": "rgba(38, 142, 73, 0.80)",
        "card-bg-2": "#268E49",
        "card-bg-3": "#156F2E",
        "card-bg-4": "#607DB5",
        "card-bg-5": "#3454A4",
        "card-bg-error": "rgba(202, 63, 55, 0.90)",
        "dialog-bg": "rgba(68, 101, 140, 1)",
        "card-alert-bg": "rgba(115, 139, 168, 0.7)",
        "card-alert-circle": "rgba(61, 79, 106, 0.7)",
        "chart-active": "#072958",
        "chart-inactive": "#D9D9D9",
      },
    },
  },
  plugins: [],
};
