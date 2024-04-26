/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "var(--theme-radius)",
      },
      colors: {
        fg: {
          100: "hsl(var(--theme-fg-100) / <alpha-value>)",
          200: "hsl(var(--theme-fg-200) / <alpha-value>)",
          300: "hsl(var(--theme-fg-300) / <alpha-value>)",
          400: "hsl(var(--theme-fg-400) / <alpha-value>)",
          500: "hsl(var(--theme-fg-500) / <alpha-value>)",
          dark: {
            100: "hsl(var(--theme-fg-dark-100) / <alpha-value>)",
            200: "hsl(var(--theme-fg-dark-200) / <alpha-value>)",
            300: "hsl(var(--theme-fg-dark-300) / <alpha-value>)",
            400: "hsl(var(--theme-fg-dark-400) / <alpha-value>)",
            500: "hsl(var(--theme-fg-dark-500) / <alpha-value>)",
          },
        },
        bg: {
          100: "hsl(var(--theme-bg-100) / <alpha-value>)",
          200: "hsl(var(--theme-bg-200) / <alpha-value>)",
          300: "hsl(var(--theme-bg-300) / <alpha-value>)",
          400: "hsl(var(--theme-bg-400) / <alpha-value>)",
          500: "hsl(var(--theme-bg-500) / <alpha-value>)",
          dark: {
            100: "hsl(var(--theme-bg-dark-100) / <alpha-value>)",
            200: "hsl(var(--theme-bg-dark-200) / <alpha-value>)",
            300: "hsl(var(--theme-bg-dark-300) / <alpha-value>)",
            400: "hsl(var(--theme-bg-dark-400) / <alpha-value>)",
            500: "hsl(var(--theme-bg-dark-500) / <alpha-value>)",
          },
        },
      },
      fontFamily: {
        rubik: ["Rubik"],
        "rubik-mono": ["Rubik Mono One"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
