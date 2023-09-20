import { Clone, OrbitControls, useGLTF } from '@react-three/drei';
import { useControls } from 'leva';
import { Perf } from 'r3f-perf';
import { Suspense, useEffect } from 'react';
import * as THREE from 'three';
function LoadModels() {
  const { fox, customBurger, burger, helmet, medievalFantasyBook } =
    useControls('loadModles', {
      burger: true,
      helmet: false,
      customBurger: false,
      medievalFantasyBook: false,
      fox: false,
    });
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />
      <Suspense fallback={<Placeholder />}>
        {helmet && <Model options={{ 'position-x': '-1' }} />}
      </Suspense>
      <Suspense fallback={<Placeholder scale={[1, 1, 1]} />}>
        {burger && <Burger scale={0.05} position-x="5" />}
      </Suspense>
      <Suspense fallback={<Placeholder scale={[1, 1, 1]} />}>
        {customBurger && <CustomBurger scale={0.1} position-x="3" />}
      </Suspense>
      <Suspense fallback={<Placeholder scale={[1, 1, 1]} />}>
        {medievalFantasyBook && <MedievalFantasyBook scale={0.3} />}
      </Suspense>
      <Suspense fallback={<Placeholder scale={[1, 1, 1]} />}>
        {fox && (
          <Fox scale={0.01} position={[-1.5, -0.9, 2.5]} rotation-y={0.3} />
        )}
      </Suspense>
      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
function Placeholder({ scale = [2, 3, 2] }: any) {
  return (
    <mesh position-y={0.5} scale={scale}>
      <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
      <meshBasicMaterial wireframe color="red" />
    </mesh>
  );
}

// very useful to preload the model
useGLTF.preload('/FlightHelmet/glTF/FlightHelmet.gltf');
useGLTF.preload('/medieval_fantasy_book.glb');
useGLTF.preload('/hamburger.glb');

function Model({
  modelPath = '/FlightHelmet/glTF/FlightHelmet.gltf',
  options = {},
}: {
  modelPath?: string;
  options?: any;
}) {
  const model = useGLTF(modelPath);
  return (
    <>
      <Clone object={model.scene} scale={5} position-y={-1} {...options} />
    </>
  );
}

export function Burger(props) {
  const { nodes, materials } = useGLTF('/hamburger.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={materials.BunMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={materials.SteakMaterial}
        position={[0, 2.82, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={materials.CheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={materials.BunMaterial}
        position={[0, 1.77, 0]}
      />
    </group>
  );
}

// ------------------------------------------------------------
function CustomBurger(props) {
  const { nodes } = useGLTF('/hamburger.glb');
  const { bunColor, steakColor, cheeseColor } = useControls('burger', {
    bunColor: '#ffffff',
    steakColor: '#ff0000',
    cheeseColor: '#ffff00',
  });
  const bunMaterial = new THREE.MeshStandardMaterial({ color: bunColor });
  const steakMaterial = new THREE.MeshStandardMaterial({ color: steakColor });
  const cheeseMaterial = new THREE.MeshStandardMaterial({
    color: cheeseColor,
  });
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottomBun.geometry}
        material={bunMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.meat.geometry}
        material={steakMaterial}
        position={[0, 2.817, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cheese.geometry}
        material={cheeseMaterial}
        position={[0, 3.04, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.topBun.geometry}
        material={bunMaterial}
        position={[0, 1.771, 0]}
      />
    </group>
  );
}

import { useAnimations } from '@react-three/drei';
import { useRef } from 'react';

export function MedievalFantasyBook(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/medieval_fantasy_book.glb',
  );
  const { actions } = useAnimations(animations, group);
  const { animation } = useControls('medieval', {
    animation: { options: [...Object.keys(actions), 'pause'] },
  });
  console.log(animation);
  useEffect(() => {
    const action = actions['The Life'];
    if (animation === 'pause') {
      action.fadeIn(0.5).stop();
      return;
    }

    action.reset().fadeIn(0.5).play();

    return () => {
      action.fadeOut(0.5);
    };
  }, [animation]);
  console.log(actions);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="dad255dd2cf24ae0bb357684e49722b4fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Scene"
                  position={[-4.794, 0, 0.278]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_5" position={[-14, 15.788, 4.337]}>
                    <mesh
                      name="Scene_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base_0'].geometry}
                      material={materials['Texture-base']}
                    />
                    <mesh
                      name="Scene_Texture-base_0_1"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Texture-base_0_1'].geometry}
                      material={materials['Texture-base']}
                    />
                    <mesh
                      name="Scene_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes['Scene_Texture-base-gloss-jpg_0'].geometry
                      }
                      material={materials['Texture-base-gloss-jpg']}
                    />
                    <mesh
                      name="Scene_Book-tittle_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['Scene_Book-tittle_0'].geometry}
                      material={materials['Book-tittle']}
                    />
                  </group>
                  <group
                    name="Mill-wind-wheel"
                    position={[-35.783, -27.192, 3.888]}
                    rotation={[0.445, -0.447, -0.498]}
                  >
                    <group
                      name="Object_11"
                      position={[-8.253, 39.884, -25.75]}
                      rotation={[-0.607, 0.138, 0.644]}
                    >
                      <mesh
                        name="Mill-wind-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes['Mill-wind-wheel_Texture-base_0'].geometry
                        }
                        material={materials['Texture-base']}
                      />
                    </group>
                  </group>
                  <group
                    name="Mill-water-wheel"
                    position={[3.708, -15.395, -0.444]}
                    rotation={[-1.92, 0, 0]}
                  >
                    <group name="Object_14" position={[-17.708, 31.183, 4.781]}>
                      <mesh
                        name="Mill-water-wheel_Texture-base_0"
                        castShadow
                        receiveShadow
                        geometry={
                          nodes['Mill-water-wheel_Texture-base_0'].geometry
                        }
                        material={materials['Texture-base']}
                      />
                    </group>
                  </group>
                </group>
                <group
                  name="flag"
                  position={[-11.513, 12.497, -6.752]}
                  rotation={[-Math.PI / 2, 0, -Math.PI / 6]}
                >
                  <group name="Object_17" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="0"
                      castShadow
                      receiveShadow
                      geometry={nodes['0'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['0'].morphTargetDictionary}
                      morphTargetInfluences={nodes['0'].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="flag-second"
                  position={[-11.494, 12.552, -26.245]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_20" position={[-7.262, 9.035, -8.16]}>
                    <mesh
                      name="1"
                      castShadow
                      receiveShadow
                      geometry={nodes['1'].geometry}
                      material={materials['Texture-base']}
                      morphTargetDictionary={nodes['1'].morphTargetDictionary}
                      morphTargetInfluences={nodes['1'].morphTargetInfluences}
                    />
                  </group>
                </group>
                <group
                  name="Waterfall"
                  position={[-4.794, 0, 0.351]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_23" position={[-14, 15.788, 4.337]}>
                    <mesh
                      name="Waterfall_Texture-base-gloss-jpg_0"
                      castShadow
                      receiveShadow
                      geometry={
                        nodes['Waterfall_Texture-base-gloss-jpg_0'].geometry
                      }
                      material={materials['Texture-base-gloss-jpg']}
                    />
                  </group>
                </group>
                <group
                  name="deers"
                  position={[-23.122, -0.049, 14.878]}
                  rotation={[-Math.PI / 2, 0, 0]}
                >
                  <group name="Object_26" position={[4.328, 30.387, 4.387]}>
                    <mesh
                      name="deers_Texture-base_0"
                      castShadow
                      receiveShadow
                      geometry={nodes['deers_Texture-base_0'].geometry}
                      material={materials['Texture-base']}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

function Fox(props) {
  const fox = useGLTF('/Fox/glTF/Fox.gltf');
  const animations = useAnimations(fox.animations, fox.scene);
  console.log(animations.names);
  const { animationName } = useControls('fox', {
    animationName: { options: animations.names },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play();
    return () => {
      action.fadeOut(0.5);
    };
  }, [animationName]);
  console.log(animations);
  return <primitive object={fox.scene} {...props} />;
}

export default LoadModels;
