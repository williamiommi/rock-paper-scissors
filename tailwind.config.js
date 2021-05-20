module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Barlow Semi Condensed", "sans-serif"],
    },
    colors: {
      grayLight: "#f5f5f5",
      DarkText: "hsl(229, 25%, 31%)",
      ScoreText: "hsl(229, 64%, 46%)",
      HeaderOutline: "hsl(217, 16%, 45%)",
    },
    screens: {
      desktop: "1024px",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
