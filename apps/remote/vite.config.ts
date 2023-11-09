import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig({
  cacheDir: '../../node_modules/.vite/remote',
  server: {
    port: 4201,
    host: 'localhost',
  },

  preview: {
    port: 4301,
    host: 'localhost',
  },
  plugins: [
    react(),
    nxViteTsPaths(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        './Button': './apps/remote/src/components/Button'
      },
      shared: ['react','react-dom']
    })
  ],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  }
})

