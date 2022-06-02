import path from "path";
import { defineConfig } from "vitest/config"
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin()
  ],
  resolve: {
    alias: {
      "@": path.resolve( __dirname, "src")
    }
  },
  test: {
    environment: "jsdom"
  }
})
