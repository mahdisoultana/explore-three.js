import { Physics, RigidBody } from '@react-three/rapier';

function FirstLook({ debug }: { debug: boolean }) {
  return (
    <Physics debug={debug}>
      <RigidBody colliders="ball">
        <mesh castShadow position={[0, 4, 0]}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </RigidBody>
      <RigidBody colliders="trimesh">
        <mesh
          castShadow
          position={[0, 1, -0.25]}
          rotation={[Math.PI * 0.1, 0, 0]}
        >
          <torusGeometry args={[1, 0.5, 16, 32]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed">
        <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
          <planeGeometry />
          <meshStandardMaterial color="greenyellow" />
        </mesh>
      </RigidBody>
    </Physics>
  );
}

export default FirstLook;
