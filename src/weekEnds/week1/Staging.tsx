import {
  ContactShadows,
  Environment,
  OrbitControls,
  Sky,
  Stage,
  useHelper,
} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { useRef } from 'react';
import * as THREE from 'three';

function Staging() {
  const directionalLightRef = useRef<any>(null);
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');

  const { prefVisible } = useControls('perf', {
    prefVisible: true,
  });
  const { sunPosition } = useControls('sky', {
    sunPosition: { value: [1, 2, 3] },
  });
  const { intensityMap, envMapHeight, envMapRadius, envMapScale } = useControls(
    'environment',
    {
      intensityMap: { value: 1, min: 0, max: 5 },
      envMapHeight: { value: 7, min: 0, max: 100 },
      envMapRadius: { value: 28, min: 10, max: 1000 },
      envMapScale: { value: 100, min: 10, max: 1000 },
    },
  );
  const { opacity, blur, type, intensity } = useControls('stage', {
    opacity: { value: 1, min: 0, max: 1, step: 0.01 },
    blur: { value: 7, min: 0, max: 100 },
    intensity: { value: 1, min: 0, max: 10 },
    type: { options: ['contact', 'accumulative'] },
  });

  return (
    <>
      {/* <SoftShadows size={50} samples={17} /> */}
      {/* <color args={['ivory']} attach="background" /> */}
      {prefVisible && <Perf position="top-left" />}
      <OrbitControls />
      {/* <EnvironmentComponent
        envMapHeight={envMapHeight}
        envMapRadius={envMapRadius}
        envMapScale={envMapScale}
      /> */}
      {/* <BakeShadows />
      <directionalLight
        ref={directionalLightRef}
        castShadow
        position={sunPosition}
        intensity={1.5}
      />

      <SkyComponent sunPosition={sunPosition} />
      <ambientLight intensity={0.5} /> */}
      {/* <ContactShadow /> */}
      <Stage adjustCamera intensity={0.5} shadows="contact" environment="city">
        {/* <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        /> */}
        {/* <Cloud
          opacity={0.5}
          speed={0.4} // Rotation speed
          width={10} // Width of the full cloud
          depth={1.5} // Z-dir depth
          segments={20} // Number of particles
        />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        /> */}

        <mesh castShadow position={[3, 0.2, 0]}>
          <sphereGeometry />
          <meshStandardMaterial
            color="#F6D665"
            envMapIntensity={intensityMap}
          />
        </mesh>

        <Box intensityMap={intensityMap} />
      </Stage>

      {/* <mesh position-y={0} receiveShadow rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="#D8E98B" envMapIntensity={intensityMap} />
      </mesh> */}
    </>
  );
}
function Box({ intensityMap }: any) {
  const meshRef = useRef<any>();
  useFrame((state, delta) => {
    if (meshRef.current) {
      // delta is the time in seconds since the last frame
      const time = state.clock.elapsedTime;
      meshRef.current.position.x = Math.sin(time) * 0.2;
      meshRef.current.rotation.y += delta / 2;
    }
  });
  return (
    <mesh ref={meshRef} castShadow position-y={0.4}>
      <boxGeometry />
      <meshStandardMaterial color="#BC98E0" envMapIntensity={intensityMap} />
    </mesh>
  );
}

function ContactShadow() {
  const { color, opacity, blur } = useControls('contact shadows', {
    color: '#1d8f75',
    opacity: { value: 0.4, min: 0, max: 1 },
    blur: { value: 2.8, min: 0, max: 10 },
  });

  return (
    <ContactShadows
      position={[0, -0.99, 0]}
      scale={10}
      resolution={512}
      far={5}
      color={color}
      opacity={opacity}
      blur={blur}
      frames={1}
    />
  );
}

function SkyComponent({ sunPosition }: any) {
  return <Sky sunPosition={sunPosition} />;
}

function EnvironmentComponent({
  envMapHeight,
  envMapRadius,
  envMapScale,
}: any) {
  const { backgroundEnabled, redFloorPosition } = useControls('environment', {
    backgroundEnabled: true,
    redFloorPosition: {
      value: [0, 0, -5],
    },
  });

  return (
    <>
      <Environment
        background={backgroundEnabled}
        // files={[
        //   '/environmentMaps/2/px.jpg', // right
        //   '/environmentMaps/2/nx.jpg', // right
        //   '/environmentMaps/2/py.jpg',
        //   '/environmentMaps/2/ny.jpg',
        //   '/environmentMaps/2/pz.jpg',
        //   '/environmentMaps/2/nz.jpg',
        // ]}
        // files="/environmentMaps/the_sky_is_on_fire_2k.hdr"
        preset="sunset"
        ground={{
          height: envMapHeight,
          radius: envMapRadius,
          scale: envMapScale,
        }}
      >
        {/* <color args={['#000']} attach="background" />

        <Lightformer
          position-z={-5}
          scale={10}
          color="red"
          intensity={10}
          form="ring"
        /> */}
      </Environment>
    </>
  );
}

export default Staging;
