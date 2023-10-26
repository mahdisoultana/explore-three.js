import { Model } from './Model';

import { getProject } from '@theatre/core';
import { PerspectiveCamera, SheetProvider } from '@theatre/r3f';
import extension from '@theatre/r3f/dist/extension';
import studio from '@theatre/studio';
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { creditAtom } from '../../../components/shared/Creadit';
import useScrollPage from '../../../hooks/useScrollPage';
import { pageAtom } from './atoms';

const carProject = getProject('carProject1');
export const sheet = carProject.sheet('Car Animation');

function ModelAnime() {
  initializeStudio();
  const scroll = useScrollPage();
  const page = useRecoilValue(pageAtom);
  const creditOpen = useRecoilValue(creditAtom);
  useEffect(() => {
    if (!creditOpen) sheet.sequence.position = scroll * 32.3;
  }, [scroll]);
  useEffect(() => {
    const s = sheet.sequence;
    if (sheet.sequence.position >= 32.3) {
      if (page == 0) {
        s.play({ range: [32.3, 33.3] });
      }
    }

    if (page == 1) {
      s.play({ range: [32.3, 34.5] });
    }
    if (page == 2) {
      s.play({ range: [34.6, 39] });
    }
    if (page == 3) {
      s.play({ range: [39, 42] });
    }
    if (page == 4) {
      s.play({ range: [42, 48] });
    }
    if (page == 5) {
      s.play({ range: [48, 55.1] });
    }
  }, [page]);
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
