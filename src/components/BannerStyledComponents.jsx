import styled from 'styled-components';

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    position: sticky; 
    top: 0;
    background: black;
    padding: 20px 0;
    z-index: 1000;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const TopBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1300px; 
    width: 85vw; 

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const Logo = styled.p`
    padding: 0 5px;
    background-color: white;
    color: black;
    font-size: 2rem;
    margin: 0;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const MenuButton = styled.button`
    padding: none;
    margin: none;
    color: white;
    font-size: 120%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: 200;

    &:hover {
        font-weight: 600;
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

export const SelfIntro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    font-size: 1rem;
    margin-top: 0px;

    h1 {
        font-size: 7rem;
        margin: 0.1em 0 0 0;
        padding: 0;
        color: gray;
    }

    h2 {
        font-size: 3rem;
        margin: 0.7em 0 0.7em;
        padding: 0;
    }

    h3, p {
        font-size: 1em;
        margin: 1em 0em;
        font-weight: 200;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: white;
        margin-top: 2rem;
        padding: 20px 0px;
        border-bottom: 1px solid white;
        font-weight: 200;
        font-size: 140%;
    }

    a:hover {
        font-weight: 800;
        width: 50%;
        border-bottom: 2px solid white;
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        margin-top: 10px;

        h1 {
            font-size: 4rem;
        }  
        h2 {
            font-size: 2rem;
            margin: 10px 0 20px;
            padding: 0;
        } 
    }

    @media (max-width: 480px) {
        h1 {
            font-size: 4rem;
            line-height: 4rem;
        }  
    }
`;

export const Thin = styled.span`
    font-weight: 300;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const Menu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    padding: 80px;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        padding: 80px 20px;
    }

    @media (max-width: 480px) {
        padding: 80px 20px;
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    width: 100%;
    padding: 40px 0;

    a {
        color: gray;
        text-decoration: none;
        padding: 20px 0;
        padding-right: 20px;
        font-size: 3rem;
        font-weight: 200;
        text-align: right;
    }

    a:hover {
        font-weight: 600;
        color: white;
    }

    a.active {
        background: gray;;
        color: black;
        width: 100%;
        text-align: right;
        font-weight: 600;
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        a {
            padding: 10px 0;
            font-size: 1.7rem;
            font-weight: 400;
        }
    
        a:hover {
            font-weight: 600;
        }
    
        a.active {
            padding-right: 20px;
            font-weight: 600;
        }
    }

    @media (max-width: 480px) {
        
    }
`;

export const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 40px;
    color: gray;

    a {
        color: white;
        text-decoration: none;
    }

    a:hover {
        font-weight: 600;
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        flex-direction: row;
        justify-content: flex-end;
        align-items: flex-end;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        
        a {
            font-size: 90%;
        }
    }

    @media (max-width: 480px) {
        
    }
`;

export const D = styled.div`
    

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
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

export const PopupBoxStyles = {
    position: 'absolute',
    top: '0',
    right: '0',
    height: '100%',
    width: '75%',
    color: 'white',
    background: 'rgba(0,0,0,0.8)',
    boxShadow: 24,
};