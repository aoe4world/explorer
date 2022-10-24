import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

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
  publicDir: "data/images",
});
