import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/styles/theme';
import '@/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log('theme depuis app', theme);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style jsx global>{`
        body {
          font-family: 'Average Sans', sans-serif !important;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Open Sans', sans-serif !important;
        }
        .MuiTypography-root {
          font-family: 'Average Sans', sans-serif !important;
        }
      `}</style>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
