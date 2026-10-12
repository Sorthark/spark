import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 子路径部署：https://你的域名/spark/
export default defineConfig({
  plugins: [react()],
  base: '/spark/',
})
