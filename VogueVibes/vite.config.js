import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  optimizeDeps: {
    include: ['react', 'react-dom','react-router-dom','react-toastify'], // Replace with the problematic module name
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      //external: ['react', 'react-dom','react-router-dom','react-toastify'], // Replace 'your-external-module' with the actual module name causing the issue
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          // Skip unresolved import warnings
          return;
        }
        warn(warning);
      }
    },
  },
})




// build: {
//   rollupOptions: {
//     external: ['react', 'react-dom','react-router-dom'], // Replace 'your-external-module' with the actual module name causing the issue
//   },
// },



// vite config.js, app.js,  index html