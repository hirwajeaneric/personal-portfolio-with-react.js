import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

export const ProjectsSectionContainer = styled.section`
    dispay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.1em;
    background: #001a33;
    width: 100%;
    padding: 2rem 0rem 6rem;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {
        padding: 2rem 0rem 3rem;
    }

    @media (max-width: 768px) {
        padding: 2rem 0rem 2rem;    
    }

    @media (max-width: 480px) {
        padding: 2rem 0rem 1rem;
    } 
`;

export const ElementsContainer = styled.div`
    dispay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 1.1em;
    width: 80%;
    margin: 0 auto;

    @media (min-width: 1920px) {
        width: 70%;
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        width: 90%;
    } 
`;

export const SectionTitle = styled.h2`
    font-weight: 900;
    font-size: 3vw;
    text-align: center;
    margin: 2rem auto 0;
    color: #79a6d2;
    color: white;

    @media (min-width: 1920px) {
        font-size: 2vw;
    }

    @media (min-width: 1366px) {

    }

    @media (max-width: 768px) {
        font-size: 2.6em;
        width: 90%;
    }

    @media (max-width: 480px) {
        font-size: 2em;
        font-weight: 600;
        margin: 2.5rem auto;
    }
`;

export const SectionTagLine = styled.p`
    color: #cce6ff;
    width: 50%;
    text-align: center;
    line-height: 1.7rem;
    margin: 1rem auto 4rem;
    font-size: 1rem;

    @media (max-width: 1920px) {
        
    }

    @media (max-width: 1366px) {
        
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        // display: none;
    }
`;

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const AProject = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 6rem;
    position: relative;

    @media (min-width: 1920px) {
        width: 85%;
    }

    @media (max-width: 1366px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-bottom: 4rem;  
    }

    @media (max-width: 480px) {
        margin-bottom: 3rem;  
    } 
`;

export const ImageSpace = styled.a`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 70%;
    z-index: 8;
    height: 24rem;
    background: gray;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        width: 100%;
        height: 11rem;
    } 
`;

export const DetailsSpace = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    width: 50%;
    z-index: 10;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    } 
`;

export const ProjectType = styled.p`
    color: #33bbff;
    font-size: 0.9rem;
    font-family: 'Space Mono', monospace;
    margin-bottom: -1rem;
`;

export const ProjectTitle = styled.h2`
    color: white;
`;

export const ProjectDescription = styled.p`
    font-size: 1rem;
    line-height: 1.5rem;
    color: #cce6ff;
    background: #004280;
    padding: 1rem;
    text-align: right;
    margin: -0rem 0rem 0rem;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
      padding: 0.8rem;  
    } 
`;

export const UsedTechnologies = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0rem 0rem;
    width: 100%;
    flex-wrap: wrap;
`;

export const TechName = styled.li`
    font-family: 'Space Mono', monospace;
    font-size: 0.9rem;
    list-style-type: none;
    padding-left: 15px;
    color: #79a6d2;
`;

export const ProjectsLinks = styled.div`
    // margin-bottom: 4rem;
    a {
        color: white;
    }
`;

export const MoreProjectsButton = styled(Link)`
   padding: 0.7rem 1rem;
   text-decoration: none;
   border: .14rem solid #004280;
   color: white;
   font-family: 'Space Mono', monospace;
   tex-align: center;
   font-size: 1rem;

   &:hover {
    background: #004280;
   }
`;
