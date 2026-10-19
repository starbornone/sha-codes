import React, { ReactNode } from 'react';
import Footer from './Footer';
import Nav from './Nav';

interface LayoutProps {
  children: ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
