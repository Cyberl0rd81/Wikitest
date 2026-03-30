import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://Cyberl0rd81.github.io",
  base: "/Wikitest",

  integrations: [
    starlight({
      title: "Projekt-Dokumentation"
    })
  ]
});
