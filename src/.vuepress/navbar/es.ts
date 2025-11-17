import { navbar } from "vuepress-theme-hope";

export const esNavbar = navbar([
  "/es/",
  { 
    text: "Empezar", 
    icon: "rocket", 
    link: "/es/get-started/" 
  },
  { 
    text: "Guia", 
    icon: "book-open", 
    link: "/es/guide/" 
  },
  {
    text: "Desarrollo",
    icon: "database",
    link: "/es/development/dev-es" 
  },
  { 
    text: "Acceder al sistema", 
    icon: "/assets/img/vue-logo-small.png", 
    link: "http://api.adempiere.io:3333/realms/adempiere/protocol/openid-connect/auth?response_type=code&redirect_uri=http%3A%2F%2Fapi.adempiere.io%3A8080%2Fwebui&state=QURfQXBwUmVnaXN0cmF0aW9uX0lEPTEwMDAwMDZ8QXBwbGljYXRpb25UeXBlPU9JQQ%3D%3D&client_id=adempiere-zk-cli&scope=openid+email+profile" 
  },
]);
