import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/baymax-bot-fake/', // Substitua pelo nome do seu repositório
  plugins: [react()],
});
