import { Environment } from '@react-three/drei';
import { useRecoilValue } from 'recoil';
import { LightDarkAtom } from '../../../components/shared/LightDarkButton';

function Light() {
  const lightDark = useRecoilValue(LightDarkAtom);
  const lightDarkValue = lightDark ? '#000' : '#fff';
  return (
    <>
      <fog attach="fog" near={1} far={60} color={lightDarkValue} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[0, 10, 0]}
        intensity={3}
        color={lightDarkValue}
      />
      <color args={[lightDarkValue]} attach={'background'} />

      <Environment preset="city" />
    </>
  );
}

export default Light;
