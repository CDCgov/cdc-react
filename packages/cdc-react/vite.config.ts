import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import Unfonts from "unplugin-fonts/vite";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    Unfonts({
      custom: {
        families: [
          {
            name: "Open Sans",
            src: "./src/fonts/*.woff2",
            transform(font) {
              if (font.basename === "opensans-light-webfont") {
                font.weight = 200;
                font.style = "normal";
              }

              if (font.basename === "opensans-regular-webfont") {
                font.weight = 400;
                font.style = "normal";
              }

              if (font.basename === "opensans-medium-webfont") {
                font.weight = 500;
                font.style = "normal";
              }

              if (font.basename === "opensans-semibold-webfont") {
                font.weight = 600;
                font.style = "normal";
              }

              if (font.basename === "opensans-bold-webfont") {
                font.weight = 700;
                font.style = "normal";
              }

              if (font.basename === "opensans-extrabold-webfont") {
                font.weight = 800;
                font.style = "normal";
              }

              if (font.basename === "opensans-lightitalic-webfont") {
                font.weight = 200;
                font.style = "italic";
              }

              if (font.basename === "opensans-italic-webfont") {
                font.weight = 400;
                font.style = "italic";
              }

              if (font.basename === "opensans-mediumitalic-webfont") {
                font.weight = 500;
                font.style = "italic";
              }

              if (font.basename === "opensans-semibolditalic-webfont") {
                font.weight = 600;
                font.style = "italic";
              }

              if (font.basename === "opensans-bolditalic-webfont") {
                font.weight = 700;
                font.style = "italic";
              }

              if (font.basename === "opensans-extrabolditalic-webfont") {
                font.weight = 800;
                font.style = "italic";
              }

              return font;
            },
          },
        ],
        preload: true,
      },
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/tests/setup.ts",
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ["./node_modules/@uswds/uswds/packages"],
      },
    },
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "CDCReact",
      formats: ["es", "umd"],
      fileName: (format) => `cdc-react.${format}.js`,
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
});
