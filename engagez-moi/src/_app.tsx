import * as React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import theme from '@/styles/theme';
import '@/styles/globals.css';
import Layout from './components/layout';

const MyApp = ({ Component, pageProps }: AppProps) => {
  console.log('theme depuis app', theme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '*': { margin: 0, padding: 0, boxSizing: 'border-box' },
          'html, body': { margin: 0, padding: 0, height: '100%', width: '100%' },
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default MyApp;
