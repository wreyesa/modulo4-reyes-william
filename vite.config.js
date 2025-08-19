import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",   // Esto habilita document/window
    globals: true,          // Para usar test/expect sin importarlos en cada archivo
    setupFiles: "./src/tests/setup.js", // Archivo opcional para configuraciones
  },
})
