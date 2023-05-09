import React from 'react'
import { SectionContainer } from '../components/GeneralStyledComponents'
import { AProject, ImageContainer, ProjectDescription, ProjectTitle, ViewMoreButton, ViewMoreContainer } from '../components/ProjectsStyledComponents'
import ProjectData from '../utils/ProjectData';
import { Link } from 'react-router-dom';

export default function HomeProjects() {
  return (
    <SectionContainer style={{ background: '#e0e0eb'}}>
      {ProjectData && ProjectData.map((project, index) => (
        <AProject key={index}>
          <ImageContainer>
            <img src={project.imageAddress} alt={project.alt}/> 
          </ImageContainer>
          <ProjectDescription>
            <ProjectTitle>
              <h3>{"0"+(index+1)}</h3>
              <h4>{project.title}</h4>
            </ProjectTitle>
            <p>{project.description}</p>
            <Link to={"projects/"+project.title.toLowerCase()}>Case Study ❱❱</Link>
          </ProjectDescription>
        </AProject>
      ))}
      <ViewMoreContainer>
        <span></span>
        <div>
          <ViewMoreButton to={'projects'}>More Projects  &nbsp;❱❱</ViewMoreButton>
        </div>
      </ViewMoreContainer>
    </SectionContainer>
  )
}