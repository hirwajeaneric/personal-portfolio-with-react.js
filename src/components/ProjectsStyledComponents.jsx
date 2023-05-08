import styled from 'styled-components';

export const AProject = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin-bottom: 6rem;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        
    }
`;

export const ImageContainer = styled.img`
    width: 60%;
    border: 2px solid gray;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        width: 100%;
        border: 1px solid gray;
    }

    @media (max-width: 480px) {
        
    }
`;

export const ProjectDescription = styled.div`
    color: black;

    p {
        font-size: 90%;
        margin: 2rem;
        max-width: 70%; 
        font-weight: 300;
    }

    a {
        text-decoration: none;
        color: black;
        border-bottom: 1px solid black;
        margin: 0 0 0 2rem;
        padding: 0px 0px 10px 0px;

    }

    a:hover {
        font-weight: 600;
        border-bottom: 3px solid gray;
        color: gray;
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 2rem;

        p {
            max-width: 100%; 
            font-size: 100%;
            margin: 20px;
        }    

        a {
            margin: 0 0 0 20px; 
        }
    }

    @media (max-width: 480px) {
        
    }
`;

export const ProjectTitle = styled.div`
    h3 {
        color: gray;
        font-size: 300%;
        font-style: italic;
        margin: 0 0 0 2rem;
    }

    h4 {
        font-size: 350%;
        margin: 0;
        max-width: 70%;
        margin: 0 0 0 2rem;
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        h3 {
            font-size: 150%;
            margin: 0 0 0 20px;
        }
    
        h4 {
            font-size: 200%;
            max-width: 100%;
            margin: 0 0 0 20px;
        }
    }

    @media (max-width: 480px) {
        
    }
`;

export const E = styled.div`
    

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const F = styled.div`
    

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;
