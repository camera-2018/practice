import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import {
  ArcoResolver
} from 'unplugin-vue-components/resolvers';
// vite.config.ts
import Unocss from 'unocss/vite'
import { presetUno } from 'unocss'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss({
      presets: [
        presetUno(),
      ],
    }),
    Components({
      resolvers: [
        ArcoResolver()
      ]
    })
  ]
});