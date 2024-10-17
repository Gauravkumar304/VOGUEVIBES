import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
        onwarn(warning, warn) {
            // Ignore specific warnings or handle them
            if (warning.code === 'THIS_IS_UNDEFINED') return;
            // Call default handler
            warn(warning);
        },
    },
},
  server: {port: 5173}
})
