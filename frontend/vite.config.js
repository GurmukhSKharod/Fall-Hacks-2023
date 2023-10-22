import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  // ... other config options
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://maps.googleapis.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
};
