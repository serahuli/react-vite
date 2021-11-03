import { defineConfig } from 'vite';
const { resolve } = require('path');
import react from '@vitejs/plugin-react';
import vitePluginImp from "vite-plugin-imp";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), vitePluginImp({
        libList: [
          {
            libName: "antd",
            style: (name) => `antd/lib/${name}/style/index.css`,
          },
        ],
      })],
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@container': resolve(__dirname, 'src/container'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@images': resolve(__dirname, 'src/images'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@utils': resolve(__dirname, 'src/utils')
        },
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json']
    }
});
