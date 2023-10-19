import { KeyboardControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leva } from 'leva';
import React, { useEffect, useRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useLocation } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { LightDarkAtom } from '../components/shared/LightDarkButton';
import { scrollAtom } from '../hooks/scrollAtom';
import Nav from './Nav';

gsap.registerPlugin(ScrollTrigger);

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
  const setScroll = useSetRecoilState(scrollAtom);

  const containerRef = useRef<any>(null);

  useEffect(() => {
    let tm = setTimeout(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        // end early before (100px) we hit the end of the content container
        end: 'bottom-=100px bottom',
        // markers: {
        //   startColor: 'yellow',
        //   endColor: 'yellow',
        //   indent: 200,
        // },
        onUpdate(p) {
          setScroll(+p.progress.toFixed(2));
        },
      });
    }, 10);
    return () => {
      clearTimeout(tm);
    };
  }, []);
  return (
    <main
      className={`min-h-[90vh] overflow-hidden relative  w-full font-Kalam ${
        !light && 'dark'
      }`}
    >
      {<Nav />}
      <main className="fixed top-0 left-0 w-full h-screen z-[1] ">
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
          </KeyboardControls>
        </ErrorBoundary>
      </main>
      <div
        ref={containerRef}
        className="relative  h-full  z-[100] bg-gray-700/90 w-[100vw]"
      >
        {children}
      </div>
    </main>
  );
}

export default Layout;
