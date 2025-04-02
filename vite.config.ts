import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@models": path.resolve(__dirname, "src/models"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@themes": path.resolve(__dirname, "src/themes"),
      "@tokens": path.resolve(__dirname, "src/tokens"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
  },
});
