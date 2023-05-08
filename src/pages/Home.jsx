import React from 'react'
import { MainPageContainer } from '../components/GeneralStyledComponents'
import Footer from '../sections/Footer'
import { Helmet } from 'react-helmet-async';
import Banner from '../sections/Banner';
import HomeProjects from '../sections/HomeProjects';
import HomeContact from '../sections/HomeContact';
import HomeProjectsIntro from '../sections/HomeProjectsIntro';

export default function Home(){
  return (
    <MainPageContainer>
      <Helmet>
        <title>Hirwa Jean Eric - Personal Website</title>
        <meta name="description" content="Welcome to my portfolio."/> 
      </Helmet>

      <Banner />
      <HomeProjectsIntro />
      <HomeProjects />
      <HomeContact />
      <Footer />

    </MainPageContainer>
  )
}