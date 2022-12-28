import React, { useEffect, useState } from 'react'
import { BiLink } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { DetailsSpace, ElementsContainer, ImageSpace, ProjectContainer, ProjectDescription, ProjectsLinks, LightSectionContainer, ProjectTitle, ProjectType, SectionTagLine, SectionTitle, TechName, UsedTechnologies, MoreProjectsButton, TwoSidedComponent } from '../components/ProjectsComponents'
import myProjects from '../data/ProjectData';

const AllProjects = () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(myProjects)
  }, [projects]);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <LightSectionContainer>
      <ElementsContainer>
        <SectionTitle 
            style={{paddingTop: '3rem'}}
        >My Projects</SectionTitle>
        <SectionTagLine>
          These are some of the personal and clients projects that I created with each project
          containing its own case study.
        </SectionTagLine>
        <ProjectContainer>
          {projects && projects.map((project, index) =>
            <TwoSidedComponent>
              <ImageSpace
                href={`${project.repositoryLink}`} target='_blank' rel="noreferrer"
                className='image-space'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  background: `url(${project.imageAddress}), rgba(204, 230, 255, 1)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundBlendMode: isHovering ? 'normal' : 'multiply',
                  cursor: 'pointer',
                }}>
              </ImageSpace>
              <DetailsSpace>
                <ProjectType>{project.type}</ProjectType>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  {project.description}
                </ProjectDescription>
                <UsedTechnologies>
                  {project.technologies.map((tech, index) => (
                    <TechName key={index}>{tech}</TechName>
                  ))}
                </UsedTechnologies>
                <ProjectsLinks>
                  <a href={project.repositoryLink} target='_blank' rel="noreferrer"><FaGithub /></a>
                  {project.previewLink && <a href={project.previewLink} target='_blank' rel="noreferrer"><BiLink /></a>}
                </ProjectsLinks>
              </DetailsSpace>
            </TwoSidedComponent>
          )}
        </ProjectContainer>
      </ElementsContainer>
    </LightSectionContainer>
  )
}

export default AllProjects
