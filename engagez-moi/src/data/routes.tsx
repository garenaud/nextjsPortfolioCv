export interface Route {
    name: string;
    link: string;
  }
  
  // Définir un tableau de routes en utilisant l'interface
  export const routes: Route[] = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    // { name: "path name", link: "link url" }, comme ceci
  ];