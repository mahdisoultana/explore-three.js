import gsap from 'gsap';
import { useEffect, useRef } from 'react';
function useGsap(animeFn: (g: typeof gsap) => void) {
  const render = useRef(true);
  useEffect(() => {
    if (render.current) {
      render.current = false;
      animeFn(gsap);
    }
  });
}

export default useGsap;
