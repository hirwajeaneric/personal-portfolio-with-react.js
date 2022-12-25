import React from 'react'
import { FaGithubAlt, FaNpm, FaPinterest } from 'react-icons/fa';
import { FiInstagram, FiLinkedin } from 'react-icons/fi'
import { ALink, BottomNavigation, BottomNavigationItem, CopyRightText, ElementsContainer, FooterSectionContainer, SocialLinks, UnderLine } from '../components/FooterComponents'

const Footer = () => {
  return (
    <FooterSectionContainer>
      <ElementsContainer>
        <BottomNavigation>
          <BottomNavigationItem to={'/'}>Home</BottomNavigationItem>
          <BottomNavigationItem to={'/about'}>About</BottomNavigationItem>
          <BottomNavigationItem to={'/projects'}>Projects</BottomNavigationItem>
          <BottomNavigationItem to={'/contact'}>Contact</BottomNavigationItem>
        </BottomNavigation>
        <SocialLinks>
          <ALink href='https://github.com/hirwajeaneric' target='_blank' rel="noreferrer">
            <FaGithubAlt/>
          </ALink>
          <ALink href='https://www.linkedin.com/in/jean-eric-hirwa/' target='_blank' rel="noreferrer">
            <FiLinkedin/>
          </ALink>
          <ALink href='https://www.instagram.com/hirwa_jean_eric/' target='_blank' rel="noreferrer">
            <FiInstagram/>
          </ALink>
          {/* <ALink href='https://github.com/hirwajeaneric' target='_blank' rel="noreferrer">
            <FaPinterest/>
          </ALink> */}
          {/* <ALink href='https://www.npmjs.com/hirwa_jean_eric' target='_blank' rel="noreferrer">
            <FaNpm/>
          </ALink> */}
        </SocialLinks>
        <UnderLine />
        <CopyRightText>
          &copy; Copyright 2022 - All rights reserved to Hirwa Jean Eric - Created with Love.
        </CopyRightText>
      </ElementsContainer>
    </FooterSectionContainer>
  )
}

export default Footer