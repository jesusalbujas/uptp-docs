import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Empezar",
      link: "get-started/",
      icon: "rocket",
      // children: [
      //   "get-started/Develop/",
      //   "get-started/Build/",
      //   "get-started/Docker/"
      // ]
    },
    { 
      text: "Guia", 
      icon: "book-open", 
      link: "/es/guide/" 
    },
    { 
      text: "Nosotros", 
      icon: "person", 
      link: "/es/about/",
      children: [
        "/es/about/about-erp",
        "/es/about/location"
      ]
    },
  ],
});
