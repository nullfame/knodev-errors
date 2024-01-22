/// <reference types="vitest" />

// * vite 5 is a dependency of vitest (via vite-node) so this is a safe import
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    setupFiles: ["./testSetup.js"],
  },
});
