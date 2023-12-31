/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: brucassol (https://sketchfab.com/brucassol)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/chair-327203d10f524ed2aac78e59546821b3
Title: Chair
*/

import { Box, Html, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion-3d';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';
import { Object3D } from 'three';
import { getTypePrice } from './atoms';
import {
  useCoatTexture,
  useControls as useControlC,
  useLegsTexture,
} from './hooks';
export default function Model(props: any) {
  const group = useRef<Object3D>();
  const { nodes } = useGLTF('/models/chair/chair.glb');
  const { rotate, setRotate, coat, setCoat, wood, setWood } = useControlC();
  const coatMaterial = useCoatTexture();
  const legsMaterial = useLegsTexture();
  const { coatPrice, legsPrice, coatType, legsType } =
    useRecoilValue(getTypePrice);
  // useEffect(() => {
  //   if (nodes.Almofada_Couro_0) {
  //     nodes.Almofada_Couro_0.material = {
  //       ...nodes.Almofada_Couro_0.material,
  //       ...coatMaterial,
  //     };

  //     nodes.Almofada_Couro_0.material.needsUpdate = true;
  //     nodes.Almofada_Couro_0.updateMatrix();
  //   }
  // }, [legsType, coatType, coatPrice]);
  return (
    <motion.group
      animate={{
        rotateY: Math.PI * 3,
        transition: {
          duration: 360,
          ease: 'linear',
          repeat: Infinity,
        },
      }}
      key={legsType + coatType + legsPrice + coatPrice}
      ref={group}
      onPointerEnter={() => setRotate(true)}
      onPointerLeave={() => setRotate(false)}
      dispose={null}
      scale={0.05}
      rotation-y={Math.PI / 2}
      {...props}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="7cb4ba39acb74acf8dd12c14f6121175fbx">
            <group name="Object_2">
              <group name="RootNode">
                <group name="Poltrona">
                  <group
                    name="Madeira_(2)"
                    onPointerEnter={() => setCoat(true)}
                    onPointerLeave={() => setCoat(false)}
                  >
                    <motion.mesh
                      animate={{
                        y: 0,
                        z: rotate ? 10 : 0,
                        transition: { duration: 0.5, type: 'spring' },
                      }}
                      name="Madeira_(2)_Madeira_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Madeira_(2)_Madeira_0'].geometry}
                      // material={materials.Madeira}
                    >
                      <meshStandardMaterial
                        {...legsMaterial}
                        roughness={legsType == 'metal' ? 0.2 : 1}
                        metalness={legsType == 'metal' ? 1 : 0.2}
                      />
                      {coat && (
                        <Html
                          position={[10, 1, -20]}
                          distanceFactor={8}
                          className="text-light  px-2 py-1 shadow shadow-black text-xs   bg-white text-gray-900 rounded-full   absolute top-0 flex whitespace-nowrap select-none"
                        >
                          {legsType} :
                          <span className="underline pl-2 bold">
                            {legsPrice}$
                          </span>
                        </Html>
                      )}
                    </motion.mesh>
                  </group>
                  <group
                    name="Almofada"
                    position={[0, 1.5, -0.6]}
                    onPointerEnter={() => setWood(true)}
                    onPointerLeave={() => setWood(false)}
                  >
                    <motion.mesh
                      animate={{
                        y: rotate ? 8 : 0,
                        transition: { duration: 0.5, type: 'spring' },
                      }}
                      name="Almofada_Couro_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.Almofada_Couro_0.geometry}
                    >
                      <meshStandardMaterial
                        {...coatMaterial}
                        roughness={coatType == 'fabric' ? 0.7 : 0.1}
                        metalness={coatType == 'fabric' ? 0.1 : 0.3}
                      />
                    </motion.mesh>
                    {wood && (
                      <Html
                        position={[0, 40, 0]}
                        distanceFactor={8}
                        className="text-light  px-2 py-1 shadow shadow-black text-xs   bg-white text-gray-900 rounded-full   absolute top-0 flex whitespace-nowrap select-none"
                      >
                        {coatType} :{' '}
                        <span className="underline pl-2 bold">
                          {coatPrice}$
                        </span>
                      </Html>
                    )}
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
      <Box
        scale={[60, 70, 60]}
        position={[0, 30, 0]}
        onPointerEnter={(e) => {
          // e.stopPropagation();
          setRotate(true);
        }}
        onPointerLeave={(e) => {
          // e.stopPropagation();
          setRotate(false);
        }}
      >
        <meshStandardMaterial transparent opacity={0} />
      </Box>
    </motion.group>
  );
}
