import React, { type ReactNode } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', marginLeft: 'var(--sidebar-width)', overflow: 'hidden' }}>
        <Topbar />
        <main style={{
          flex: 1,
          marginTop: 'var(--topbar-height)',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          background: 'var(--background)',
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
