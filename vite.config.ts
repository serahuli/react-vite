import { defineConfig } from 'vite';
const { resolve } = require('path');
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@container': resolve(__dirname, 'src/container'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@images': resolve(__dirname, 'src/images'),
      '@style': resolve(__dirname, 'src/style'),
      '@utils': resolve(__dirname, 'src/utils')
    },
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
  }
});
