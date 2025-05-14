// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://aloussase.github.io",
  base: "/bitacora",
  integrations: [
    starlight({
      title: "Bitácora de Actividades",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Tracing-Performance-Labs",
        },
      ],
      sidebar: [
        {
          label: "Avances",
          slug: "avances",
        },
        {
          label: "Sprints",
          autogenerate: {
            directory: "avances",
          },
        },
      ],
    }),
  ],
});
