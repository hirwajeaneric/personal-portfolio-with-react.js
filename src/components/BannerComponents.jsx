
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BannerContainer = styled.section`
    padding: 6em 0em;
    background: black;
    dispay: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 1366px;
    font-size: 1.1em;
    height: 100vh;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        padding: 1.5em 3em;
    }

    @media (max-width: 480px) {
        padding: 4em 1.5em;
    }
`;


export const Greetings = styled.p`
    color: #33bbff;
    text-align: center;
    font-family: 'Space Mono', monospace;
    line-height: 0rem;

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        line-height: 1rem;
    }

`;

export const MyName = styled.h1`
    font-weight: 900;
    font-size: 5vw;
    text-align: center;
    color: #cce6ff;
    line-height: 2.5rem;
    
    @media (min-width: 1920px) {
        font-size: 3vw;
    }

    @media (min-width: 1366px) {
        
    }

    @media (max-width: 768px) {
        font-size: 2.6em;
        line-height: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 2em;
        line-height: 1rem;
    }
`;

export const WhatIDo = styled.h1`
    font-weight: 900;
    font-size: 3vw;
    text-align: center;
    width: 60%;
    margin: 2rem auto 0;
    color: #79a6d2;
    line-height: 2.5rem;
    
    @media (min-width: 1920px) {
        font-size: 2vw;
    }

    @media (min-width: 1366px) {

    }

    @media (max-width: 768px) {
        font-size: 2.6em;
        line-height: 3.5rem;
        width: 90%;
    }

    @media (max-width: 480px) {
        font-size: 2em;
        line-height: 2.5rem;
        width: 100%;
        margin-top: 4rem;
    }
`;

export const AWordAboutMe = styled.p`
    color: #79a6d2;
    width: 60%;
    text-align: center;
    line-height: 2rem;
    margin: 4rem auto 2rem;

    span {
        // color: #33bbff;
        // color: #cce6ff;
        color: white;
    }

    @media (max-width: 1920px) {
        // width: 50%;
    }

    @media (max-width: 1366px) {
        // width: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
    }

    @media (max-width: 480px) {
        
    }
`;

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const CallToActionButton = styled(Link)`
    background: none;
    font-family: 'Space Mono', monospace;
    color: #33bbff;
    text-decoration: none;
    border: 1.5px solid #33bbff;
    padding: 1rem 1rem;
    font-size: 1rem;
    text-align: center;

    &:hover {
        border-left: none;
        border-right: none;
    }

`;