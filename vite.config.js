import { defineConfig } from 'vite'
import Icons from 'unplugin-icons/vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/jupiter',
  build: {
      // sourcemap: true
    },
    plugins: [
      Icons({
        compiler: 'jsx',
        jsx: 'react',
      }),
      react()],
})
