import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [
    react(),
    {
      name: 'app-entry',
      transformIndexHtml: {
        order: 'pre',
        handler(html) {
          return html.replace(
            '<!-- VITE_APP_ENTRY -->',
            '<script type="module" src="/src/main.jsx"></script>'
          );
        }
      }
    }
  ],
  server: {
    port: 3000,
    open: false
  }
});
