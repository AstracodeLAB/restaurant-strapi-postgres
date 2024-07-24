import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/restaurant-strapi-postgres/frontend/',
  server: {
    host: '0.0.0.0', // Asegúrate de que Vite escuche en todas las interfaces de red
    port: 3000, // Puedes usar cualquier puerto que prefieras
  },
  preview: {
    host: '0.0.0.0', // Asegúrate de que Vite preview escuche en todas las interfaces de red
    port: 3000, // El puerto debe coincidir con el servidor
  }
})