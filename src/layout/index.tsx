import { Canvas } from '@react-three/fiber';
import React from 'react';
import Nav from './Nav';

function Layout({
  children,
  experience,
  immersive,
}: {
  immersive?: boolean;
  experience: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-gray-900 w-full font-Kalam">
      {!immersive && <Nav />}
      <main className="fixed top-0 left-0 w-full h-screen z-10">
        <Canvas>{experience}</Canvas>
      </main>
      {children}
    </main>
  );
}

export default Layout;
