import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },
    colors: {
      white: "#fefefe",
      terracota: "#de6c5c",
      black: "#000",
      rose: "#ffcbdb",
      cyan: "#00ffff",
      gray: "#475569",
    },
    fontFamily: {
      patrick: ['"Patrick Hand"'],
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
