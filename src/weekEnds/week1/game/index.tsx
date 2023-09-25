import { Physics } from '@react-three/rapier';

import { useRecoilValue } from 'recoil';
import { Level } from './Level';
import Light from './Light';
import Player from './Player';
import { countState, phaseState } from './atoms';

function Game() {
  const count = useRecoilValue(countState);
  const phase = useRecoilValue(phaseState);
  const restarted = phase === 'restart';

  return (
    <>
      <color args={['#bdedfc']} attach="background" />
      <Physics debug={false} key={count}>
        <Light />
        <Level count={count} restarted={restarted} />
        <Player />
      </Physics>
    </>
  );
}

export default Game;
