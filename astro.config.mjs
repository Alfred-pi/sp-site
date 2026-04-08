// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://alfred-pi.github.io',
  base: '/sp-site',
  vite: {
    plugins: [tailwindcss()]
  }
});