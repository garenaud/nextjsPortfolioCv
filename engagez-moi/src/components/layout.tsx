import React, { ReactNode } from 'react';
import ResponsiveAppBar from '@/components/navbar';
import Footer from '@/components/footer';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <header><ResponsiveAppBar /></header>
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;