// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jasongith.github.io/tertulia',
  base: '/tertulia/',
  vite: {
    plugins: [tailwindcss()]
  }
});
