import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { join } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  // root: join(__dirname, 'src/render'),
  base: "./", // * 打包相对路径,否则electron加载index.html时找不到css,js文件
  plugins: [svelte()],
  server: {
    strictPort: true, // * 固定端口(如果端口被占用则中止)
    host: true, // 0.0.0.0
    port: 3333
  },
  build: {
    outDir: "output/render" // 打包输出文件路径
  }
})
