/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  presets: [require("../../tailwind.preset.cjs")],
};

module.exports = config;
