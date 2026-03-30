import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://cyberl0rd81.github.io',
  base: '/Wikitest',

  integrations: [
    starlight({
      title: 'My Docs',
      description: 'Documentation built with Astro Starlight',
    }),
  ],
});
