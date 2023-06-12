import React, { useState } from 'react'
import styled from 'styled-components'
import Blochchain from './Blochchain'
import EthicalHacking from './EthicalHacking'
import Marketing from './Marketing'
import Photoshop from './Photoshop'
import WebDevelopment from './WebDevelopment'

const data=[
  "Web Development",
  "Ethical Hacking",
  "Marketing",
  "Blockchain",
  "Photoshop"
]

const Works = () => {
    const Section = styled.div`
      height: 100vh;
      scroll-snap-align: center;
      display: flex;
      justify-content: center;
    `
    const Container = styled.div`
      width: 1400px;
      display: flex;
      justify-content: space-between;
      @media only screen and (max-width:768px) {
        width: 100%;
        flex-direction: column;
      }
    `
    const Left = styled.div`
      flex: 2;
      display: flex;
      align-items: center;
      @media only screen and (max-width:768px) {
        padding: 20px;
        flex:1;
        justify-content: center;
      }
    `
    const List = styled.ul`
     list-style: none;
     display: flex;
     flex-direction: column;
     gap:20px;
     @media only screen and (max-width:768px) {
        padding: 0;
        margin-top: 150px;
      }
     
    `
    const ListItem = styled.li`
      font-size: 60px;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      font-weight: 500;
      cursor: pointer;
      color: transparent;
      -webkit-text-stroke: 0.5px white;
      position: relative;

      @media only screen and (max-width:768px) {
        font-size: 30px;
        text-align: center;
        font-weight: bold;
        color: aliceblue;
        -webkit-text-stroke: 0px;
      }

      ::after{
        content: "${(props)=>props.text}";
        position:absolute;
        top:0;
        left: 0;
        white-space: nowrap;
        color: aliceblue;
        width: 0;
        overflow: hidden;
      }
      &:hover{
        ::after{
          animation: movetext 0.5s linear both;
          @keyframes movetext {
            to{
              width: 100%;
            }
          }
        }
      }
    `
    const Right = styled.div`
      flex: 3;
      @media only screen and (max-width:768px) {
        width: 100%;
        flex: 1;
      }
    `
  const [work, setWork] = useState("Web Development")
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map(item => (
              <ListItem key={item} text={item} onClick={()=>setWork(item)}>
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
              {
                work === "Web Development" ? (
                  <WebDevelopment/>
                ) : work === "Ethical Hacking" ? (
                  <EthicalHacking/>
                ) : work === "Marketing" ? (
                  <Marketing/>
                ) : work === "Blockchain" ? (
                  <Blochchain/>
                ) : (
                  <Photoshop/>
                )
              }
        </Right>
      </Container>
    </Section>
  )
}

export default Works