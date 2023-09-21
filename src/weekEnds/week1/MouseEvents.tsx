import { Box, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';

const MotionBox = motion(Box);
function MouseEvents() {
  const cubeRef = useRef(null);
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={1.5} position={[1, 2, 3]} />
      <MotionBox
        ref={cubeRef}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          cubeRef.current.material.color.set(
            `hsl(${Math.random() * 360}, 100%, 75%)`,
          );
        }}
        onPointerEnter={() => {
          document.body.style.cursor = 'pointer';
        }}
        onPointerLeave={() => {
          document.body.style.cursor = 'default';
        }}
        animate={{
          rotateY: 360,

          transition: {
            duration: 360,
            repeat: Infinity,
            type: 'just',
            repeatType: 'loop',
            ease: 'linear',
          },
        }}
      >
        <meshStandardMaterial attach="material" color="hotpink" />
      </MotionBox>
    </>
  );
}

export default MouseEvents;
