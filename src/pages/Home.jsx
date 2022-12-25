import React from 'react'
import NavigationBar from '../sections/NavigationBar';
import {MainPageContainer} from '../components/MainPageContainer';
import Banner from '../sections/Banner';
import BestProjects from '../sections/BestProjects';
import Footer from '../sections/Footer';

const Home = () => {
  return (
    <MainPageContainer>
      <NavigationBar />
      <Banner />
      <BestProjects />
      <Footer/>
    </MainPageContainer>
  )
}

export default Home