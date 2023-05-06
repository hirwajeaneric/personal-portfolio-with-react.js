import React from 'react'
import { SectionContainer } from '../components/GeneralStyledComponents';
import { SelfIntro, Thin } from '../components/BannerStyledComponents';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <SectionContainer style={{ maxWidth: '1300px', width: '85vw', marginRight: '90px', marginLeft: '90px'}}>
      <SelfIntro>
        <p>Hello, I am</p>
        <h1><strong>HIRWA</strong> <Thin>Jean Eric</Thin></h1>
        <h2><em>I am a Software Developer</em></h2>
        <h3>I believe that Sofware Engineering is all about <span style={{ fontWeight: '400'}}>solving problems</span>.</h3>
        <Link to={'/#'}>That is what I do  &nbsp;❱❱</Link>
      </SelfIntro>
    </SectionContainer>
  )
}

export default Banner