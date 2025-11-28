import { sidebar } from "vuepress-theme-hope";

export const esSidebar = sidebar({
  "/": [
    "",
    {
      text: "Trayecto I",
      icon: "compass",
      prefix: "traject-i/",
      link: "traject-i/",
      children: [
        "diagnosis",
        "planning",
        "execution"
      ]
    },
    {
      text: "Proyectos (II-IV)",
      icon: "code",
      prefix: "projects/",
      link: "projects/",
      children: [
        "phase-i-planning",
        "phase-ii-development",
        "phase-iii-implementation",
        "phase-iv-results",
        "phase-v-manuals"
      ]
    },
    {
      text: "Recursos",
      icon: "toolbox",
      prefix: "resources/",
      children: [
        "diagrams",
        "templates"
      ]
    },
    {
      text: "Pensum",
      icon: "graduation-cap",
      prefix: "pensum/",
      link: "pensum/",
      children: [
        "trayecto-inicial",
        "trayecto-1",
        "trayecto-2",
        "trayecto-3",
        "trayecto-4",
        "postgrado",
        "estadisticas"
      ]
    }
  ],
});
