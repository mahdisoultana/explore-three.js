import {
  Center,
  OrbitControls,
  Text3D,
  useMatcapTexture,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Text3d() {
  const text = useControls('Text3d', {
    size: 0.75, // Font size
    height: 0.2, // Depth of the text
    curveSegments: 12, // Smoothness of the text
    bevelEnabled: true, // Turn on bevel
    bevelThickness: 0.02, // How deep into text bevel goes
    bevelSize: 0.02, // How far from text outline is bevel
    bevelOffset: 0, // How far from text outline bevel starts
    bevelSegments: 5, // Smoothness / Detail of bevel
  });

  const [matcapTexture] = useMatcapTexture('7B5254_E9DCC7_B19986_C8AC91', 256);
  console.log(matcapTexture);
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />
      <Center>
        <Text3D
          size={text.size}
          height={text.height}
          curveSegments={text.curveSegments}
          bevelEnabled={text.bevelEnabled}
          bevelThickness={text.bevelThickness}
          bevelSize={text.bevelSize}
          bevelOffset={text.bevelOffset}
          bevelSegments={text.bevelSegments}
          font="/fonts/helvetiker_regular.typeface.json"
        >
          HELLO R3F
          <meshMatcapMaterial matcap={matcapTexture} />
        </Text3D>
      </Center>
      <Donuts matcapTexture={matcapTexture} />
    </>
  );
}

export default Text3d;
const torusGeometry = new THREE.TorusGeometry(1, 0.6, 16, 32);
const material = new THREE.MeshMatcapMaterial();

function Donuts({ matcapTexture }: any) {
  const { animationSpeed, count } = useControls('Donuts', {
    animationSpeed: 0.2,
    count: 100,
  });

  useEffect(() => {
    matcapTexture.colorSpace = THREE.SRGBColorSpace;
    matcapTexture.needsUpdate = true;

    material.matcap = matcapTexture;
    material.needsUpdate = true;
  }, []);
  const donuts = useRef<any>([]);

  useFrame((state, delta) => {
    for (const donut of donuts.current) {
      donut.rotation.y += delta * animationSpeed;
    }
  });

  const tempArray = [...Array(count)].map((_, index) => (
    <mesh
      key={index}
      ref={(ref) => {
        donuts.current[index] = ref;
      }}
      position={[
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      ]}
      scale={0.2 + Math.random() * 0.2}
      rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
      geometry={torusGeometry}
      material={material}
    ></mesh>
  ));
  return tempArray;
}
