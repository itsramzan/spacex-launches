/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  safelist: [
    "rc-pagination-item",
    "rc-pagination-item-active",
    "rc-pagination-prev",
    "rc-pagination-next",
    "rc-pagination-disabled",
    // "rdrDateRangePickerWrapper",
    // "rdrDefinedRangesWrapper",
    // "rdrDateRangeWrapper",
    // "rdrDateDisplayWrapper",
    // "rdrStaticRange",
    // "rdrStaticRangeLabel",
  ],
  plugins: [require("@tailwindcss/line-clamp"), require("daisyui")],
};
