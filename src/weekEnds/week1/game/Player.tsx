import { useKeyboardControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { RigidBody, useRapier } from '@react-three/rapier';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as THREE from 'three';
import { countState, phaseState } from './atoms';
export default function Player() {
  const [subscribeKeys, getKeys] = useKeyboardControls();
  const { rapier, world } = useRapier();
  const [smoothedCameraPosition] = useState(
    () => new THREE.Vector3(50, 50, 50),
  );
  const [smoothedCameraTarget] = useState(() => new THREE.Vector3());
  const body = useRef<any>();
  const jump = () => {
    const origin = body.current.translation();
    origin.y -= 0.31;
    const direction = { x: 0, y: -1, z: 0 };
    const ray = new rapier.Ray(origin, direction);

    const hit: any = world.castRay(ray, 10, true);

    if (hit.toi < 0.15) {
      body.current.applyImpulse({ x: 0, y: 0.5, z: 0 });
    }
  };
  const [phase, setPhase] = useRecoilState(phaseState);
  const [blocksCount, setBlocksCount] = useRecoilState(countState);
  // console.log({ phase });
  useEffect(() => {
    const unsubscribeJump = subscribeKeys(
      (state) => state.jump,
      (value) => {
        if (value) jump();
      },
    );
    const unsubscribeAnyKey = subscribeKeys(() => {
      if (phase === 'ready') {
        setPhase('start');
      }
    });
    return () => {
      unsubscribeJump();
      unsubscribeAnyKey();
    };
  }, [phase]);
  useFrame((state, delta) => {
    const { forward, backward, leftward, rightward } = getKeys();

    const impulse = { x: 0, y: 0, z: 0 };
    const torque = { x: 0, y: 0, z: 0 };

    const impulseStrength = 0.6 * delta;
    const torqueStrength = 0.2 * delta;

    if (forward) {
      impulse.z -= impulseStrength;
      torque.x -= torqueStrength;
    }

    if (rightward) {
      impulse.x += impulseStrength;
      torque.z -= torqueStrength;
    }

    if (backward) {
      impulse.z += impulseStrength;
      torque.x += torqueStrength;
    }

    if (leftward) {
      impulse.x -= impulseStrength;
      torque.z += torqueStrength;
    }
    body.current?.applyImpulse(impulse);
    body.current?.applyTorqueImpulse(torque);

    //   camera
    const bodyPosition = body.current?.translation();

    // console.log(bodyPosition);
    const cameraPosition = new THREE.Vector3();
    cameraPosition.copy(bodyPosition);
    cameraPosition.z += 2.25;
    cameraPosition.y += 0.65;

    const cameraTarget = new THREE.Vector3();
    cameraTarget.copy(bodyPosition);
    cameraTarget.y += 0.25;

    smoothedCameraPosition.lerp(cameraPosition, 5 * delta);
    smoothedCameraTarget.lerp(cameraTarget, 5 * delta);

    state.camera.position.copy(smoothedCameraPosition);
    state.camera.lookAt(smoothedCameraTarget);

    //controls game

    if (bodyPosition.z < -(blocksCount * 4 + 2)) {
      if (phase === 'start') {
        console.log('the end');
        setPhase('end');
      }
    }
    if (bodyPosition.y < -4) {
      if (phase === 'start' || phase === 'end') {
        console.log('the restart');
        setPhase('restart');
      }
    }
  });

  // Rest Game

  useEffect(() => {
    if (phase === 'restart') {
      reset();
    }
  }, [phase]);

  const reset = () => {
    body.current.setTranslation({ x: 0, y: 1.4, z: 0 });
    body.current.setLinvel({ x: 0, y: 0, z: 0 });
    body.current.setAngvel({ x: 0, y: 0, z: 0 });
    setPhase('ready');
  };

  return (
    <RigidBody
      colliders="ball"
      restitution={0.2}
      friction={1}
      position={[0, 1, 0]}
      canSleep={false}
      ref={body}
      linearDamping={0.5}
      angularDamping={0.5}
    >
      <mesh castShadow>
        <icosahedronGeometry args={[0.3, 1]} />
        <meshStandardMaterial color="mediumpurple" flatShading />
      </mesh>
    </RigidBody>
  );
}
