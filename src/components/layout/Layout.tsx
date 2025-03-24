import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import WalletConnect from '../wallet/WalletConnect';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <WalletConnect />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;