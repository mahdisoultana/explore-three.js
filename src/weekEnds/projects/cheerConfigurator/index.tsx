import { MeshReflectorMaterial } from '@react-three/drei';
import { useRecoilValue } from 'recoil';
import Controls from './Controls';
import Light from './Light';
import Model from './Model';
import { amountAtom, coatMaterial, legsMaterial } from './atoms';

function CheerConfigurator() {
  const { type: coatType, value: coatValue } = useRecoilValue(coatMaterial);
  const { type: legsType, value: legsValue } = useRecoilValue(legsMaterial);
  return (
    <>
      <Light />
      <Controls>
        {/* <Suspense fallback={null}> */}
        <Chairs key={legsType + coatType + legsValue + coatValue} />
        {/* </Suspense> */}
      </Controls>
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
          color="#101010"
          mirror={1} // Strength of the reflections
          // Mirror environment, 0 = texture colors, 1 = pick up env colors
        />
      </mesh>
    </>
  );
}
function Chairs() {
  const amount = useRecoilValue(amountAtom);
  const chairs = [];
  for (let i = 0; i < amount; i++) {
    const pos = (i % 2) * 4;
    if (i < 2) {
      chairs.push(<Model key={i} position={[pos == 0 ? -2 : pos, -0.38, 1]} />);
    } else if (i >= 2 && i < 4) {
      chairs.push(<Model key={i} position={[pos, -0.38, -4]} />);
    } else if (i >= 4 && i < 6) {
      chairs.push(<Model key={i} position={[pos, -0.38, -8]} />);
    } else if (i >= 6 && i < 8) {
      chairs.push(<Model key={i} position={[pos, -0.38, -12]} />);
    } else if (i >= 8 && i <= 10) {
      chairs.push(<Model key={i} position={[pos, -0.38, -16]} />);
    }
  }

  return chairs;
}

export default CheerConfigurator;
