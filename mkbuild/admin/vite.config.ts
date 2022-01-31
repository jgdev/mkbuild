import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@mkbuild": path.resolve(__dirname, "./src"),
      "@mkbuild/lib": path.resolve(
        __dirname,
        "./node_modules/@mkbuild/lib/src"
      ),
    },
  },
  plugins: [react()],
});
