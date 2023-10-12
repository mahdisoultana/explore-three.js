import { ScrollControls } from '@react-three/drei';
import { getProject } from '@theatre/core';
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f';
// import extension from '@theatre/r3f/dist/extension';
// import studio from '@theatre/studio';
import Lights from './Lights';
import Model from './model';
import state from './state.json';
import './style.css';
function CameraFly() {
  // initializeStudio();

  const project = getProject('project', { state });
  const sheet = project.sheet('Camera Fly');

  return (
    <>
      <Lights />
      <ScrollControls pages={20} damping={0.8}>
        <SheetProvider sheet={sheet}>
          <PerspectiveCamera
            theatreKey="Camera"
            makeDefault
            position={[0, 0, 0]}
            fov={90}
            near={0.1}
            far={70}
          />

          <Model />
        </SheetProvider>
      </ScrollControls>
    </>
  );
}

export default CameraFly;

function initializeStudio() {
  if (import.meta.env.DEV) {
    studio.initialize();
    studio.extend(extension);
  }
}
