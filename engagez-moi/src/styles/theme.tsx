import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { amber, deepOrange, grey } from '@mui/material/colors';
import { Open_Sans, Average_Sans } from 'next/font/google';

export const opensans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export const averagesans = Average_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

declare module "@mui/material/styles" {  
  interface TypographyVariants {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    primary?: React.CSSProperties;
    secondary?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

let theme = createTheme({
  palette: {
    primary: {
      main: amber[500], // Couleur primaire principale
      light: amber[300],
      dark: amber[700],
      contrastText: '#fff',
    },
    secondary: {
      main: deepOrange[500], // Couleur secondaire principale
      light: deepOrange[300],
      dark: deepOrange[700],
      contrastText: '#fff',
    },
    background: {
      default: grey[100], // Couleur de fond
      paper: '#fff', // Couleur de fond des composants de type papier
    },
    text: {
      primary: grey[900], // Couleur principale du texte
      secondary: grey[700], // Couleur secondaire du texte
    },
  },
  typography: {
    fontFamily: averagesans.style.fontFamily,
    h1: {
      fontFamily: opensans.style.fontFamily,
      fontWeight: 400,
      color: amber[700], // Couleur du texte des titres h1
    },
    h2: {
      fontFamily: opensans.style.fontFamily,
      color: amber[700], // Couleur du texte des titres h2
    },
    h3: {
      fontFamily: opensans.style.fontFamily,
      color: amber[700], // Couleur du texte des titres h3
    },
    h4: {
      fontFamily: opensans.style.fontFamily,
      color: amber[700], // Couleur du texte des titres h4
    },
    h5: {
      fontFamily: opensans.style.fontFamily,
      color: amber[700], // Couleur du texte des titres h5
    },
    h6: {
      fontFamily: opensans.style.fontFamily,
      color: amber[700], // Couleur du texte des titres h6
    },
    body1: {
      fontFamily: averagesans.style.fontFamily,
      color: grey[900], // Couleur du texte du corps
    },
    body2: {
      fontFamily: averagesans.style.fontFamily,
      color: grey[700], // Couleur secondaire du texte du corps
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
