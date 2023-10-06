import { MeshReflectorMaterial } from '@react-three/drei';
import { Suspense } from 'react';
import Controls from './Controls';
import Light from './Light';
import Model from './Model';

function CheerConfigurator() {
  return (
    <>
      <Light />
      <Controls>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Controls>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y="-.5">
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 100]} // Blur ground reflections (width, height), 0 skips blur
          resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mixBlur={1} // How much blur mixes with surface roughness (default = 1)
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4} // Strength of the reflections
          maxDepthThreshold={1.4}
          metalness={0.5}
          color="#101010"
          mirror={0.4} // Strength of the reflections
          // Mirror environment, 0 = texture colors, 1 = pick up env colors
        />
      </mesh>
    </>
  );
}

export default CheerConfigurator;
