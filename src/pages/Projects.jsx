import React from 'react'
import { MainPageContainer } from '../components/GeneralStyledComponents'
import Footer from '../sections/Footer'
import { Helmet } from 'react-helmet-async';

const Projects = () => {
  return (
    <MainPageContainer>
      <Helmet>
        <title>My projects - Hirwa Jean Eric</title>
        <meta name="description" content="Hirwa Jean Eric's projects."/> 
      </Helmet>

      <Footer />
    </MainPageContainer>
  )
}

export default Projects