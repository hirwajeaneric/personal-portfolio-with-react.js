import React from 'react'
import Banner from '../sections/Banner'
import Footer from '../sections/Footer'
import HomeProjects from '../sections/HomeProjects'
import HomeContact from '../sections/HomeContact'
import { MainPageContainer } from '../components/GeneralStyledComponents'
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <MainPageContainer>
      <Helmet>
        <title>Welcome to Hirwa Jean Eric - My portfolio</title>
        <meta name="description" content="Home page for Hirwa Jean Eric's personal portfolio."/> 
      </Helmet>

      <Banner />
      <HomeProjects />
      <HomeContact />
      <Footer />
    </MainPageContainer>
  )
}

export default Home