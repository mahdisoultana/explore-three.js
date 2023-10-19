import { Environment } from '@react-three/drei';

function Lights() {
  const lightDarkValue = true ? '#000' : '#fff';
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

export default Lights;
