// src/components/Layout.tsx
import React from 'react';
import ParticlesBackground from '@/pages/ParticlesBackground';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      {/* Background Particles */}
      <ParticlesBackground />
      
      {/* Content with higher z-index */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
