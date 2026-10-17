import { defineConfig } from "vite"

export default defineConfig({
  // Draft.js 0.10's dependencies expect the global alias supplied by Webpack.
  define: { global: "globalThis" },
})
