import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import useTexturesModel from '../../../hooks/useTexturesModel';
export function useScrollCar() {
  const { offset } = useScroll();
  useFrame(() => {
    console.log(offset);
  });
  return { offset };
}
export function useTireM() {
  const tireMat = useTexturesModel('/models/cars/car1/mat/tire/1', {
    height: '/models/cars/car1/mat/tire/1/height.jpg',
  });
  [tireMat].forEach((material) => {
    Object.values(material).forEach((value) => {
      value.repeat.set(1, 6);
      value.rotation = Math.PI / 2;
      value.wrapS = value.wrapT = THREE.RepeatWrapping;
    });
  });
  return { tireMat };
}
