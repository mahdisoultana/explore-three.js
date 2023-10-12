import {
  Center,
  OrbitControls,
  Sparkles,
  shaderMaterial,
  useGLTF,
  useTexture,
} from '@react-three/drei';
import { extend, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';
import portalFragmentShader from './shaders/portal/fragment.glsl';
import portalVertexShader from './shaders/portal/vertex.glsl';
const PortalMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorStart: new THREE.Color('#ffffff'),
    uColorEnd: new THREE.Color('#000000'),
  },
  portalVertexShader,
  portalFragmentShader,
);
extend({ PortalMaterial });
function PortalScene() {
  return (
    <>
      <color args={['#030202']} attach="background" />
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <Model />
    </>
  );
}

useGLTF.preload('/models/backed/portal.glb');
function Model() {
  const { nodes } = useGLTF('/models/backed/portal.glb');
  const bakedTexture = useTexture('/models/backed/baked.jpg');
  bakedTexture.flipY = false;

  const portalMaterial = useRef<any>();

  useFrame((state, delta) => {
    portalMaterial.current.uTime += delta;
  });
  return (
    <Center>
      <mesh geometry={nodes.baked.geometry}>
        <meshBasicMaterial map={bakedTexture} />
      </mesh>
      <mesh
        geometry={nodes.poleLightA.geometry}
        position={nodes.poleLightA.position}
      >
        <meshBasicMaterial color="#ffffe5" />
      </mesh>
      <mesh
        geometry={nodes.poleLightB.geometry}
        position={nodes.poleLightB.position}
      >
        <meshBasicMaterial color="#ffffe5" />
      </mesh>
      <mesh
        geometry={nodes.portalLight.geometry}
        position={nodes.portalLight.position}
        rotation={nodes.portalLight.rotation}
      >
        <portalMaterial ref={portalMaterial} />
      </mesh>
      <Sparkles
        scale={[4, 2, 4]}
        position-y={1}
        speed={0.2}
        count={40}
        size={6}
      />
    </Center>
  );
}

export default PortalScene;
