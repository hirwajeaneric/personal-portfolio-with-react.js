import React from 'react'
import { AboutMeDescription, AWordAboutMe, BannerContainer, ButtonContainer, CallToActionButton, Greetings, MyName, WhatIDo } from '../components/BannerComponents'

const AboutBanner = () => {
  return (
    <BannerContainer>
      <MyName>About me</MyName>
      <AboutMeDescription>
        Hello, My name is Hirwa Jean Eric, and I like creating things in the background to
        create impact and inspire change or success.
        <br/><br/>
        My interest in software development was fueled by the need to be able to demonstrate
        my products, talents and thought to a vast community of people around the world
        and by turning internet usage into money, and the web made it possible.
        <br/><br/>
        I also have skills in a vast array of disciplines but which are also related. 
        Starting from Graphic Design, Drawing, UI/UX, to Creative Writing and bloggi
      </AboutMeDescription>
      {/* <ButtonContainer>
        <CallToActionButton to='/projects'>Check out my works.</CallToActionButton>
      </ButtonContainer> */}
    </BannerContainer>
  )
}

export default AboutBanner