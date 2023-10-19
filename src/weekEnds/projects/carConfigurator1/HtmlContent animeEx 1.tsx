import { useEffect, useRef } from 'react';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { atom, useSetRecoilState } from 'recoil';
import useGsap from '../../../hooks/useGsap';

gsap.registerPlugin(ScrollTrigger);

export const scrollAtom = atom({
  key: 'count',
  default: 0,
});

function HtmlContent() {
  const containerRef = useRef<any>(null);
  const setScroll = useSetRecoilState(scrollAtom);
  useEffect(() => {
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom-=100px bottom',
      markers: {
        startColor: 'yellow',
        endColor: 'yellow',
        indent: 200,
      },
      onUpdate(p) {
        setScroll(+p.progress.toFixed(2));
      },
    });
  }, []);

  useGsap((gsap) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.container-box',
        start: 'top 30% ',

        end: '40% 30%',
        markers: true,
        scrub: 1,
      },
    });
    gsap.set('.box', { opacity: 0 });
    tl.to('.box', {
      keyframes: {
        '0%': { x: 0 },
        '20%': { x: 300 },
        '60%': { y: 300 },
        '80%': { x: -300 },
        '90%': { y: 300, x: -300 },
        '100%': { y: 510 },
        easeEach: 'sine.inOut',
      },
      opacity: 1,
      rotateZ: 300 * 20,
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative h-full  z-[100] bg-gray-700 container w-[100vw]"
    >
      <div className={`  w-full  text-black text-3xl  h-screen  `}> page 1</div>
      <div
        className={`  container-box w-full  text-black text-3xl  h-screen flex  justify-center  `}
      >
        <div className="w-20 h-20 bg-red-500 box"></div>
      </div>
      <div className={`  w-full  text-black text-3xl  h-screen  `}> page 3</div>
    </div>
  );
}

export default HtmlContent;
