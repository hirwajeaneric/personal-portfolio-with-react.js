import React, { useState } from 'react'
import { InnerContainerTwo, LeftSide, RightSide, SectionContainer, SectionHeader } from '../components/GeneralStyledComponents'

const HomeContact = () => {

  const [responseMessage, setResponseMessage] = useState({
    severity: '',
    text: '',
    progress: false,
    progressText: ''
  });
  const [formInput, setFormInput] = useState({
    name: '',
    email:'',
    message: '',
  });

  const handleInput = ({ currentTarget: input }) => {
    setFormInput({ ...formInput, [input.name] : input.value })
  }

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      
    }
  }

  return (
    <SectionContainer style={{ flexDirection: 'row', justifyContent: 'center'}}>
      <InnerContainerTwo>
        <LeftSide>
          <SectionHeader style={{ color: 'white' }}>Get in touch</SectionHeader>
        </LeftSide>
        <RightSide>
          <form onSubmit={sendEmail}>
            <input type="text" name="name" id="name" value={formInput.name || ''} onChange={handleInput} placeholder='Your name'/>
            <input type="text" name="email" id="email" value={formInput.email || ''} onChange={handleInput} placeholder='Your email'/>
            <input type="text" name="name" id="message" value={formInput.message || ''} onChange={handleInput} placeholder='Message'/>
            <button type='submit'>{responseMessage.progress ? responseMessage.progressText : 'Send'}</button>
          </form>
        </RightSide>
      </InnerContainerTwo>
    </SectionContainer>
  )
}

export default HomeContact