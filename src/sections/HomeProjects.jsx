import React from 'react'
import { InnerContainer, SectionContainer } from '../components/GeneralStyledComponents'

const HomeProjects = () => {
  return (
    <SectionContainer style={{ background: 'white'}}>
      <InnerContainer style={{ maxWidth: '1300px', width: '85vw', }}>
        <h2>My Work</h2>
      </InnerContainer>
    </SectionContainer>
  )
}

export default HomeProjects