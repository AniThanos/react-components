const { MAIN, SEMANTIC } = require("./src/constants/style/index.js").COLORS;

module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        xs: "1px",
      },
      height: {
        inherit: "inherit",
      },
      width: {
        card: "600px",
        "margined-full-width": "calc(100% - 2rem)",
        "dialog-sm": "416px",
        "dialog-md": "640px",
        "dialog-lg": "864px",
        "dialog-xl": "1248px",
      },
      minWidth: {
        "button-xs": "6.5rem",
        "button-sm": "7.5rem",
        "button-md": "8.375rem",
        "button-lg": "9.25rem",
        "button-xl": "10rem",
      },
      spacing: {
        0.5: "0.125rem",
        1.5: "0.375rem",
        2.5: "0.625rem",
        3.5: "0.875rem",
        4.5: "1.125rem",
        15: "3.75rem",
      },
      colors: {
        primary: MAIN.PRIMARY,
        secondary: MAIN.SECONDARY,
        neutrals: MAIN.NEUTRALS,
        green: SEMANTIC.GREEN,
        red: SEMANTIC.RED,
        blue: SEMANTIC.BLUE,
        amber: SEMANTIC.AMBER,
      },
      ringWidth: {
        3: "3px",
      },
    },
  },
  plugins: [],
};
