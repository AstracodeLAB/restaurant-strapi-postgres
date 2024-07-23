import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/restaurant-strapi-postgres/', 
  build: {
    outDir: 'dist',
  },
})