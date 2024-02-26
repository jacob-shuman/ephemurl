import netlify from "@astrojs/netlify";
import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    starlight({
      title: "ephemurl",
      social: {
        github: "https://github.com/jacob-shuman/ephemurl",
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
