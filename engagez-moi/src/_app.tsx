import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider, Theme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import '@/styles/globals.css';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { green, pink } from '@mui/material/colors';

// Fonction pour définir les styles des composants
const componentStyleOverrides = (theme: Theme) => ({
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 'bold',
        backgroundColor: theme.palette.primary.main, // Exemple d'utilisation de theme
      },
    },
  },
  // Ajoutez ici d'autres composants si nécessaire
});

let theme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
    secondary: {
      main: pink[500],
    },
  },
  typography: {
    fontFamily: "'Average Sans', sans-serif",
    h1: {
      fontFamily: "'Open Sans', sans-serif",
      
    },
    h2: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h3: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h4: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h5: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h6: {
      fontFamily: "'Open Sans', sans-serif",
    },
  },
});

theme = responsiveFontSizes(theme);
theme.components = componentStyleOverrides(theme);

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log("Theme:", theme); // Vérifiez que le thème est correctement défini
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
