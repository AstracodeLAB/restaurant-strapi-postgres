import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { config } from 'dotenv';
//import { resolve } from 'path';

// Cargar variables de entorno desde los archivos secretos
const envFilePath = process.env.NODE_ENV === 'production' ? '/etc/secrets/production.env' : '/etc/secrets/development.env';
config({ path: envFilePath });

export default defineConfig({
  plugins: [react()],
  base: '/',
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
