function Lights() {
  const bgColor = '#84a4f4';
  return (
    <>
      <color attach="background" args={[bgColor]} />
      <fog attach="fog" color={bgColor} near={-5} far={40} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} intensity={1.5} />
    </>
  );
}

export default Lights;
