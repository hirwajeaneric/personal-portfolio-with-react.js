import React from 'react'
import { BannerSectionContainer, SectionContainer } from '../components/GeneralStyledComponents';
import { SelfIntro, Thin } from '../components/BannerStyledComponents';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <BannerSectionContainer>
      <SelfIntro>
        <p>Hello, I am</p>
        <h1><strong>HIRWA</strong> <Thin>Jean Eric</Thin></h1>
        <h2><em>I am a Software Developer</em></h2>
        <h3>I believe that Sofware Engineering is all about <span style={{ fontWeight: '400'}}>solving problems</span>.</h3>
        <Link to={'/#'}>That is what I do  &nbsp;❱❱</Link>
      </SelfIntro>
    </BannerSectionContainer>
  )
}

export default Banner