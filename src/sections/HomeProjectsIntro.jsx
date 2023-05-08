import React from 'react'
import { InnerContainer, SectionContainer } from '../components/GeneralStyledComponents'

export default function HomeProjectsIntro() {
  return (
    <SectionContainer style={{ background: 'white'}}>
      <InnerContainer style={{ maxWidth: '1300px', width: '85vw', }}>
        <div>
          <h2>My Work</h2>
        </div>
        <div>
          <p style={{ color: 'black' }}>Developed with the use of React.js, Node.js, Express.js, JAVA, JavaScript, MongoDB, MySQL, Material UI, CSS, HTML, Xampp,...</p>
        </div>
      </InnerContainer>
    </SectionContainer>
  )
}