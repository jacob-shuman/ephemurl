/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        tinge: "#E6E6E6",
        bauhaus: "#404040",
        grey: "#808080",

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
      },
      fontFamily: {
        rubik: ["Rubik"],
        "rubik-mono": ["Rubik Mono One"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
