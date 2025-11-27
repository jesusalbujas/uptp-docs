import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";
import { viteBundler } from "@vuepress/bundler-vite";
import crypto from "node:crypto";

// Polyfill for Node < 21.7.0
// @ts-ignore
if (!crypto.hash) {
  // @ts-ignore
  crypto.hash = (algorithm, data, outputEncoding) => {
    return crypto.createHash(algorithm).update(data).digest(outputEncoding as any);
  };
}


export default defineUserConfig({
  base: "/docs/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "es-ES",
      title: 'UPTP Docs',
      description: 'Una documentación de definición de interfaz de usuario basada en componentes, composiciones y diseños de patrones.',
    },
  },


  theme,

  bundler: viteBundler(),

  // Enable it with pwa
  // shouldPrefetch: false,
});
