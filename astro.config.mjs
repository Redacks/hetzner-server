import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: process.env.CI ? "https://redacks.github.io" : "http://localhost:4321",
  base: process.env.CI ? "/hetzner-server" : undefined,
  integrations: [
    starlight({
      title: "Hetzner-Server",
      social: {
        github: "https://github.com/Redacks/hetzner-server",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
      ],
    }),
  ],
});
