import { useKeyboardControls } from '@react-three/drei';
import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useElapsedTime } from 'use-elapsed-time';
import { countState, phaseState } from './atoms';

function Interface() {
  const forward = useKeyboardControls((state) => state.forward);
  const backward = useKeyboardControls((state) => state.backward);
  const leftward = useKeyboardControls((state) => state.leftward);
  const rightward = useKeyboardControls((state) => state.rightward);
  const jump = useKeyboardControls((state) => state.jump);
  const [phase, setPhase] = useRecoilState(phaseState);
  const [count, setCountState] = useRecoilState(countState);

  return (
    <div className="fixed inset-0   pointer-events-none">
      <Timer />
      {phase === 'end' && (
        <p className="text-white  text-6xl  bg-gray-700/70 w-full text-center   mt-20   ">
          <button
            className="px-8     py-3 rounded   text-white "
            onClick={() => {
              setPhase('restart');
              setCountState((s) => s + 5);
            }}
          >
            Next Level <span className="font-mono">{count / 5}</span>
            <span className="ml-5   px-5  border-blue-500   hover:text-white text-blue-500">
              Play
            </span>
          </button>
        </p>
      )}
      <div className="w-[200px] h-[150px] grid grid-cols-3 grid-rows-3 gap-1  absolute bottom-4 left-1/2 -translate-x-1/2 m-auto">
        <div className=" bg-gray-300/0 flex items-center justify-center" />

        <div
          className={` bg-gray-300/30  hover:opacity-40 border-2 flex items-center justify-center ${
            forward && 'opacity-90 border-red-500'
          }`}
        ></div>
        <div className="bg-gray-300/0 flex items-center justify-center" />

        <div
          className={` bg-gray-300/30  hover:opacity-40 border-2 flex items-center justify-center ${
            leftward && 'opacity-90 border-red-500'
          }`}
        ></div>
        <div
          className={` bg-gray-300/30  hover:opacity-40 border-2 flex items-center justify-center ${
            backward && 'opacity-90 border-red-500'
          }`}
        ></div>
        <div
          className={`bg-gray-300/30  hover:opacity-40 border-2 flex items-center justify-center ${
            rightward && 'opacity-90 border-red-500'
          }`}
        ></div>
        <div
          className={`bg-gray-300/30  hover:opacity-40 col-span-3 border-2 flex items-center justify-center ${
            jump && 'opacity-90 border-red-500'
          }`}
        ></div>
      </div>
    </div>
  );
}

export default Interface;

function Timer() {
  const phase = useRecoilValue(phaseState);

  const { elapsedTime, reset } = useElapsedTime({
    isPlaying: phase == 'start',
  });
  useEffect(() => {
    if (phase === 'restart') {
      reset();
    }
  }, [phase]);
  return (
    <p className="text-white  text-4xl  bg-gray-700/70 w-full mt-10  h-[50px] flex items-center justify-center   ">
      <span className="font-mono mr-4"> {elapsedTime.toFixed(2)}</span>s{' '}
    </p>
  );
}
