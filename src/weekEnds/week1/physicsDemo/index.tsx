import { OrbitControls } from '@react-three/drei';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import CustomCollider from './CustomColider';
import FirstLook from './FirstLook';

function PhysicsDemo() {
  const { performance } = useControls({
    performance: false,
  });

  const { sections, debug } = useControls('physics', {
    debug: false,
    sections: {
      options: ['Custom Collider', 'First Look', 'third Look'],
    },
  });

  return (
    <>
      {performance && <Perf position="top-left" />}
      <OrbitControls />
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={1.5} />
      {sections == 'first Look' && <FirstLook debug={debug} />}
      {sections == 'Custom Collider' && <CustomCollider debug={debug} />}
    </>
  );
}

export default PhysicsDemo;
