module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { lg: { max: "1440px" }, md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { a700: "var(--white_a700)", a700_7f: "var(--white_a700_7f)", a700_4c: "var(--white_a700_4c)" },
        gray: {
          500: "var(--gray_500)",
          900: "var(--gray_900)",
          "900_01": "var(--gray_900_01)",
          "900_02": "var(--gray_900_02)",
        },
        "blue_gray": { 900: "var(--blue_gray_900)" },
        black: { 900: "var(--black_900)", "900_01": "var(--black_900_01)" },
        amber: { 400: "var(--amber_400)" },
      },
      boxShadow: {},
      fontFamily: { poppins: "Poppins", inter: "Inter", kenia: "Kenia" },
      backgroundImage: {
        gradient: "linear-gradient(90deg, #ffffff4c,#ffffff4c,#ffffff4c,#ffffff4c)",
        gradient1: "linear-gradient(135deg, #000000,#1d1d1d, #000000)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}