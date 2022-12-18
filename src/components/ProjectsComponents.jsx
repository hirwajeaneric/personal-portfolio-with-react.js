import styled from 'styled-components'; 

export const ProjectsSectionContainer = styled.section`
    dispay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1366px;
    font-size: 1.1em;
    background: #cce6ff;
    width: 100%;
    // margin: 2rem 0rem;
    padding: 2rem 0rem;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
    
    }

    @media (max-width: 480px) {
        
    } 
`;

export const SectionTitle = styled.h2`
    font-weight: 900;
    font-size: 3vw;
    text-align: center;
    margin: 2rem auto 0;
    color: #79a6d2;

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
        margin: 0rem auto 0;
    }
`;

export const SectionTagLine = styled.p`
    color: black;
    width: 50%;
    text-align: center;
    line-height: 2rem;
    margin: 1rem auto 2rem;

    @media (max-width: 1920px) {
        
    }

    @media (max-width: 1366px) {
        
    }

    @media (max-width: 768px) {
        width: 90%;
    }

    @media (max-width: 480px) {
        display: none;
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
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const ImageSpace = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 45%;
    z-index: 10;
    height: 20rem;
    background: black;
`;

export const DetailsSpace = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    width: 45%;
    z-index: 8;
`;

export const ProjectType = styled.p`

`;

export const ProjectTitle = styled.h2`

`;

export const ProjectDescription = styled.p`

`;

export const UsedTechnologies = styled.div`

`;

export const TechName = styled.p`

`;

export const ProjectsLinks = styled.div`

`;
