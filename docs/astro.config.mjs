import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  
  // GitHub Pages Projekt-URL: https://test.github.io/Wikitest/
  site: 'https://Cyberl0rd81.github.io',
  base: '/Wikitest',

  integrations: [
    starlight({
      title: 'My Docs',
      description: 'Documentation built with Astro Starlight'
    }),
  ],
});
