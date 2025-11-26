import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/": [
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
      link: "/guide/"
    },
    {
      text: "Titulo 4",
      icon: "person",
      link: "/about/",
      children: [
        "/about/about",
        "/about/location"
      ]
    },
  ],
});
