import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

//import { resolve } from 'path';

// Cargar variables de entorno desde los archivos secretos

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/restaurant-strapi-postgres/frontend/' : '/',
  server: {
    host: '0.0.0.0', 
    port: 3000, 
  },
  preview: {
    host: '0.0.0.0', // Asegúrate de que Vite preview escuche en todas las interfaces de red
    port: 3000, // El puerto debe coincidir con el servidor
  },
  define: {
    'process.env': process.env
  }
});
