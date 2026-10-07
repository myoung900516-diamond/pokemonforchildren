import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  base:'/pokemonforchildren/',//github-pages의 주소 규격에 맞추기 위해 적음
})
