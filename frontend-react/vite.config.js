import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "a8a238a48a3fe43758cae5ccc0e8b3a7-d9444cb56f751913.elb.us-east-1.amazonaws.com"
    ]
  }
})
