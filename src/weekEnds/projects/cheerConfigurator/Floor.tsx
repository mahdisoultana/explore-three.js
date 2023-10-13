import { MeshReflectorMaterial } from '@react-three/drei';
import { useRecoilValue } from 'recoil';
import { LightDarkAtom } from '../../../components/shared/LightDarkButton';

function Floor() {
  const lightDark = useRecoilValue(LightDarkAtom);
  const lightDarkValue = lightDark ? '#101010' : '#f1f1f1';
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position-y="-.5"
      onPointerEnter={(e) => {
        e.stopPropagation();
      }}
      onPointerLeave={(e) => {
        e.stopPropagation();
      }}
    >
      <planeGeometry args={[100, 100]} />
      {!lightDark ? (
        <MeshReflectorMaterial
          color={lightDarkValue}
          mirror={1} // Strength of the reflections
          // Mirror environment, 0 = texture colors, 1 = pick up env colors
        />
      ) : (
        <MeshReflectorMaterial
          blur={[300, 100]} // Blur ground reflections (width, height), 0 skips blur
          resolution={2048} // Off-buffer resolution, lower=faster, higher=better quality, slower
          mixBlur={1} // How much blur mixes with surface roughness (default = 1)
          mixStrength={20}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4} // Strength of the reflections
          maxDepthThreshold={1.4}
          metalness={0.5}
          color={'#101010'}
          mirror={1} // Strength of the reflections
          // Mirror environment, 0 = texture colors, 1 = pick up env colors
        />
      )}
    </mesh>
  );
}

export default Floor;
