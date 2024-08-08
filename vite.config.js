import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/kapoy/",
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure this matches the directory Vercel serves
  },
})
