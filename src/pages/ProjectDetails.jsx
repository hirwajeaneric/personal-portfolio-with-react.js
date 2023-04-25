import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MainPageContainer } from '../components/GeneralStyledComponents';
import Footer from '../sections/Footer';

const ProjectDetails = () => {
  const [project, setProject] = useState({});

  return (
    <MainPageContainer>
      <Helmet>
        <title>{project.name} - By Hirwa Jean Eric</title>
        <meta name="description" content={`${project.name} - By Hirwa Jean Eric.`}/> 
      </Helmet>

      <Footer />
    </MainPageContainer>
  )
}

export default ProjectDetails