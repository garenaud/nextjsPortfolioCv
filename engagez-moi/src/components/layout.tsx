import React, { ReactNode } from 'react';
import ResponsiveAppBar from '@/components/navbar';
import Footer from '@/components/footer';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header><ResponsiveAppBar /></header>
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;