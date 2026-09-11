import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Honour an assigned PORT so the dev server can run alongside other
    // Vite projects instead of fighting over the default 5173.
    port: Number(process.env.PORT) || 5173,
  },
})
