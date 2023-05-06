import React, { useState } from 'react'
import { SectionContainer } from '../components/GeneralStyledComponents';
import { Logo, Menu, MenuButton, MenuContainer, PopupBoxStyles, SelfIntro, SocialMedia, Thin, TopBar } from '../components/BannerStyledComponents';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Link, NavLink } from 'react-router-dom';

const Banner = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <SectionContainer style={{ marginBottom: '6rem'}}>
      {/* Top Bar */}
      <TopBar>
        <Logo>H</Logo>
        <MenuButton onClick={handleOpen}>menu</MenuButton>
      </TopBar>

      {/* Menu Popup  */}
      <Modal aria-labelledby="transition-modal-title" aria-describedby="transition-modal-description" open={open} onClose={handleClose} closeAfterTransition slots={{ backdrop: Backdrop }} slotProps={{ backdrop: { timeout: 500,} }}>
        <Fade in={open}>
          <Box sx={PopupBoxStyles}>
            <Menu>
              <MenuContainer>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About Me</NavLink>
                <NavLink to={'/projects'}>My projects</NavLink>
                <NavLink to={'/contact'}>Let's get in touch</NavLink>
              </MenuContainer>
              <SocialMedia>
                <a href={'https://www.instagram.com/hirwa_jean_eric'}>Instagram</a>
                <a href={'https://www.linkedin.com/in/jean-eric-hirwa/'}>LinkedIn</a>
                <a href={'https://github.com/hirwajeaneric/'}>GitHub</a>
                <a href={'https://www.npmjs.com/package/@hirwa_jean_eric/reverse-sentence'}>npm</a>
                <a href={'https://medium.com/@hirwa'}>Medium</a>
              </SocialMedia>
            </Menu>
          </Box>
        </Fade>
      </Modal>

      {/* Self-introduction  */}
      <SelfIntro>
        <p>Hello, I am</p>
        <h1><strong>HIRWA</strong> <Thin>Jean Eric</Thin></h1>
        <h2><em>I am a Software Developer</em></h2>
        <h3>I believe that Sofware Engineering is all about solving problems.</h3>
        <Link to={'/#'}>That is what I do</Link>
      </SelfIntro>

    </SectionContainer>
  )
}

export default Banner