import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom','react-router-dom'], // Replace 'your-external-module' with the actual module name causing the issue
     
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') {
          // You can decide to ignore or handle the warning in a custom way
          return;
        }
        warn(warning); // This will log other warnings as usual
      },
    },
  },
})




// build: {
//   rollupOptions: {
//     external: ['react', 'react-dom','react-router-dom'], // Replace 'your-external-module' with the actual module name causing the issue
//   },
// },



// vite config.js, app.js,  index html