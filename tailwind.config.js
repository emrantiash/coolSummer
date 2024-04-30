/** @type {import('tailwindcss').Config} */
import { fontFamily as _fontFamily } from "tailwindcss/defaultTheme";
import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 1000,
      },
      colors: {
        gray102: "#606473",
        midgray102: "#BBBEC8",
        lightgray102: "#F4F5F8",
        fontgray102: "#949A97",
        logocyan: "#37B5A7",
        suiteblue: "#1199ED",
        suitefontblack: "#464A4D",
        suiteorange: "#ED4F30",
        suitegreen: "#37B5A7",
      },

      utilities: {
        // Add your custom color utility classes here
        ".text-suiteblue": {
          color: "var(--color-suiteblue)",
        },

        ".bg-suiteblue": {
          backgroundColor: "var(--color-suiteblue)",
        },
      },
    },
  },
  plugins: [],
});
