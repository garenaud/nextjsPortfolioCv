// Définir une interface pour le type des liens de réseaux sociaux
export interface SocialMediaLinks {
    instagram: string;
    facebook: string;
    github: string;
    homepage: string;
    [key: string]: string; // Pour permettre l'ajout d'autres réseaux sociaux dynamiquement
  }
  
  // Définir l'objet des liens de réseaux sociaux en utilisant l'interface
  export const socialMedia: SocialMediaLinks = {
    instagram: "https://www.instagram.com/developer_satoru_akiyama/",
    facebook: "https://www.facebook.com/satoruakiyama1998",
    github: "https://github.com/SatoruAkiyama/nextjs-and-material-ui-template-with-header-and-footer",
    homepage: "https://satoruakiyama.com",
    // Vous pouvez ajouter d'autres réseaux sociaux comme ceci
    // twitter: "https://twitter.com",
  };