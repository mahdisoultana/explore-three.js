import { Scroll, ScrollControls } from '@react-three/drei';
import HtmlContent from './HtmlContent';
import Light from './Light';
import { RobotModel } from './RobotModel';

function Robot3d() {
  return (
    <>
      <Light />
      <ScrollControls pages={4} damping={0.1}>
        <RobotModel />

        <Scroll html className="w-[100vw]">
          <HtmlContent />
        </Scroll>
      </ScrollControls>
    </>
  );
}

export default Robot3d;
