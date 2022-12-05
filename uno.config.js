import { presetUno, defineConfig } from 'unocss'
import { presetExtra } from 'unocss-preset-extra'

export default defineConfig({
  presets: [presetUno(), presetExtra()]
})
