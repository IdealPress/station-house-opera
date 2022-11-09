const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./styles/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./slices/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gineto Regular", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.white"),
            fontSize: "1rem",
            h1: {
              color: theme("colors.white"),
              fontWeight: "normal",
              fontSize: "1.3em !important",
              margin: "2.5rem 0rem 1.5rem !important",
            },
            h6: {
              color: theme("colors.white"),
              fontSize: "0.9rem",
              margin: "0.5rem 0rem -0.5rem !important",
            },
          },
        },
        lg: {
          css: {
            color: theme("colors.white"),
            fontSize: "1.4rem",
            h1: {
              color: theme("colors.white"),
              fontWeight: "normal",
              fontSize: "1.3em !important",
              margin: "2.5rem 0rem 1.5rem !important",
            },
            h6: {
              color: theme("colors.white"),
              fontSize: "1rem",
              margin: "0.5rem 0rem -1.25rem !important",
            },
          }
        }
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
