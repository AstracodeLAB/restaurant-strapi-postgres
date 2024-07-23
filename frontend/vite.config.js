import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/restaurant-strapi-postgres/',
  build: {
    outDir: 'dist', // Esta es la configuración predeterminada
    // otras configuraciones de build
  },

})