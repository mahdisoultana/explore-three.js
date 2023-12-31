/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 scene.gltf --transform 
Files: scene.gltf [19.3KB] > scene-transformed.glb [41.52KB] (-115%)
Author: Lancaster Modelagem 3D (https://sketchfab.com/lancastermodelagem3d)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/borboleta-azul-butterfly-ab9192b6bc8f49e3baed63e984c7073a
Title: Borboleta Azul - Butterfly
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene-transformed.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.M_BorboletaAzul} skeleton={nodes.Object_7.skeleton} position={[-0.06, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
