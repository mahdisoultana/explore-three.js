import { Environment } from '@react-three/drei';

function Light() {
  return (
    <>
      <fog attach="fog" near={-5} far={40} color="black" />
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 10, 0]} intensity={4} />
      <color args={['#000']} attach={'background'} />
      <Environment preset="city" />
    </>
  );
}

export default Light;
