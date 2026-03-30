import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://cyberl0rd81.github.io',
  base: '/Wikitest',

  trailingSlash: 'always',

  integrations: [
    starlight({
      title: 'Wikitest Docs',
      description: 'Documentation built with Astro Starlight'
    })
  ],
});
