import { Model } from './Model';

import { getProject } from '@theatre/core';
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f';
import extension from '@theatre/r3f/dist/extension';
import studio from '@theatre/studio';

const carProject = getProject('carProject1');
const sheet = carProject.sheet('Car Animation');

function ModelAnime() {
  initializeStudio();

  return (
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
  );
}

export default ModelAnime;
function initializeStudio() {
  if (import.meta.env.DEV) {
    studio.initialize();
    studio.extend(extension);
  }
}
