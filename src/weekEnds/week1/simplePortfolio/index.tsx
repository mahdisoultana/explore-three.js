import {
  ContactShadows,
  Environment,
  Float,
  Html,
  PresentationControls,
  Text,
  useGLTF,
} from '@react-three/drei';
import { Suspense } from 'react';

// useGLTF.preload(
//   'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf',
// );
function SimplePortfolio() {
  return (
    <>
      <color args={['#241a1a']} attach="background" />
      <Environment preset="city" />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 400 }}
      >
        <Float rotationIntensity={0.4}>
          <rectAreaLight
            width={2.5}
            height={1.65}
            intensity={65}
            color={'#ff6900'}
            rotation={[-0.1, Math.PI, 0]}
            position={[0, 0.55, -1.15]}
          />
          <Suspense fallback={null}>
            <Computer />
          </Suspense>
          <Suspense fallback={null}>
            <Name />
          </Suspense>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
}
function Name() {
  return (
    <Text
      maxWidth={4}
      fontSize={0.5}
      position={[2, 0.75, 0.75]}
      rotation-y={-1.25}
    >
      -mahdisoultana- BRUNO SIMON
    </Text>
  );
}
function Computer() {
  const computer = useGLTF(
    'https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf',
  );
  return (
    <primitive object={computer.scene} position-y={-1.2}>
      <Html
        transform
        wrapperClass="htmlScreen"
        distanceFactor={1.17}
        position={[0, 1.56, -1.4]}
        rotation-x={-0.256}
      >
        <iframe src="https://bruno-simon.com/html/" />
      </Html>
    </primitive>
  );
}

export default SimplePortfolio;
