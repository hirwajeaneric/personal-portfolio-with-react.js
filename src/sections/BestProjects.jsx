import React, { useEffect, useState } from 'react'
import { BiLink } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { AProject, DetailsSpace, ImageSpace, ProjectContainer, ProjectDescription, ProjectsLinks, ProjectsSectionContainer, ProjectTitle, ProjectType, SectionTagLine, SectionTitle, TechName, UsedTechnologies } from '../components/ProjectsComponents'
import myProjects from '../data/ProjectData'

const BestProjects = () => {
  
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    setProjects(myProjects)
  },[projects]);

  return (
    <ProjectsSectionContainer>
        <SectionTitle>Some things I've built</SectionTitle>
        <SectionTagLine>
          These are some of the personal and clients projects that I created with each project
containing its own case study.
        </SectionTagLine>
        <ProjectContainer>
          {projects && projects.map((project,index) => (
            <AProject>
              <ImageSpace>
                <img src={project.imageAddress} alt='' />
              </ImageSpace>
              <DetailsSpace>
                <ProjectType>{project.type}</ProjectType>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <UsedTechnologies>
                  <TechName>{project.technologies}</TechName>
                </UsedTechnologies>
                <ProjectsLinks>
                  <a href={project.repositoryLink} target='_blank' rel="noreferrer"><FaGithub/></a>
                  {project.previewLink && <a href={project.previewLink} target='_blank' rel="noreferrer"><BiLink/></a>}
                </ProjectsLinks>
              </DetailsSpace>
            </AProject>)
          )}
        </ProjectContainer>
    </ProjectsSectionContainer>
  )
}

export default BestProjects