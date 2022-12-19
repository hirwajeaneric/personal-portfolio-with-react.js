import React, { useEffect, useState } from 'react'
import { BiLink } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { AProject, DetailsSpace, ElementsContainer, ImageSpace, ProjectContainer, ProjectDescription, ProjectsLinks, ProjectsSectionContainer, ProjectTitle, ProjectType, SectionTagLine, SectionTitle, TechName, UsedTechnologies } from '../components/ProjectsComponents'
import myProjects from '../data/ProjectData'

const BestProjects = () => {
  
  const [projects, setProjects] = useState([]);

  useEffect(()=>{
    setProjects(myProjects)
  },[projects]);

  return (
    <ProjectsSectionContainer>
      <ElementsContainer>
        <SectionTitle>Some things I've built</SectionTitle>
        <SectionTagLine>
          These are some of the personal and clients projects that I created with each project
containing its own case study.
        </SectionTagLine>
        <ProjectContainer>
          {projects && projects.map((project,index) => (
            <AProject>
              <ImageSpace>
                <img src={project.imageAddress} alt={project.alt} />
              </ImageSpace>
              <DetailsSpace>
                <ProjectType>{project.type}</ProjectType>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <UsedTechnologies>
                  {project.technologies.map((tech, index)=> (
                    <TechName key={index}>{tech}</TechName>
                  ))}
                </UsedTechnologies>
                <ProjectsLinks>
                  <a href={project.repositoryLink} target='_blank' rel="noreferrer"><FaGithub/></a>
                  {project.previewLink && <a href={project.previewLink} target='_blank' rel="noreferrer"><BiLink/></a>}
                </ProjectsLinks>
              </DetailsSpace>
            </AProject>)
          )}
        </ProjectContainer>
      </ElementsContainer>
    </ProjectsSectionContainer>
  )
}

export default BestProjects