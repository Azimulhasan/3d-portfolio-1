import React from 'react'
import Hack from './Hack'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, PerspectiveCamera } from '@react-three/drei'


const EthicalHacking = () => {
  return (
    <Canvas>
        <PerspectiveCamera makeDefault position={[5,5,0]} />
        <Stage environment='city'  intensity={0.2}>
        <Hack/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  )
}

export default EthicalHacking