import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue({
    template: {
      compilerOptions: {
        compatConfig: {
          MODE: 2
        }
      }
    }
  })],
  resolve: {
    alias: {
      'vue': '@vue/compat',
      '~/bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~/bootstrap-vue': path.resolve(__dirname, 'node_modules/bootstrap-vue'),
      'vue-router': path.resolve(__dirname, 'node_modules/vue-router/dist/vue-router.global.js')
    }
  }
})
