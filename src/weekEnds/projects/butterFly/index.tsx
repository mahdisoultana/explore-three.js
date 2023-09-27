import { Scroll, ScrollControls, Sparkles } from '@react-three/drei';
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing';
import { Model } from './butterFlyModel/Model';
import HtmlContent from './htmlContent';

function ButterFly() {
  return (
    <>
      <color args={['#070707']} attach="background" />
      <ambientLight intensity={5} color="white" />

      <directionalLight
        position={[0, 2, 0]}
        intensity={2.3}
        color="lightblue"
      />
      <EffectComposer>
        <Bloom
          intensity={2}
          luminanceThreshold={4}
          luminanceSmoothing={0.2}
          height={1000}
        />
        <DepthOfField focusDistance={1} focalLength={3} bokehScale={4} />
        <Vignette eskil={false} offset={0.1} darkness={1.5} />

        <Sparkles
          noise={0.01}
          scale={[20, 100, 20]}
          // position-y={1}
          color="lightblue"
          speed={1}
          count={500}
          size={35}
          opacity={0.1}
        />
        <ScrollControls pages={6} damping={0.2}>
          <Scroll>
            <Model />

            {/* </Suspense> */}
          </Scroll>
          <Scroll html style={{ width: '100%' }}>
            <HtmlContent />
          </Scroll>
        </ScrollControls>
      </EffectComposer>
    </>
  );
}

export default ButterFly;
