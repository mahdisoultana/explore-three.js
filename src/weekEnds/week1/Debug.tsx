import { MeshReflectorMaterial, OrbitControls } from '@react-three/drei';
import { button, useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { useRef } from 'react';
import * as THREE from 'three';
export default function Debug() {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const cubeRef = useRef<THREE.Mesh>(null!);
  const { position, color, visible } = useControls('cube', {
    myInterval: {
      min: 0,
      max: 10,
      value: [4, 5],
    },
    position: {
      value: { x: -2, y: 0 },
      step: 0.01,
      joystick: 'invertY',
    },

    color: '#ff0000',
    visible: true,
    animate: button(() => {
      console.log('animate');
    }),
  });

  const { scale } = useControls('sphere', {
    scale: {
      value: { x: 1, y: 1 },
      step: 0.01,
      joystick: 'invertY',
    },
    choice: { options: ['walk', 'run', 'idle'] },
  });
  const { perfVisible } = useControls('Performance', { perfVisible: true });

  return (
    <>
      {perfVisible && <Perf openByDefault={true} position="top-left" />}
      <OrbitControls
        maxDistance={10}
        minDistance={3}
        enableDamping={false}
        makeDefault
      />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh
        visible={visible}
        position={[position.x, position.y, 0]}
        scale={1.5}
        ref={cubeRef}
      >
        <boxGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh ref={sphereRef} scale={[scale.x, scale.y, 1]}>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          mirror={0.5}
          resolution={512}
          blur={[10000, 10000]}
          mixBlur={1}
          color="greenyellow"
        />
      </mesh>
    </>
  );
}
