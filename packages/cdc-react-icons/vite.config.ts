import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig, resolveConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "CDCReactIcons",
      formats: ["es", "umd"],
      fileName: (format) => `cdc-react-icons.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  resolve: {
    preserveSymlinks: true,
  },
});
