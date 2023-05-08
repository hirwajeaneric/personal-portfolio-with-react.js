import React from 'react'
import { InnerContainer, SectionContainer } from '../components/GeneralStyledComponents'

export default function HomeProjectsIntro() {
  return (
    <SectionContainer style={{ background: '#e0e0eb', marginBottom: '0rem'}}>
      <InnerContainer style={{ maxWidth: '1300px', width: '85vw', }}>
        <div>
          <p style={{ color: 'black' }}>Developed with the use of React.js, Node.js, Express.js, JAVA, JavaScript, MongoDB, MySQL, Material UI, CSS, HTML, Xampp,...</p>
        </div>
        <div>
          <h2 style={{ textAlign: 'center'}}>My Works</h2>
        </div>
      </InnerContainer>
    </SectionContainer>
  )
}