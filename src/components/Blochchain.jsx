import React from 'react'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Ether from './Ether'

const Blochchain = () => {
  return (
    <Canvas>
        <PerspectiveCamera makeDefault position={[0,2,5]} />
        <Stage environment='city'  intensity={0.6}>
        <Ether/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default Blochchain