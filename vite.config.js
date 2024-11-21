import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/ui/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        components: resolve(__dirname, "components/index.html"),
      },
    },
  },
});
