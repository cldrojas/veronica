import { vitePreprocess } from '@astrojs/svelte'

export default {
  preprocess: vitePreprocess(),
  compilerWarnings: {
    'a11y-click-events-have-key-events': 'ignore'
  }
}
