/** @type {import("tailwindcss/plugin").TailwindPluginCreator} */
const plugin = require("tailwindcss/plugin");

const matIconSizesPlugin = plugin(({ addBase, matchUtilities, theme }) => {
  const spacing = theme("spacing");

  addBase({
    ".mat-overrides .mat-icon": {
      width: "var(--mat-icon-size, unset)",
      height: "var(--mat-icon-size, unset)",
    },
  });

  matchUtilities(
    {
      "mat-icon": value => ({
        "--mat-icon-size": value,
        fontSize: value,
        lineHeight: 1,
      }),
    },
    {
      values: spacing,
    }
  );
});

module.exports = matIconSizesPlugin;
