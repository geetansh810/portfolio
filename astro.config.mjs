// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

import mdx from "@astrojs/mdx";

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: isProd
    ? 'https://geetansh810.github.io'
    : 'http://localhost:4321',
  base: isProd ? '/portfolio/' : '/',
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});