import { Environment, OrbitControls } from '@react-three/drei';
import { useRecoilValue } from 'recoil';
import { LightDarkAtom } from '../../../components/shared/LightDarkButton';
function Lights() {
  const light = useRecoilValue(LightDarkAtom);
  const lightDarkValue = light ? '#f0f0f0' : '#0f0f0f';

  return (
    <>
      <fog attach="fog" near={1} far={90} color={lightDarkValue} />
      <ambientLight intensity={0.5} />
      {/* <directionalLight
        position={[4, 10, 4]}
        intensity={1.5}
        color={lightDarkValue}
      /> */}
      <color args={[lightDarkValue]} attach={'background'} />

      {/* <Plane scale={100} rotation={[-Math.PI / 2, 0, -Math.PI]} position-y="-1">
        <meshStandardMaterial color={lightDarkValue} />
      </Plane> */}
      <OrbitControls />
      <Environment preset={light ? 'studio' : 'studio'} blur={1} />
      {/* <ContactShadows
        renderOrder={2}
        frames={1}
        resolution={1024}
        scale={120}
        blur={2}
        opacity={0.6}
        far={100}
      /> */}
    </>
  );
}

export default Lights;
