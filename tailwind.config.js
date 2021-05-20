module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Barlow Semi Condensed", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: '#ffffff',
      grayLight: "#f5f5f5",
      DarkText: "hsl(229, 25%, 31%)",
      ScoreText: "hsl(229, 64%, 46%)",
      HeaderOutline: "hsl(217, 16%, 45%)",
      rock: {
        light: '#DF405B',
        dark: '#911B39',
      },
      paper: {
        light: '#5572F4',
        dark: '#2F4496',
      },
      scissors: {
        light: '#ECA726',
        dark: '#BA6F2B',
      },
      lizard: {
        light: '#8D5DE5',
        dark: '#6438B1',
      },
      spock: {
        light: '#51BDD0',
        dark: '#47809B',
      },
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
