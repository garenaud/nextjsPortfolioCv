import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, pink } from '@mui/material/colors';
import { Open_Sans, Average_Sans } from 'next/font/google';

export const opensans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

export const averagesans = Average_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
})

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
    primary: green,
    secondary: pink,
  },
  typography: {
    fontFamily: averagesans.style.fontFamily,
    h1: {
      fontFamily: opensans.style.fontFamily,
      fontWeight: 400,
    },
    h2: {
      fontFamily: opensans.style.fontFamily,
    },
    h3: {
      fontFamily: opensans.style.fontFamily,
    },
    h4: {
      fontFamily: opensans.style.fontFamily,
    },
    h5: {
      fontFamily: opensans.style.fontFamily,
    },
    h6: {
      fontFamily: opensans.style.fontFamily,
    },
    body1: {
      fontFamily:  averagesans.style.fontFamily,
    },
    body2: {
      fontFamily:  averagesans.style.fontFamily,
    },
  },
  components: {
    MuiCssBaseline: {
/*       styleOverrides: `
        @font-face {
          font-family: 'Raleway';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `, */
    },
  },
});


theme = responsiveFontSizes(theme);
//console.log("theme ", theme);
export default theme;
