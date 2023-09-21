import { OrbitControls } from '@react-three/drei';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Glitch,
  Noise,
  SSR,
  Vignette,
} from '@react-three/postprocessing';
import { useControls } from 'leva';
import { BlendFunction } from 'postprocessing';
import { Perf } from 'r3f-perf';
import { useRef } from 'react';
import Drunk from './seperate/Drunk';

function PostProcessing() {
  return (
    <>
      <color args={['#fff']} attach="background" />
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={2.5} />

      <mesh castShadow position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial
          color="mediumpurple"
          emissive={'mediumpurple'}
          toneMapped={true}
          emissiveIntensity={4}
        />
      </mesh>

      <Plane />
      <Effects />
    </>
  );
}
function Plane() {
  const { color, metalness, roughness, position } = useControls(
    'Plane',
    {
      color: '#555555',
      metalness: 0,
      roughness: 0,
      position: [0, -1],
    },
    { collapsed: true },
  );
  return (
    <mesh
      receiveShadow
      position={[position[0], position[1], 0]}
      rotation-x={-Math.PI * 0.5}
      scale={10}
    >
      <planeGeometry />
      <meshStandardMaterial
        color={color}
        metalness={metalness}
        roughness={roughness}
      />
    </mesh>
  );
}

function Effects() {
  const ssrProps = useControls(
    'SSR Effect',
    {
      temporalResolve: true,
      STRETCH_MISSED_RAYS: true,
      USE_MRT: true,
      USE_NORMALMAP: true,
      USE_ROUGHNESSMAP: true,
      ENABLE_JITTERING: true,
      ENABLE_BLUR: true,
      temporalResolveMix: { value: 0.9, min: 0, max: 1 },
      temporalResolveCorrectionMix: { value: 0.25, min: 0, max: 1 },
      maxSamples: { value: 0, min: 0, max: 1 },
      resolutionScale: { value: 1, min: 0, max: 1 },
      blurMix: { value: 0.5, min: 0, max: 1 },
      blurKernelSize: { value: 8, min: 0, max: 8 },
      blurSharpness: { value: 0.5, min: 0, max: 1 },
      rayStep: { value: 0.3, min: 0, max: 1 },
      intensity: { value: 1, min: 0, max: 5 },
      maxRoughness: { value: 0.1, min: 0, max: 1 },
      jitter: { value: 0.7, min: 0, max: 5 },
      jitterSpread: { value: 0.45, min: 0, max: 1 },
      jitterRough: { value: 0.1, min: 0, max: 1 },
      roughnessFadeOut: { value: 1, min: 0, max: 1 },
      rayFadeOut: { value: 0, min: 0, max: 1 },
      MAX_STEPS: { value: 20, min: 0, max: 20 },
      NUM_BINARY_SEARCH_STEPS: { value: 5, min: 0, max: 10 },
      maxDepthDifference: { value: 3, min: 0, max: 10 },
      maxDepth: { value: 1, min: 0, max: 1 },
      thickness: { value: 10, min: 0, max: 10 },
      ior: { value: 1.45, min: 0, max: 2 },
    },
    {
      collapsed: true,
    },
  );
  const { vignette, glitch, noise, bloom, depthOfField, sSR, drunk } =
    useControls('effects', {
      vignette: true,
      glitch: true,
      noise: false,
      bloom: true,
      depthOfField: false,
      sSR: true,
      drunk: false,
    });
  const drunkRef = useRef<any>();
  const drunkProps = useControls(
    'Drunk Effect',
    {
      frequency: { value: 2, min: 1, max: 20 },
      amplitude: { value: 0.1, min: 0, max: 1 },
    },
    {
      collapsed: true,
    },
  );
  return (
    <EffectComposer multisampling={4}>
      {vignette && (
        <Vignette
          offset={0.3}
          darkness={0.9}
          blendFunction={BlendFunction.NORMAL}
        />
      )}

      {glitch && (
        <Glitch delay={[1, 10]} duration={[0.1, 0.5]} strength={[0.2, 1]} />
      )}

      {noise && <Noise blendFunction={BlendFunction.SOFT_LIGHT} />}

      {bloom && <Bloom intensity={2.5} />}

      {depthOfField && (
        <DepthOfField
          focusDistance={0.025}
          focalLength={0.025}
          bokehScale={6}
        />
      )}
      {sSR && <SSR {...ssrProps} />}

      {drunk && (
        <Drunk
          ref={drunkRef}
          {...drunkProps}
          blendFunction={BlendFunction.DARKEN}
        />
      )}
    </EffectComposer>
  );
}

export default PostProcessing;
