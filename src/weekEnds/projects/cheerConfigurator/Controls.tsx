import { OrbitControls, PresentationControls } from '@react-three/drei';

function Controls({ children }: any) {
  return (
    <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={true} // Spin globally or by dragging the model
      // cursor={true} // Whether to toggle cursor style on drag
      // snap={false} // Snap-back to center (can also be a spring config)
      speed={1} // Speed factor
      // Zoom factor when half the polar-max is reached
      rotation={[0, 0, 0]} // Default rotation
      polar={[-0.15, 0]} // Vertical limits
      azimuth={[-Infinity, Infinity]} // Horizontal limits
      // config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
    >
      <OrbitControls enableRotate={false} maxDistance={10} minDistance={4} />
      {children}
    </PresentationControls>
  );
}

export default Controls;
