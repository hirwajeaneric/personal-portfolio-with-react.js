import React from 'react'
import { AWordAboutMe, BannerContainer, ButtonContainer, CallToActionButton, Greetings, MyName, WhatIDo } from '../components/BannerComponents'

const Banner = () => {
  return (
    <BannerContainer>
      <Greetings>Hi, my name is</Greetings>
      <MyName>Hirwa Jean Eric.</MyName>
      <WhatIDo>I build software & content for the web.</WhatIDo>
      <AWordAboutMe>
        Recently, I have been working on web development projects with Javascript
        frameworks and libaries like <span>Node.js</span>, <span>Express.js</span>, and <span>React.js</span> 
        {/* I'm a software engineer specializing in building systems that make impact using the latest technologies. 
        Currently, I am harnessing and connecting my design and creative skills with programming skills to build things that make impact. */}
      </AWordAboutMe>
      <ButtonContainer>
        <CallToActionButton to='/projects'>Check out my works.</CallToActionButton>
      </ButtonContainer>
    </BannerContainer>
  )
}

export default Banner