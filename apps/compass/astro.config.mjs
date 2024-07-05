import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import basicSsl from "@vitejs/plugin-basic-ssl";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), icon()],
  output: "server",
  vite: {
    plugins: process.env.ADAPTER === "cloudflare" ? [] : [basicSsl()],
  },
  adapter:
    process.env.ADAPTER === "cloudflare"
      ? cloudflare()
      : node({ mode: "standalone" }),
});
