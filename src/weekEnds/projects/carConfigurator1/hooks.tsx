import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function useScrollCar() {
  const { offset } = useScroll();
  useFrame(() => {
    console.log(offset);
  });
  return { offset };
}
