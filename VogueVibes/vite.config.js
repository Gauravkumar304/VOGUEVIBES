import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: { port: 5173 },
  build: {
    rollupOptions: {
      external: ['react', 'react-dom','react-router-dom'], // Replace 'your-external-module' with the actual module name causing the issue
    },
  },
})




// build: {
//   rollupOptions: {
//     external: ['react', 'react-dom','react-router-dom'], // Replace 'your-external-module' with the actual module name causing the issue
//   },
// },



// vite config.js, app.js,  index html