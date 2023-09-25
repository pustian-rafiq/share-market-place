/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#405138",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
