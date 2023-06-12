/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 mark.gltf --transform
Author: loarziel_ (https://sketchfab.com/loarziel_)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/sci-fi-screen-3d-model-d4dbce94be204718a58878c349db5dfa
Title: Sci-Fi Screen - 3D Model
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/mark-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.marco__0.geometry} material={materials['Scene_-_Root']} position={[-0.04, -3.84, -18.28]} />
      </group>
    </group>
  )
}

useGLTF.preload('/mark-transformed.glb')
