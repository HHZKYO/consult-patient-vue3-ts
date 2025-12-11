import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// 配置组件自动注册的插件
import Components from 'unplugin-vue-components/vite'
// 配置组件自动注册的解析器
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
export default defineConfig({
  // base: '/hm',
  plugins: [
    vue(),
    vueDevTools(),
    // 样式重复引入了，类型声明文件重复了
    Components({
      dts: false,
      resolvers: [VantResolver({ importStyle: false })]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
