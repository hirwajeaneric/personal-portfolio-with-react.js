import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';
import { CgClose, CgMenuRight } from 'react-icons/cg';
import { BiHome, BiMailSend, BiTask, BiUser } from 'react-icons/bi';
import { 
  Logo, 
  MenuButton, 
  NavBarExtendedContainer, 
  NavBarLink, 
  NavBarLinkExtended, 
  NavigationContainer, 
  NavLogoSpace, 
  NavMenuSpace, 
  ResumeButton, 
  ResumeButtonExtended, 
  Symbol 
} from '../components/NavigationBarComponents'

const NavigationBar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen(current => !current);
  }
  return (
    <NavigationContainer>
      <NavLogoSpace>
        <Link to='/'>
          <Logo src='hirwajeaner-icon-medium.png' alt='hirwajeaneric'/><span>HIRWA JEAN ERIC</span>
        </Link>
      </NavLogoSpace>

      <NavMenuSpace>
        <NavBarLink to="/">
          <Symbol><BiHome /></Symbol>  
          &nbsp;&nbsp;Home
        </NavBarLink>
        <NavBarLink to="/about">
          <Symbol><BiUser /></Symbol>  
          &nbsp;&nbsp;About
        </NavBarLink>
        <NavBarLink to="/projects">
          <Symbol><BiTask/></Symbol>  
          &nbsp;&nbsp;Projects
        </NavBarLink>
        <NavBarLink to="/contact">
          <Symbol><BiMailSend/></Symbol>  
          &nbsp;&nbsp;Contact
        </NavBarLink>
        <ResumeButton to='HirwaJeanEric.pdf'>Resume</ResumeButton>
        <MenuButton onClick={handleClick}>{menuOpen ? <><CgClose/></> : <><CgMenuRight /></>}</MenuButton>
      </NavMenuSpace>

      {menuOpen && (
        <NavBarExtendedContainer>
          <NavBarLinkExtended onClick={handleClick} to="/">
            <Symbol><BiHome /></Symbol>  
            &nbsp;&nbsp;Home
          </NavBarLinkExtended>
          <NavBarLinkExtended onClick={handleClick} to="/about">
            <Symbol><BiUser /></Symbol>  
            &nbsp;&nbsp;About
          </NavBarLinkExtended>
          <NavBarLinkExtended onClick={handleClick} to="/projects">
            <Symbol><BiTask/></Symbol>  
            &nbsp;&nbsp;Projects
          </NavBarLinkExtended>
          <NavBarLinkExtended onClick={handleClick} to="/contact">
            <Symbol><BiMailSend/></Symbol>  
            &nbsp;&nbsp;Contact
          </NavBarLinkExtended>
          <ResumeButtonExtended onClick={handleClick} to='/HirwaJeanEric.pdf' target="_blank" rel="noreferrer" >Resume</ResumeButtonExtended>
        </NavBarExtendedContainer>
      )}
    </NavigationContainer>
  )
}

export default NavigationBar