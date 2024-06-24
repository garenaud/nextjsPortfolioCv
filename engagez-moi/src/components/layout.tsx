import React, { ReactNode } from 'react';
import ResponsiveAppBar from '@/components/navbar';


interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <header><ResponsiveAppBar /></header>
      <main>{children}</main>
      <footer>Footer Content</footer>
    </div>
  );
};

export default Layout;