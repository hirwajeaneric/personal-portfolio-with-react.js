import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MainPageContainer } from '../components/GeneralStyledComponents';
import Footer from '../sections/Footer';

const ErrorPage = () => {
  return (
    <MainPageContainer>
      <Helmet>
        <title>Page not found - Hirwa Jean Eric</title>
        <meta name="description" content="Page not found."/> 
      </Helmet>

      <Footer />
    </MainPageContainer>
  )
}

export default ErrorPage