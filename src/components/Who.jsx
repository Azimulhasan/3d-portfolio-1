import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber'
import { OrbitControls} from '@react-three/drei'
import Cube from './Cube'
import Navbar from './Navbar'
import { line , moon } from '../img'

const Who = () => {
    const Section = styled.div`
    height: 100vh;
    display: flex;
    scroll-snap-align: center;
    align-items:center;
    justify-content: center;
    `
    const Container = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      width: 1200px;
      display: flex;
      justify-content: space-between;

    `
    const Left = styled.div`
      flex: 1;
      @media only screen and (max-width:768px) {
        display: none;
      }
      `
    const Right = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
      @media only screen and (max-width:768px) {
        align-items: center;
      }
    `
    const TItle = styled.h1`
      font-size: 74px;
      margin: 10px;
      padding: 0;
      @media only screen and (max-width:768px) {
        font-size: 50px;
        text-align: center;
      }
    `
    const WhatWeDo = styled.div`
      display: flex;
      align-items: center;
      gap:10px; 
    `
    const Line = styled.img`
      height: 40px;
    `
    const SubTitle = styled.h2`
      color: #e6e6e6;
      margin: 0%;
    `
    const Desc = styled.p`
      font-size: 24px;
      color: aliceblue; 
      margin: 0;
      @media only screen and (max-width:768px) {
        padding: 20px;
      }
    `
    const Button = styled.button`
      background-color: aliceblue;
      font-weight: bold;
      width: 100px;
      padding: 10px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    `

  return (
    <Section>
      <Navbar/>
        <Container>
          <Left>
            {/** 3D model */}
            <Canvas camera={{fov:25, position:[3,3,3]}}>
              <OrbitControls enableZoom={false} autoRotate/>\
              <directionalLight position={[2,-3,5]}/>
              <ambientLight intensity={1}/>
              <Cube/>
            </Canvas> 
          </Left>
          <Right>
            <TItle>Think Outside the Square space</TItle>
            <WhatWeDo>
              <Line src={line}/>
              <SubTitle>Who we are</SubTitle>
            </WhatWeDo>
            <Desc>A set of web developers to make the cyber space an hell on earth</Desc>
            <Button>See our works</Button>
          </Right>
        </Container>
    </Section>
  )
}

export default Who