import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components'
import Map from './Map'


const Contact = () => {
    const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    `
    const Container = styled.div`
      height: 100%;
      display: flex;
      justify-content:space-between;
      gap: 30px;
      @media only screen and (max-width:768px) {
        width: 100%;
      }
    `
    const Left = styled.div`
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media only screen and (max-width:768px) {
        justify-content: center;
      }

    `
    const Title = styled.h1`
      font-weight: 200;
    `
    const Form = styled.form`
      width: 500px;
      display: flex;
      flex-direction: column;
      gap: 25px;
      @media only screen and (max-width:768px) {
        width: 300px;
      }

    `
    const Input = styled.input`
      padding: 20px;
      background-color: rgba(200,200,220, 0.6);
      border: none;
      border-radius: 5px;
      text-shadow: 0.2px 0.3px white;
      color: #000;
      font-weight: bold;
      ::placeholder{
        color: #ddd;
      }

    `
    const TextArea = styled.textarea`
      padding: 20px;
      background-color: rgba(200,200,220, 0.6);
      border: none;
      border-radius: 5px;
      text-shadow: 0.2px 0.3px white;
      color: #000;
      font-weight: bold;
      ::placeholder{
        color: #ddd;
      }
    `
    const Button = styled.button`
      padding: 10px;
      background-color: aliceblue;
      border-radius: 5px;
      font-weight: bold;
      border: none;
      border-radius: 5px;
    `
    const Right = styled.div`
      flex: 1;
      @media only screen and (max-width:768px) {
        display: none;
      }
      `
      const [success, setSuccess] = useState(null)
 
    const form = useRef();

    const handleSubmit = (e) =>{
      e.preventDefault();

      emailjs.sendForm('service_hcfye9v', 'template_ygvi6qs', form.current, 'eWz75-TG0PzM5ldaJ')
      .then((result) => {
          console.log(result.text);
          setSuccess(true)
      }, (error) => {
          console.log(error.text);
          setSuccess(false)
      });
    }
  return (
    <Section>
      <Container>
        <Left>
          <Form ref={form} onSubmit={handleSubmit}>
            <Title>Contact Us</Title>
            <Input placeholder='Name' name='user_name'/>
            <Input placeholder='Email' name='user_email'/>
            <TextArea placeholder='Write Your Message' rows={10} name='user_message'/>
            <Button type='submit'>Send</Button>
            {success && 'The Email was successfully sent'}
          </Form>
        </Left>
        <Right>
           <Map />
        </Right>
      </Container>
    </Section>
  )
}

export default Contact