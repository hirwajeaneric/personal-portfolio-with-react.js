import React from 'react'
import { Helmet } from 'react-helmet-async';
import { MainPageContainer } from '../components/GeneralStyledComponents';
import HomeContact from '../sections/HomeContact';
import Footer from '../sections/Footer';

const AboutMe = () => {
  return (
    <MainPageContainer>
      <Helmet>
        <title>About Hirwa Jean Eric</title>
        <meta name="description" content="More about Hirwa Jean Eric."/> 
      </Helmet>

      <HomeContact />
      <Footer />
    </MainPageContainer>
  )
}

export default AboutMe