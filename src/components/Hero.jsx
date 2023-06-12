import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { line , moon } from '../img'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, MeshDistortMaterial, Sphere } from '@react-three/drei'

const Hero = () => {
    const Section = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column ;
    scroll-snap-align: center;
    align-items:center;
    justify-content: space-between;
    @media only screen and (max-width:768px) {
      height: 100vh;
    }

    `
    const Container = styled.div`
      height: 100%;
      scroll-snap-align: center;
      width: 1200px;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width:768px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        scroll-snap-align: initial;
      }

    `
    const Left = styled.div`
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;

      @media only screen and (max-width:768px) {
        flex: 1;
        align-items: center;
      }

    `
    const TItle = styled.h1`
      font-size: 74px;
      margin: 10px;
      padding: 0;
      @media only screen and (max-width:768px) {
        text-align: center;
        font-size: 50px;
        margin-top: 150px;
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
      margin: 0;
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
    
    const Right = styled.div`
      flex: 3;
      position: relative;
      @media only screen and (max-width:768px) {
        flex: 1;
        width: 100%;
      }
    `
    const Img = styled.img`
      width: 500px;
      height: 500px;
      margin: 100px;
      object-fit: contain;
      position: absolute;
      top:0;
      bottom: 0;
      left: 0;
      transform: rotate(-5deg);
      opacity: 0.9;
      right: 0;
      @media only screen and (max-width:768px) {
        width: 300px;
        height: 300px;
        top: -50px;
        left: -50px;
        margin:0;
      }

      animation: animate 2s infinite ease alternate;
      @keyframes animate {
        50%{
          transform: rotate(0deg)  scale(1.2) ;
          opacity: 1;
        }
        100%{
          transform: rotate(5deg) scale(1);
          opacity: 0.9;
        }
      }
      `

  return (
    <Section>
      <Navbar/>
        <Container>
          <Left>
            <TItle>Think, Make and Solve</TItle>
            <WhatWeDo>
              <Line src={line}/>
              <SubTitle>What we do</SubTitle>
            </WhatWeDo>
            <Desc>Get the best possible web solution from the worlds greatest web developer</Desc>
            <Button>Learn More</Button>
          </Left>
          <Right>
            
            <Canvas>
              <OrbitControls enableZoom={false} />
              <directionalLight position={[2,-3,5]}/>
              <ambientLight intensity={1}/>
              <Sphere args={[1,100,200]} scale={2}>
                <MeshDistortMaterial color="#0072bb" attach="material" distort={0.5} speed={2} />
              </Sphere>
            </Canvas>
            <Img src={moon}/>
          </Right>
        </Container>
    </Section>
  )
}

export default Hero