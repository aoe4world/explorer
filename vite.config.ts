import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    chunkSizeWarningLimit: 3000, // data-sdk is 2.4 MB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("src/routes/quiz") || id.includes("src/components/quiz")) {
            return "quiz";
          }
          if (id.includes("data/src/sdk")) {
            return "data-sdk";
          }
        },
      },
    },
  },
  server: {
    watch: {
      ignored: [
        "**/data/source/**"
      ]
    }
  },
  define: {
    "import.meta.env.DATA_URL": '"http://localhost:3000/data"',
    "import.meta.env.IMG_BASE_URL": '"/"',
  },
  resolve: {
    alias: {
      "@data": path.resolve(__dirname, "./data/src"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  publicDir: "data/images",
});
