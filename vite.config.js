import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";
import babel from "@rollup/plugin-babel";

export default defineConfig({
  base: "/cats__test-task/",
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    target: "es2022",
    rollupOptions: {
      plugins: [
        babel({
          babelHelpers: "bundled",
          presets: ["@babel/preset-env"],
        }),
      ],
    },
  },
});
