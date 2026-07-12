import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// Project Pages are served from https://shafaypro.github.io/shafaypro/,
// so production assets need the repo name as the base path. Dev/preview
// stay at the root.
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/shafaypro/' : '/',
}))
