import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
 content: [
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
 ],
 theme: {
  extend: {
   colors: {
    background: "var(--background)",
    foreground: "var(--foreground)",
   },
  },
 },
 plugins: [daisyui],
 daisyui: {
  themes: ["light", "dark"],
 },
};

const {
 default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

config.plugins.push(function ({ addBase, theme }: any) {
 let allColors = flattenColorPalette(theme("colors"));
 let newVars = Object.fromEntries(
  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
 );

 addBase({
  ":root": newVars,
 });
});

export default config;
