import { useFrame } from '@react-three/fiber';
import {
  CuboidCollider,
  InstancedRigidBodies,
  Physics,
  RigidBody,
} from '@react-three/rapier';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';
function CustomCollider({ debug }: { debug: boolean }) {
  const cube = useRef<any>();

  const cubeJump = () => {
    cube.current.applyImpulse({ x: 0, y: 5, z: 0 });
    cube.current.applyTorqueImpulse({
      x: Math.random() - 0.5,
      y: Math.random() - 0.5,
      z: Math.random() - 0.5,
    });
  };
  const twister = useRef<any>();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();

    const eulerRotation = new THREE.Euler(0, time * 50, 0);
    const quaternionRotation = new THREE.Quaternion();
    quaternionRotation.setFromEuler(eulerRotation);
    twister.current.setNextKinematicRotation(quaternionRotation);

    const angle = time;
    const x = Math.cos(angle) * 3;
    const z = Math.sin(angle) * 3;
    twister.current.setNextKinematicTranslation({ x: x, y: 0.3, z: z });
  });

  const collisionEnter = (e: any) => {
    console.log('collisionEnter');
  };

  const cubes = useRef<any>();
  const cubesCount = 1000;
  const instances = useMemo(() => {
    const instances = [];

    for (let i = 0; i < cubesCount; i++) {
      instances.push({
        key: 'instance_' + i,
        position: [
          (Math.random() - 0.5) * 8,
          6 + i * 0.2,
          (Math.random() - 0.5) * 8,
        ],
        rotation: [Math.random(), Math.random(), Math.random()],
      });
    }

    return instances;
  }, []);

  return (
    <Physics debug={debug} gravity={[0, -9.81, 0]}>
      <RigidBody position={[-1, 2, 0]} colliders="ball" gravityScale={1}>
        <mesh castShadow>
          <meshStandardMaterial color="orange" />
          <sphereGeometry />
        </mesh>
      </RigidBody>
      <RigidBody
        ref={cube}
        position={[1, 2, 0]}
        gravityScale={1}
        restitution={0}
        colliders={false}
        onCollisionEnter={collisionEnter}
      >
        <mesh castShadow onClick={cubeJump}>
          <meshStandardMaterial color="hotpink" />
          <boxGeometry />
        </mesh>
        <CuboidCollider mass={1.5} args={[0.5, 0.5, 0.5]} />
      </RigidBody>
      <RigidBody
        type="fixed"
        scale={10}
        rotation-x={-Math.PI * 0.5}
        restitution={0}
        friction={0.7}
      >
        <mesh receiveShadow={true}>
          <planeGeometry />
          <meshStandardMaterial color="greenyellow" />
        </mesh>
      </RigidBody>

      <RigidBody
        ref={twister}
        position={[0, 0.2, 0]}
        friction={0}
        type="kinematicPosition"
      >
        <mesh castShadow scale={[0.4, 0.4, 3]}>
          <boxGeometry />
          <meshStandardMaterial color="red" />
        </mesh>
      </RigidBody>
      <RigidBody type="fixed">
        <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, 5.5]} />{' '}
        <CuboidCollider args={[5, 2, 0.5]} position={[0, 1, -5.5]} />{' '}
        <CuboidCollider args={[0.5, 2, 5]} position={[5.5, 1, 0]} />
        <CuboidCollider args={[0.5, 2, 5]} position={[-5.5, 1, 0]} />
      </RigidBody>

      <InstancedRigidBodies instances={instances}>
        <instancedMesh
          ref={cubes}
          castShadow
          receiveShadow
          args={[null, null, cubesCount]}
        >
          <boxGeometry />
          <meshStandardMaterial color="tomato" />
        </instancedMesh>
      </InstancedRigidBodies>
    </Physics>
  );
}

export default CustomCollider;
