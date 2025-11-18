import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/es/",
  { 
    text: "Titulo 1", 
    icon: "rocket", 
    link: "/es/get-started/" 
  },
  { 
    text: "Titulo 2", 
    icon: "book-open", 
    link: "/es/guide/" 
  },
  {
    text: "Titulo 3",
    icon: "database",
    link: "/es/development/dev-es" 
  },
]);
