import { defineUserConfig } from "vuepress";
import theme from "./theme.ts";

export default defineUserConfig({
  base: "/",

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

  // Enable it with pwa
  // shouldPrefetch: false,
});
