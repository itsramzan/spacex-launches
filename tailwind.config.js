/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    "rdrDateRangePickerWrapper",
    "rdrDefinedRangesWrapper",
    "rdrDateRangeWrapper",
    "rdrDateDisplayWrapper",
    "rdrStaticRange",
    "rdrDateDisplayItem",
    "rdrInputRangeInput",
  ],
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
