import { useRecoilValue } from 'recoil';
import { bodyColors } from './Model';
import { selectedAtom } from './atoms';
import './style.css';
function Nav() {
  const { body } = useRecoilValue(selectedAtom);
  return (
    <nav
      className="fixed top-6 left-6 font-bold text-xl  italic green"
      style={{
        color: bodyColors[body],
        textShadow: `0px 1px 4px ${bodyColors[body]}80 , 0px 0px 1px black`,
      }}
    >
      <p>Speedy</p>
    </nav>
  );
}

export default Nav;
