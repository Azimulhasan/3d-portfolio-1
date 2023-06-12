import React from 'react'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Mark from './Mark'

const Marketing = () => {
  return (
    <Canvas>
        <PerspectiveCamera makeDefault position={[0,2,5]} />
        <Stage environment='city'  intensity={0.6}>
        <Mark/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default Marketing