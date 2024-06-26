import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://saqibsafdar11.github.io',
  base: '/astrofy-main',
  integrations: [mdx(), sitemap(), tailwind()]
});
