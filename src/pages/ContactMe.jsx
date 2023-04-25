import React from 'react'
import { Helmet } from 'react-helmet-async';
import { MainPageContainer } from '../components/GeneralStyledComponents';
import HomeContact from '../sections/HomeContact';
import Footer from '../sections/Footer';

const ContactMe = () => {
  return (
    <MainPageContainer>
      <Helmet>
        <title>Get in touch with me - Contact me</title>
        <meta name="description" content="Let's get in touch."/> 
      </Helmet>

      <HomeContact />
      <Footer />
    </MainPageContainer>
  )
}

export default ContactMe