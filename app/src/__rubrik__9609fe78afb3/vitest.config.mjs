import react from '@vitejs/plugin-react'
import { existsSync } from 'node:fs'
export default {
  configFile: false,
  plugins: [react()],
  test: {
    environment: 'jsdom',
    include: ['src/__rubrik__9609fe78afb3/rubrik.test.jsx'],
    setupFiles: existsSync('src/setupTests.js') ? ['./src/setupTests.js'] : [],
  },
}
