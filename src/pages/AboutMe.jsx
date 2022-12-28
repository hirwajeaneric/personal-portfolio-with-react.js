import React from 'react'
import { MainPageContainer } from '../components/MainPageContainer'
import AboutBanner from '../sections/AboutBanner'
import Footer from '../sections/Footer'
import NavigationBar from '../sections/NavigationBar'
import Techonogies from '../sections/Techonogies'

const AboutMe = () => {
  return (
    <MainPageContainer>
    <NavigationBar />
    <AboutBanner />
    <Techonogies />
    <Footer/>
  </MainPageContainer>
  )
}

export default AboutMe