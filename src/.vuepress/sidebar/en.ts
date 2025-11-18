import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    // "get-started/",
    // {
    //   text: "指南",
    //   icon: "lightbulb",
    //   prefix: "guide/",
    //   children: [
    //     "intro/",
    //     "interface/",
    //     "layout/",
    //     "markdown/",
    //     "feature/",
    //     "blog/",
    //     "customize/",
    //     "advanced/",
    //   ],
    // },
    // {
    //   text: "配置",
    //   icon: "gears",
    //   prefix: "config/",
    //   children: [
    //     "intro",
    //     "i18n",
    //     "theme/",
    //     "plugins/",
    //     "frontmatter/",
    //     "style",
    //   ],
    // },
    // {
    //   text: "教程",
    //   icon: "signs-post",
    //   prefix: "cookbook/",
    //   children: ["markdown/", "vuepress/"],
    // },
    {
      text: "Get Started",
      link: "get-started/",
      icon: "rocket",
      // children: [
      //   "get-started/Develop/",
      //   "get-started/Build/",
      //   "get-started/Docker/"
      // ]
    },
    { 
    text: "Guide", 
    icon: "book-open", 
    link: "/guide/" 
  },
  { 
    text: "About", 
    icon: "person", 
    link: "/about/",
    children: [
      "/about/about",
      "/about/location"
    ]
  },
    // "get-started/",
    // {
    //   text: "Get Started",
    //   icon: "rocket",
    //   prefix: "get-started/",
    //   children: "structure",
    // }
  ],
});
