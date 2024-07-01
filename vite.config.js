import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      devOptions: {
        enabled: true,
      },

      srcDir: "src",
      filename: "sw.js",
      registerType: "autoUpdate",
      injectManifest: {
        injectionPoint: undefined,
      },

      manifest: {
        name: "Shoe Off",
        start_url: "./",
        theme_color: "rgb(17 17 17)",
        scope: "./",
        display: "standalone",
        icons: [
          {
            src: "public/Logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "public/Logo-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "public/Logo_maskable_512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        description:
          "Welcome to Shoe-Off, your ultimate destination for Nike shoes! At Shoe-Off, we specialize in providing a vast selection of the latest and most popular Nike footwear.",
        screenshots: [
          {
            src: "public/screenshot-1.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "public/screenshot-2.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "public/screenshot-3.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "public/screenshot-4.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "public/desktop-screenshot-1.png",
            sizes: "1170x672",
            type: "image/png",
            form_factor: "wide",
            label: "Shoe off home page hero section",
          },
          {
            src: "public/desktop-screenshot-2.png",
            sizes: "1170x672",
            type: "image/png",
            form_factor: "wide",
            label: "Shoe off home page footer section",
          },
          {
            src: "public/desktop-screenshot-3.png",
            sizes: "1170x672",
            type: "image/png",
            form_factor: "wide",
            label: "Shoe off cart",
          },
          {
            src: "public/desktop-screenshot-4.png",
            sizes: "1170x672",
            type: "image/png",
            form_factor: "wide",
            label: "Shoe off successful purchase",
          },
        ],
      },
    }),
  ],
});
