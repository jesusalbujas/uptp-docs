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

  locales: {
    "/": {
      lang: "en-US",
      title: "UPTP",
      description: "",
    },
    "/es/": {
      lang: "es-ES",
      title: 'UPTP',
      description: 'Una documentación de definición de interfaz de usuario basada en componentes, composiciones y diseños de patrones.',
    },
  },


  theme,

  bundler: viteBundler(),

  // Enable it with pwa
  // shouldPrefetch: false,
});
