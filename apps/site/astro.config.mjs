import cloudflare from "@astrojs/cloudflare";
import node from "@astrojs/node";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), icon()],
  output: "server",
  adapter:
    process.env.ADAPTER === "cloudflare"
      ? cloudflare()
      : node({ mode: "standalone" }),
});
