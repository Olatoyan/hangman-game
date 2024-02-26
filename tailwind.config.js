/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        memoirs: ["Mouse Memoirs", "sans-serif"],
      },
      boxShadow: {
        "purple-sh":
          "0px 1px 0px 6px #3C74FF inset, 0px -2px 0px 3px #140E66 inset",
        "pink-sh":
          "0px -12px 0px 11px #9D2DF5 inset, 0px -4px 0px 5px #243041 inset",
        "menu-sh":
          "0px 6px 0px 8px #2463FF inset, 0px -8px 0px 4px #140E66 inset",
      },

      backgroundImage: {
        "desktop-bg": "url(../background-desktop.svg)",
        "tablet-bg": "url(../background-tablet.svg)",
        "mobile-bg": "url(../background-mobile.svg)",
        "blue-gradient":
          "linear-gradient(0deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.25) 100%), #2463FF",
      },
      screens: {
        desktop: { max: "75em" },
        laptop: { max: "64em" },
        tablet: { max: "48em" },
        mobile: { max: "37.5em" },
      },
    },
  },
  plugins: [],
};
