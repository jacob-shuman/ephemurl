/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        DEFAULT: "var(--theme-border-radius)",
      },
      colors: {
        fg: {
          100: "var(--theme-fg-100)",
          200: "var(--theme-fg-200)",
          300: "var(--theme-fg-300)",
          400: "var(--theme-fg-400)",
          500: "var(--theme-fg-500)",
          dark: {
            100: "var(--theme-fg-dark-100)",
            200: "var(--theme-fg-dark-200)",
            300: "var(--theme-fg-dark-300)",
            400: "var(--theme-fg-dark-400)",
            500: "var(--theme-fg-dark-500)",
          },
        },
        bg: {
          100: "var(--theme-bg-100)",
          200: "var(--theme-bg-200)",
          300: "var(--theme-bg-300)",
          400: "var(--theme-bg-400)",
          500: "var(--theme-bg-500)",
          dark: {
            100: "var(--theme-bg-dark-100)",
            200: "var(--theme-bg-dark-200)",
            300: "var(--theme-bg-dark-300)",
            400: "var(--theme-bg-dark-400)",
            500: "var(--theme-bg-dark-500)",
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
