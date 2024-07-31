import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }

  // server: {
  //   host: '0.0.0.0',
  //   port: 3000,
  // },
  // preview: {
  //   host: '0.0.0.0',
  //   port: 3000,
  // },
  // mimeTypes: {
  //   'text/css': ['css']
  // }  // },
});