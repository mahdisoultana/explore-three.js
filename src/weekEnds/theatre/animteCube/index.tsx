import { getProject } from '@theatre/core';
import { PerspectiveCamera, SheetProvider, editable } from '@theatre/r3f';
import extension from '@theatre/r3f/dist/extension';
import studio from '@theatre/studio';
import { useRef } from 'react';

function AnimateCube() {
  const project = getProject('project');
  const sheet = project.sheet('Camera Fly');
  if (import.meta.env.DEV) {
    studio.initialize();
    studio.extend(extension);
  }
  const box = useRef<any>();

  return (
    <SheetProvider sheet={sheet}>
      <PerspectiveCamera theatreKey="camera" position={[0, 1, 8]} makeDefault />
      <editable.mesh theatreKey="box" ref={box}>
        <boxGeometry args={[1, 1, 1]} />
        <meshNormalMaterial />
      </editable.mesh>
    </SheetProvider>
  );
}

export default AnimateCube;
