import { useRecoilValue } from 'recoil';
import Controls from './Controls';
import Floor from './Floor';
import Light from './Light';
import Model from './Model';
import { amountAtom } from './atoms';

function CheerConfigurator() {
  return (
    <>
      <Light />
      <Controls>
        {/* <Suspense fallback={null}> */}
        <Chairs />
        {/* </Suspense> */}
      </Controls>
      <Floor />
    </>
  );
}
function Chairs() {
  const amount = useRecoilValue(amountAtom);
  const chairs = [];
  for (let i = 0; i < amount; i++) {
    const pos = (i % 2) * 4;
    if (i < 2) {
      chairs.push(<Model key={i} position={[pos == 0 ? -2 : pos, -0.38, 1]} />);
    } else if (i >= 2 && i < 4) {
      chairs.push(<Model key={i} position={[pos, -0.38, -4]} />);
    } else if (i >= 4 && i < 6) {
      chairs.push(<Model key={i} position={[pos, -0.38, -8]} />);
    } else if (i >= 6 && i < 8) {
      chairs.push(<Model key={i} position={[pos, -0.38, -12]} />);
    } else if (i >= 8 && i <= 10) {
      chairs.push(<Model key={i} position={[pos, -0.38, -16]} />);
    }
  }

  return chairs;
}

export default CheerConfigurator;
