import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/es/": [
    "",
    {
      text: "Titulo 1",
      link: "get-started/",
      icon: "rocket",
      // children: [
      //   "get-started/Develop/",
      //   "get-started/Build/",
      //   "get-started/Docker/"
      // ]
    },
    { 
      text: "Titulo 2", 
      icon: "book-open", 
      link: "/es/guide/" 
    },
    { 
      text: "Titulo 4", 
      icon: "person", 
      link: "/es/about/",
      children: [
        "/es/about/about",
        "/es/about/location"
      ]
    },
  ],
});
