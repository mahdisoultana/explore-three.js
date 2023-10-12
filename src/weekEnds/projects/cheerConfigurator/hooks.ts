import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import * as THREE from 'three';
import { coatMaterial, legsMaterial } from './atoms';
import useTexturesModel from './useTexturesModel';
export const useControls = () => {
  const [rotate, setRotate] = useState(false);
  const [coat, setCoat] = useState(false);
  const [wood, setWood] = useState(false);
  return { rotate, setRotate, coat, setCoat, wood, setWood };
};

export function useCoatTexture() {
  const fabric1 = useTexturesModel('/models/chair/fabric/1');
  const fabric2 = useTexturesModel('/models/chair/fabric/2');
  const fabric3 = useTexturesModel('/models/chair/fabric/3', {
    metallic: '/models/chair/fabric/3/metallic.jpg',
  });

  const leather1 = useTexturesModel('/models/chair/leather/1');
  const leather2 = useTexturesModel('/models/chair/leather/2');
  const Fabricmaterials = [fabric1, fabric2, fabric3];
  const Leathermaterials = [leather1, leather2];
  Fabricmaterials.forEach((material) => {
    Object.values(material).forEach((value, key) => {
      value.repeat.set(4, 4);

      value.wrapS = value.wrapT = THREE.RepeatWrapping;
    });
  });
  Leathermaterials.forEach((material) => {
    Object.values(material).forEach((value) => {
      value.repeat.set(3, 4);
      value.wrapS = value.wrapT = THREE.RepeatWrapping;
    });
  });
  const coatM = useRecoilValue(coatMaterial);
  if (coatM.type === 'fabric') {
    return Fabricmaterials[coatM.value - 1];
  } else {
    return Leathermaterials[coatM.value - 1];
  }
}
export function useLegsTexture() {
  const metal1 = useTexturesModel('/models/chair/metal/1', {
    metallic: '/models/chair/metal/1/metallic.jpg',
  });
  const metal2 = useTexturesModel('/models/chair/metal/2', {
    metallic: '/models/chair/metal/2/metallic.jpg',
  });
  const metal3 = useTexturesModel('/models/chair/metal/3', {
    metallic: '/models/chair/metal/3/metallic.jpg',
  });
  const metalMaterials = [metal1, metal2, metal3];
  metalMaterials.forEach((material) => {
    Object.values(material).forEach((value) => {
      value.repeat.set(2, 2);
      value.wrapS = value.wrapT = THREE.RepeatWrapping;
    });
  });

  const wood1 = useTexturesModel('/models/chair/wood/1');
  const wood2 = useTexturesModel('/models/chair/wood/2');
  const wood3 = useTexturesModel('/models/chair/wood/3');
  const woodMaterials = [wood1, wood2, wood3];
  woodMaterials.forEach((material) => {
    Object.values(material).forEach((value) => {
      value.repeat.set(3, 3);
      value.wrapS = value.wrapT = THREE.RepeatWrapping;
    });
  });

  const legsM = useRecoilValue(legsMaterial);

  if (legsM.type === 'metal') {
    return metalMaterials[legsM.value - 1];
  } else {
    {
      return woodMaterials[legsM.value - 1];
    }
  }
}
