import { useAnimations, useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { val } from '@theatre/core';
import { useCurrentSheet } from '@theatre/r3f';
import { useEffect, useRef } from 'react';

function Model() {
  const box = useRef<any>();
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  const { animations, scene } = useGLTF('/models/medieval_fantasy_book.glb');
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const action = actions['The Life']!;
    action.fadeIn(0.5).play();
  }, []);

  // our callback will run on every animation frame
  useFrame(() => {
    // the length of our sequence
    const sequenceLength = val(sheet.sequence.pointer.length);
    console.log(sequenceLength);
    // update the "position" of the playhead in the sequence, as a fraction of its whole length
    sheet.sequence.position = scroll.offset * sequenceLength;
  });
  return (
    <>
      <primitive object={scene} />
    </>
  );
}

export default Model;
