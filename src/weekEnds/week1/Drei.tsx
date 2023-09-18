import {
  Float,
  Html,
  MeshReflectorMaterial,
  OrbitControls,
  PivotControls,
  Text,
} from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
export default function Drei() {
  const sphereRef = useRef<THREE.Mesh>(null!);
  const cubeRef = useRef<THREE.Mesh>(null!);
  return (
    <>
      <OrbitControls
        maxDistance={10}
        minDistance={3}
        enableDamping={false}
        makeDefault
      />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
        scale={100}
        fixed={true}
      >
        <mesh ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <Html
          position={[1, 1, 0]}
          distanceFactor={8}
          occlude={[sphereRef, cubeRef]}
          center
          className="text-light w-[200px] px-8 py-3 bg-white text-gray-900 rounded-full"
        >
          That's a sphere 👍
        </Html>
      </PivotControls>

      <mesh position-x={2} scale={1.5} ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="hotpink" />
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
      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={['#9381ff', '#ff4d6d', '#7ae582']}
        scale={100}
        fixed={true}
      >
        <Float
          speed={4} // Animation speed, defaults to 1
          rotationIntensity={2} // XYZ rotation intensity, defaults to 1
          //   floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
          //   floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
        >
          <Text
            fontSize={1}
            color="salmon"
            position-y={2}
            // font="./Kalam-Regular.ttf" extension should be .woff
          >
            I LOVE R3F
          </Text>
        </Float>
      </PivotControls>
    </>
  );
}
