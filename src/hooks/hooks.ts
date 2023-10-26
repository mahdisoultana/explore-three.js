import { useRef } from 'react';

export function useTl(config?: gsap.TimelineVars | undefined) {
  const tl = useRef<gsap.core.Timeline>(gsap.timeline(config));

  return tl;
}
