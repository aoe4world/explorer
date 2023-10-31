import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";
export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    target: "esnext",
    polyfillDynamicImport: false,
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
