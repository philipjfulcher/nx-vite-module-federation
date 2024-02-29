import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';
import react from '@vitejs/plugin-react';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';

// https://vitejs.dev/config/
export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/host',
  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },
  plugins: [
    react(),
    // nxViteTsPaths(),
    federation({
      name: 'host',
      remotes: {
        remoteApp: 'http://localhost:4301/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
    }),
  ],
  build: {
    outDir: '../../dist/apps/host',
    reportCompressedSize: true,
    commonjsOptions: { transformMixedEsModules: true },
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
