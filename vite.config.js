import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  build: {
    outDir: 'dist',
    // ✅ Add this to fix the chunk warning
    chunkSizeWarningLimit: 1000, // Increase limit to 1000kB (optional)
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor/react libraries into separate chunks
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})