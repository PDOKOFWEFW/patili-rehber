import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // KENDİ SİTE LİNKİNİ YAZ:
  site: 'https://patili-rehber.vercel.app',
  integrations: [sitemap()],
});