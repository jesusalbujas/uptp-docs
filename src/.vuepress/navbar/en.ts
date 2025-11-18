import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([ 
  "/",
  {
  text: "Tittle 1", 
  icon: "rocket", 
  link: "/get-started/" 
},
  { 
    text: "Title 2", 
    icon: "book-open", 
    link: "/guide/" 
  },
  {
    text: "Tittle 3",
    icon: "database",
    link: "/development/dev-en" 
  },
]);
