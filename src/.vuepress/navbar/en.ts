import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([ 
  "/",
  {
  text: "Get Started", 
  icon: "rocket", 
  link: "/get-started/" 
},
  { 
    text: "Guide", 
    icon: "book-open", 
    link: "/guide/" 
  },
  {
    text: "Development",
    icon: "database",
    link: "/development/dev-en" 
  },
  { 
    text: "Access the system", 
    icon: "/assets/img/vue-logo-small.png", 
    link: "http://api.adempiere.io:3333/realms/adempiere/protocol/openid-connect/auth?response_type=code&redirect_uri=http%3A%2F%2Fapi.adempiere.io%3A8080%2Fwebui&state=QURfQXBwUmVnaXN0cmF0aW9uX0lEPTEwMDAwMDZ8QXBwbGljYXRpb25UeXBlPU9JQQ%3D%3D&client_id=adempiere-zk-cli&scope=openid+email+profile" 
  },
]);
