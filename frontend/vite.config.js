import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/restaurant-strapi-postgres/', // Asegúrate de que este valor coincida con el subdirectorio en el que está alojado tu sitio
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
})