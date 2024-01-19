import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "hybrid",
  adapter: netlify()
});