module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8f9fa",
          300: "#e0e0e0",
          700: "#666666",
          "50_01": "#fafcff",
          "50_02": "#fcfcfc",
          "50_03": "#f9fbff",
        },
        blue_gray: {
          50: "#eaecf0",
          100: "#d6dae2",
          200: "#bac1ce",
          400: "#74839d",
          700: "#424c5d",
          900: "#262b35",
        },
        black: { 900: "#000000" },
        white: { A700: "#ffffff" },
        blue: { 200: "#a6c8ff", A700_01: "#0a58ff", A700: "#0061ff" },
        colors2: "#0061ffff",
        red: { 700: "#d03329" },
        colors: "#74839dff",
        colors1: "#666666ff",
      },
      fontFamily: { gilroy: "Gilroy", opensans: "Open Sans" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
