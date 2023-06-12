import React from 'react'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Photo from './Photo'

const Photoshop = () => {
  return (
    <Canvas>
        <PerspectiveCamera makeDefault position={[0,0,5]} />
        <Stage environment='city'  intensity={0.3}>
        <Photo/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default Photoshop