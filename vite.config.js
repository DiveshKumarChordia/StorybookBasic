import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'storybook/internal/manager-api',
        'storybook/internal/components',
        'storybook/internal/theming',
        'storybook/internal/core-events',
      ],
    },
  },
  plugins: [react()],
})
