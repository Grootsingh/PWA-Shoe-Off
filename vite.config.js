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
      strategies: "injectManifest",
      srcDir: "src",
      filename: "sw.js",
      registerType: "autoUpdate",
      injectManifest: {
        swDest: "dist/sw.js",
      },
      manifest: {
        name: "Shoe Off",
        short_name: "Shoe Off",
        start_url: "./",
        theme_color: "rgb(17 17 17)",
        scope: "./",
        display: "standalone",
        icons: [
          {
            src: "Logo-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "Logo-1024x1024.png",
            sizes: "1024x1024",
            type: "image/png",
          },
          {
            src: "Logo_maskable_512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        description:
          "Welcome to Shoe-Off, your ultimate destination for Nike shoes! At Shoe-Off, we specialize in providing a vast selection of the latest and most popular Nike footwear.",
        screenshots: [
          {
            src: "screenshot-1.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "screenshot-2.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "screenshot-3.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "screenshot-4.png",
            sizes: "371x749",
            type: "image/png",
          },
          {
            src: "desktop-screenshot-1.png",
            sizes: "1170x672",
            type: "image/png",
            form_factor: "wide",
            label: "Shoe off home page hero section",
          },
          {
            src: "desktop-screenshot-2.png",
            sizes: "1170x672",
            type: "image/png",
            form_factor: "wide",
            label: "Shoe off home page footer section",
          },
          {
            src: "desktop-screenshot-3.png",
            sizes: "1170x672",
            type: "image/png",
            form_factor: "wide",
            label: "Shoe off cart",
          },
          {
            src: "desktop-screenshot-4.png",
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
