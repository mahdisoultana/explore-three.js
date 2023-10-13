import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva } from 'leva';
import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { LightDarkAtom } from '../components/shared/LightDarkButton';
import Nav from './Nav';

function Layout({
  children,
  experience,
  immersive = false,
}: {
  immersive?: boolean;
  experience: React.ReactNode;
  children?: React.ReactNode;
}) {
  const { search } = useLocation();
  const light = useRecoilValue(LightDarkAtom);
  return (
    <main
      className={`min-h-screen bg-gray-100 w-full font-Kalam ${
        !light && 'dark'
      }`}
    >
      {!immersive && <Nav />}
      <main className="fixed top-0 left-0 w-full h-screen z-10">
        <Leva
          collapsed
          hidden={search.includes('production')}
          titleBar={{
            title: 'Debug Controls',
          }}
        />
        <ErrorBoundary
          fallback={
            <div className="text-sm    justify-start font-mono py-20 px-10 text-red-500 w-full h-full">
              <p>
                at this Time , this is an expected Error please refresh and will
                be fixed !
              </p>
              <button
                className="px-8 hover:opacity-40   py-3 rounded bg-gray-500 text-white mt-5"
                onClick={() => window.location.reload()}
              >
                Refresh
              </button>
            </div>
          }
        >
          <KeyboardControls
            map={[
              { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
              { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
              { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
              { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
              { name: 'jump', keys: ['Space'] },
            ]}
          >
            <Canvas
              shadows
              flat
              camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4, 3, 6],
              }}
            >
              {experience}
            </Canvas>
            {children}
          </KeyboardControls>
        </ErrorBoundary>
      </main>
    </main>
  );
}

export default Layout;
