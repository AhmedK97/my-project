/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    // html, vue
    "./src/**/*.html",
    "./src/**/*.vue",
    // js, ts
    "./src/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "brand-gray-1": "#dadce0",
        "brand-gray-2": "#f8f9fa",
        "brand-gray-3": "#80868b",
        "brand-blue-1": "#1967d2",
        "brand-blue-2": "#4285f4",
        "brand-green-1": "#137333",
      },

      boxShadow: {
        blue: "0 0 0 3px rgba(25,103,210,0.3)",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"], // margin first child
    },
  },
  plugins: [],
};
