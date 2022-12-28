import styled from 'styled-components'; 
import { Link } from 'react-router-dom';

export const FooterSectionContainer = styled.section`
    dispay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 0.8em;
    // background: black;
    background: #001a33;
    width: 100%;
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
    
    }

    @media (max-width: 480px) {
        
    } 
`;

export const BottomNavigation = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: 4rem auto;

    @media (min-width: 1920px) {
        // width: 85%;
    }

    @media (max-width: 1366px) {
        // width: 100%;
    }

    @media (max-width: 768px) {
        // flex-wrap: wrap;
    }

    @media (max-width: 480px) {
        width: 90%;
        margin: 1rem auto;
    } 
`;

export const BottomNavigationItem = styled(Link)`
    color: #cce6ff;
    text-decoration: none;

    &:hover {
        color: #33bbff;
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    } 
`;

export const SocialLinks = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 20%;
    margin: 3rem auto;
    font-size: 1.5rem; 

    @media (min-width: 1920px) {
        // width: 85%;
    }

    @media (max-width: 1366px) {
        // width: 100%;
    }

    @media (max-width: 768px) {
        width: 30%;
    }

    @media (max-width: 480px) {
        width: 40%;
        margin: 2rem auto;
    } 
`;

export const ALink = styled.a`
    color: #cce6ff;

    &:hover {
        color: #33bbff;
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    } 
`;

export const UnderLine = styled.div`
    height: 0.1rem;
    width: 60%;
    margin: 0 auto;
    background: #33bbff;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    } 
`;

export const CopyRightText = styled.p`
    text-align: center;
    padding: 3rem 0rem 1rem;
    color: #cce6ff;
    line-height: 1.5rem;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        padding: 2rem 0rem 1rem;
    } 
`;


