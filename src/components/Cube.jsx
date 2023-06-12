import React, { useRef } from 'react'
import {  PerspectiveCamera, RenderTexture , Text} from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Cube = () => {
    const textRef = useRef()
  useFrame(state => {
    textRef.current.position.x = Math.sin(state.clock.elapsedTime)*1.5
    ,textRef.current.position.y=Math.sin(state.clock.elapsedTime)*1})
  return (
    <mesh>
        <boxGeometry/>
        <meshStandardMaterial>
            <RenderTexture attach='map'>
                <PerspectiveCamera 
                makeDefault
                position={[0,0,5]}
                />
                <color attach="background" args={["rgba(240,255,255,0.7)" ]}/>
                <Text ref={textRef} fontSize={5} color="#1c2841">
                    Hello
                </Text>
            </RenderTexture>
        </meshStandardMaterial>
    </mesh>
  )
}

export default Cube