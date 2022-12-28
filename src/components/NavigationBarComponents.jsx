import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationContainer = styled.header`
    // background: black;    
    background: #001a33;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 20;
    position: fixed;
    top: 0;
    width: 100%;
    // box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const NavBarExtendedContainer = styled.div`
    font-family: 'Space Mono', monospace;
    position: absolute;
    top: 70px;
    left: 0;
    height: calc(100vh - 60px);
    width: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const NavLogoSpace = styled.div`
    width: 30%;
    padding-left: 50px;

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        text-decoration: none;
        font-size: 1.1rem;
        color: #cce6ff;
        
        span {
            margin-left: 20px;
            font-weight: 900;
            // padding-bottom: 7px;
            // border-bottom: 0.12rem solid #cce6ff; 
        }
    }
    
    @media (max-width: 768px) {
        padding: 5px 30px;
        width: 50%;
        a {
            span {
                display: none;
            }
        }
    }

    @media (max-width: 480px) {
        padding: 0 20px;
        a {
            span {
                display: none;
            }
        }
    }
`;

export const Logo = styled.img`
    height: 40px;
`;

export const NavMenuSpace = styled.div`
    width: 80%;
    padding-right: 50px;
    display: flex;
    flex-direction: row;
    font-family: 'Space Mono', monospace;
    justify-content: flex-end;
    align-items: center;

    @media (max-width: 768px) {
        padding: 5px 30px;
    }

    @media (max-width: 480px) {
        padding: 0 20px;
    }
`;

export const NavMobileMenu = styled.div`

`;

export const NavBarLink = styled(NavLink)`
    font-size: 0.8rem;
    text-decoration: none;
    color: #cce6ff;
    margin: 10px;
    padding: 0 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: #33bbff;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const Symbol = styled.p`
    color: #33bbff;
    display: inline;
    font-size: 1rem;
    padding: 0;
    margin: 0;
`; 

export const NavBarLinkExtended = styled(NavLink)`
    font-size: large;
    text-decoration: none;
    color: white;
    margin: 10px;
    padding: 0 10px;
    cursor: pointer;
    margin-bottom: 30px;

    &:hover {
        color: #33bbff;
    }
`;

export const MenuButton = styled.button`
    width: 40px;
    height: 50px;
    border: none;
    background: none;
    font-size: 40px;
    color: #33bbff;
    cursor: pointer;

    @media (min-width: 769px) {
        display: none;
    }
`;

export const ResumeButton = styled(Link)`
    background: none;
    color: #33bbff;
    padding: 0.5rem;
    text-decoration: none;
    border: 1px solid #33bbff;
    // margin-left: 0px;
    // margin-right: 100px;

    &:hover {
        border-bottom: none;
        border-top: none;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const ResumeButtonExtended = styled(Link)`
    background: none;
    color: #33bbff;
    padding: 0.5rem;
    text-decoration: none;
    border: 1px solid #33bbff;
    margin-top: 20px;
`;