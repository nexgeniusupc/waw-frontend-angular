const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        ceil: "#90adc6",
        space: "#434d59",
        pewter: "#e9eaec",
        sunglow: "#fad02c",
        sunny: "#edef7c",
      },
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("./src/plugins/tailwind/mat-icon-sizes")],
};
