import React, { useEffect, useState } from 'react'
import { BiLink } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { AProject, DetailsSpace, ElementsContainer, ImageSpace, ProjectContainer, ProjectDescription, ProjectsLinks, ProjectsSectionContainer, ProjectTitle, ProjectType, SectionTagLine, SectionTitle, TechName, UsedTechnologies, MoreProjectsButton } from '../components/ProjectsComponents'
import { ButtonContainer } from '../components/BannerComponents';
import myProjects from '../data/ProjectData';

const BestProjects = () => {

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
    <ProjectsSectionContainer>
      <ElementsContainer>
        <SectionTitle>Some things I've built</SectionTitle>
        <SectionTagLine>
          These are some of the personal and clients projects that I created with each project
          containing its own case study.
        </SectionTagLine>
        <ProjectContainer>
          {projects && projects.map((project, index) => (
	    index < 2 ?
            <AProject>
              <ImageSpace
                href={`${project.repositoryLink}`} target='_blank' rel="noreferrer"
                className='image-space'
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  background: `url(${project.imageAddress}), rgba(204, 230, 255, 1)`,
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
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
            </AProject> : '')
          )}
        </ProjectContainer>
	<ButtonContainer>
         <MoreProjectsButton to='/projects'>View More Works</MoreProjectsButton>
	</ButtonContainer>
      </ElementsContainer>
    </ProjectsSectionContainer>
  )
}

export default BestProjects
