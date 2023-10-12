import { getProject } from '@theatre/core';

import { PerspectiveCamera, SheetProvider, editable as e } from '@theatre/r3f';
import { useEffect } from 'react';
import demoProjectState from './Demo Project.theatre-project-state.json';
function FirstLook() {
  // Vite

  const demoSheet = getProject('Demo Project', {
    state: demoProjectState,
  }).sheet('Demo Sheet');
  useEffect(() => {
    console.log('demoSheet', demoSheet);
    demoSheet.project.ready.then(() =>
      demoSheet.sequence.play({ iterationCount: Infinity }),
    );
  }, []);
  return (
    <SheetProvider sheet={demoSheet}>
      <PerspectiveCamera
        theatreKey="Camera"
        makeDefault
        position={[5, 5, -5]}
        fov={75}
      />
      <ambientLight />
      <e.pointLight theatreKey="PointLight" position={[10, 10, 10]} />
      <e.mesh theatreKey="Cube">
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </e.mesh>
    </SheetProvider>
  );
}

export default FirstLook;
