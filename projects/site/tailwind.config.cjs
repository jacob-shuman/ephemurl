/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // tinge: "#E6E6E6",
        // bauhaus: "#404040",
        // grey: "#808080",

        bg: "var(--theme-bg)",
        text: "var(--theme-text)",
        secondary: "var(--theme-secondary)",
        accent: "var(--theme-accent)",
        focus: "var(--theme-focus)",

        "bg-dark": "var(--theme-bg-dark)",
        "text-dark": "var(--theme-text-dark)",
        "secondary-dark": "var(--theme-secondary-dark)",
        "accent-dark": "var(--theme-accent-dark)",
        "focus-dark": "var(--theme-focus-dark)",

        new: {
          primary: {
            100: "var(--theme-primary-100)",
            200: "var(--theme-primary-200)",
            300: "var(--theme-primary-300)",
            400: "var(--theme-primary-400)",
            500: "var(--theme-primary-500)",
            600: "var(--theme-primary-600)",
            700: "var(--theme-primary-700)",
            800: "var(--theme-primary-800)",
            900: "var(--theme-primary-900)",
          },
          neutral: {
            100: "var(--theme-neutral-100)",
            200: "var(--theme-neutral-200)",
            300: "var(--theme-neutral-300)",
            400: "var(--theme-neutral-400)",
            500: "var(--theme-neutral-500)",
            600: "var(--theme-neutral-600)",
            700: "var(--theme-neutral-700)",
            800: "var(--theme-neutral-800)",
            900: "var(--theme-neutral-900)",
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
