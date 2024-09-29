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
    background: {
      light: '#FFFFFF',
      DEFAULT: '#F7FAFC',
      dark: '#1A202C',
    },
    foreground: "var(--foreground)",
    primary: {
      light: '#4FD1C5',
      DEFAULT: '#38B2AC',
      dark: '#319795',
    },
    secondary: {
      light: '#9F7AEA',
      DEFAULT: '#805AD5',
      dark: '#6B46C1',
    },
    text: {
      light: '#4A5568',
      DEFAULT: '#2D3748',
      dark: '#E2E8F0',
    },
   },
   fontFamily: {
    mono: ["var(--font-kode-mono)", "monospace"],
    sans: ["var(--font-kode-mono)", "monospace"], // Fallback to sans if you want Kode Mono as default
   },
  },
 },
 plugins: [daisyui],
 daisyui: {
  themes: ["light", "dark"],
 },
};

// Ensure plugins is an array
if (!config.plugins) {
  config.plugins = [];
}

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

// Type assertion to ensure TypeScript knows plugins is defined
(config.plugins as any[]).push(function ({ addBase, theme }: any) {
 let allColors = flattenColorPalette(theme("colors"));
 let newVars = Object.fromEntries(
  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
 );

 addBase({
  ":root": newVars,
 });
});

export default config;
