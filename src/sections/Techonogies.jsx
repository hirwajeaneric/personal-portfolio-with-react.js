import React from 'react'
import { FaCss3, FaHtml5, FaJava, FaJs, FaNodeJs, FaReact, FaWordpress } from 'react-icons/fa'
import { SiTailwindcss, SiMysql, SiMongodb, SiMaterialui, SiExpress, SiAdobecreativecloud } from 'react-icons/si';
import { IconContainer, LeftSide, RightSide } from '../components/AboutTechnologiesComponents'
import { ButtonContainer, CallToActionButton } from '../components/BannerComponents'
import { ElementsContainer } from '../components/FooterComponents'
import { LightSectionContainer, SectionTitle, SimpleTwoSidedContainer, TwoSidedComponent } from '../components/ProjectsComponents'

const Techonogies = () => {
  return (
    <LightSectionContainer>
        <ElementsContainer>
            <SectionTitle style={{color: "#cce6ff"}}>Technologies that I use</SectionTitle>
            <TwoSidedComponent style={{marginTop: '2rem'}}>
                <LeftSide>
                    <p>I use a number of technologies, languages and software in my creation and development process:</p>
                    <SimpleTwoSidedContainer>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>Java</li>
                            <li>WordPress</li>
                            <li>Rest</li>
                            <li>Adobe Suite</li>
                        </ul>
                        <ul>
                            <li>React.js</li>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>MongoDB</li>
                            <li>MySql</li>
                            <li>Material UI</li>
                            <li>Tail Wind CSS</li>
                        </ul>
                    </SimpleTwoSidedContainer>
                </LeftSide>
                <RightSide>
                    <IconContainer>
                        <FaHtml5/>
                        <FaCss3/>
                        <FaJs/>
                        <FaJava/>
                        <FaWordpress/>
                        <SiAdobecreativecloud/>
                        <FaReact/>
                        <FaNodeJs/>
                        <SiExpress/>
                        <SiMongodb/>
                        <SiMysql/>
                        <SiMaterialui/>
                        <SiTailwindcss/>
                    </IconContainer>
                </RightSide>
            </TwoSidedComponent>
            <ButtonContainer>
                <CallToActionButton to={'/contact'}>Let's get in touch!</CallToActionButton>
            </ButtonContainer>
        </ElementsContainer>
    </LightSectionContainer>
  )
}

export default Techonogies