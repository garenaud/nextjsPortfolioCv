import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { lighten, darken } from '@mui/system/colorManipulator';
import { Open_Sans, Average_Sans, Akshar } from 'next/font/google';

export const opensans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const aksharLight = Akshar({
  weight: '300',
  display: 'swap',
  subsets: ['latin'],
});

const aksharRegular = Akshar({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
});

const aksharMedium = Akshar({
  weight: '500',
  display: 'swap',
  subsets: ['latin'],
});

const aksharSemiBold = Akshar({
  weight: '600',
  display: 'swap',
  subsets: ['latin'],
});

const aksharBold = Akshar({
  weight: '700',
  display: 'swap',
  subsets: ['latin'],
});

const primaryColor = '#f76b69';
const secondaryColor = '#262626';
const backgroundColor = '#f1eadc';

let theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, // Couleur primaire principale
      light: lighten(primaryColor, 0.2),
      dark: darken(primaryColor, 0.2),
      contrastText: '#fff',
    },
    secondary: {
      main: secondaryColor, // Couleur secondaire principale
      light: lighten(secondaryColor, 0.2),
      dark: darken(secondaryColor, 0.2),
      contrastText: '#fff',
    },
    background: {
      default: backgroundColor, // Couleur de fond
      paper: '#fff', // Couleur de fond des composants de type papier
    },
    text: {
      primary: secondaryColor, // Couleur principale du texte
      secondary: primaryColor, // Couleur secondaire du texte
    },
  },
  typography: {
    fontFamily: aksharRegular.style.fontFamily,
    h1: {
      fontFamily: aksharBold.style.fontFamily,
    },
    h2: {
      fontFamily: aksharSemiBold.style.fontFamily,
    },
    h3: {
      fontFamily: aksharSemiBold.style.fontFamily,
    },
    h4: {
      fontFamily: aksharSemiBold.style.fontFamily,
    },
    h5: {
      fontFamily: aksharRegular.style.fontFamily,
    },
    h6: {
      fontFamily: aksharRegular.style.fontFamily,
    },
    subtitle1: {
      fontFamily: aksharLight.style.fontFamily,
      fontSize: '2rem',
      letterSpacing: '0.09rem',
    },
    body1: {
      fontFamily: aksharRegular.style.fontFamily,
    },
    body2: {
      fontFamily: aksharRegular.style.fontFamily,
    },
    button: {
      fontFamily: aksharRegular.style.fontFamily,
      textTransform: 'uppercase',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: backgroundColor,
        },
        a: {
          textDecoration: 'none',
          color: 'inherit',
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
