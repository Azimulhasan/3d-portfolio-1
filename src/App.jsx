import { Hero , Who , Works, Contact } from './components'
import styled from 'styled-components'




function App() {
  const Container = styled.div`
    height: 100vh;
    
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;
    overflow-y: auto;
    color: #fff;
    background: url("/bg.jpg");
    background-position: center;
    scrollbar-width: none;
    &::-webkit-scrollbar{
      display: none;
    }
  `
  return (
    <Container>
      <Hero />
      <Who />
      <Works/>
      <Contact/>
    </Container>
  )
}

export default App
