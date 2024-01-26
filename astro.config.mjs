import netlify from "@astrojs/netlify";
import svelte from "@astrojs/svelte";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import Icons from "unplugin-icons/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), icon()],
  output: "server",
  adapter: netlify(),
  vite: {
    plugins: [
      Icons({
        compiler: "svelte",
        autoInstall: true,
      }),
    ],
  },
});
