import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/",
  {
    text: "Titulo 1",
    icon: "rocket",
    link: "/get-started/"
  },
  {
    text: "Titulo 2",
    icon: "book-open",
    link: "/guide/"
  },
  {
    text: "Titulo 3",
    icon: "database",
    link: "/development/dev-es"
  },
]);
