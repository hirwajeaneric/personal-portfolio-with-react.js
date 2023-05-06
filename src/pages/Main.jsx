import React, { useState } from 'react'
import { MainPageContainer } from '../components/GeneralStyledComponents'
import { Helmet } from 'react-helmet-async';
import { Logo, Menu, MenuButton, MenuContainer, PopupBoxStyles, SocialMedia, TopBar, TopBarContainer } from '../components/BannerStyledComponents';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { NavLink, Outlet } from 'react-router-dom'

export default function Main() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <MainPageContainer>
      <Helmet>
        <title>Welcome to Hirwa Jean Eric - My portfolio</title>
        <meta name="description" content="Home page for Hirwa Jean Eric's personal portfolio."/> 
      </Helmet>

      {/* Top Bar */}
      <TopBar>
        <TopBarContainer style={{ maxWidth: '1300px', width: '85vw', marginRight: '90px', marginLeft: '90px' }}>
          <Logo>H</Logo>
          <MenuButton onClick={handleOpen}>menu</MenuButton>
        </TopBarContainer>
      </TopBar>

      <Outlet />

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
    </MainPageContainer>
  )
}