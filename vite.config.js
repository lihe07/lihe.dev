import solid from "solid-start/vite";
import unocss from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    port: 3000,
    host: "127.0.0.1",
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    solid({
      adapter: "solid-start-netlify",
    }),
    unocss(),
  ],
});
