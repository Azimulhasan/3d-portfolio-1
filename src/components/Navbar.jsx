import React from 'react'
import styled from 'styled-components'
import { mainlogo , search} from '../img'

const Navbar = () => {
    const Section = styled.div`
        display: flex;
        justify-content: center;
        position: fixed;

        @media only screen and (max-width:768px) {
            width: 100%;
        }
    `
    const Container = styled.div`
        width: 1200px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: rgba(10,10,20,0.6);
        padding: 10px 5px;
        border-radius: 4px;
        @media only screen and (max-width:768px) {
            width: 100%;
            padding: 10px;
        }
    `
    const Links = styled.div`
        display: flex;
        align-items: center;
        gap: 50px;
        
    `
    const Icons = styled.div`
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        gap: 20px;
    `
    const List = styled.ul`
        display: flex;
        gap: 20px;
        list-style: none;
        @media only screen and (max-width:768px) {
            display: none;
        }
    `
    const ListItem = styled.li`
        cursor: pointer;
    `
    const Icon = styled.img`
        height: 30px;
        object-fit: contain;
        cursor: pointer;
    `
    const Button = styled.button`
        width: 100px;
        padding: 10px;
        background-color: aliceblue;
        border-radius: 5px;
        font-weight: bold;
    `
    const Logo = styled.img`
        height: 60px;
    `

  return (
    
    <Section>
        <Container>
            <Links>
                <Logo src={mainlogo}/>
                <List>
                    <ListItem >Home</ListItem>
                    <ListItem >Studio</ListItem>
                    <ListItem >WOrks</ListItem>
                    <ListItem >Contact</ListItem>
                </List>
            </Links>
            <Icons>
                <Icon src={search}/>
                <Button>Hire now</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar