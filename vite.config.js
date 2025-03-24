import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    cors: {
      origin: 'http://localhost:5173/',
      methods: ['GET', 'POST'], // Restrinja os métodos permitidos
    }
  }
});
