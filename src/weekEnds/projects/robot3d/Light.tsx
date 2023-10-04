import { Environment } from '@react-three/drei';

function Light() {
  return (
    <>
      <color attach="background" args={['#1B2123']} />
      <ambientLight intensity={2} />
      <spotLight
        position={[0, 2, 0]}
        penumbra={1}
        castShadow
        intensity={2}
        shadow-bias={-0.0001}
      />
      <Environment preset={'studio'} />
    </>
  );
}

export default Light;
