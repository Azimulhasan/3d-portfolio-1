import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import Webdev from './Webdev'

const WebDevelopment = () => {
  return (
    <Canvas>
        <PerspectiveCamera makeDefault position={[5,2,0]} />
        <Stage environment='city'  intensity={0.6}>
        <Webdev/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default WebDevelopment