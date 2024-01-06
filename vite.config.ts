import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {'src': '/src'}
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./setupTest.ts']
  },
})
