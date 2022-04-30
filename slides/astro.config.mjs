import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  site:'https://microwebapps.github.io',
  base:'/AstroSlides/slides',
  trailingSlash: 'ignore'//not working
});
