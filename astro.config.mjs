import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'

export default defineConfig({
  integrations: [tailwind({ config: { applyBaseStyles: false } }), svelte()],
  site: 'https://cldrojas.github.io',
  base: '/veronica'
})
