// Is project folder se npm install aur npm run dev chalao.
// React JSX aur hot reload ke liye local Vite configuration.
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
