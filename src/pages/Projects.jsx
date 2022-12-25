import React from 'react'
import { MainPageContainer } from '../components/MainPageContainer'
import AllProjects from '../sections/AllProjects';
import Footer from '../sections/Footer'
import NavigationBar from '../sections/NavigationBar'

const Projects = () => {
  return (
    <MainPageContainer>
    <NavigationBar />
    <AllProjects />
    <Footer />
  </MainPageContainer>
  )
}

export default Projects