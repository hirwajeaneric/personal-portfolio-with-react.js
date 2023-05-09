import styled from 'styled-components';

export const MainPageContainer = styled.div`
    background: black;
    min-height: 100vh;
    color: white;
    padding: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    width: 100%:


    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;

export const SectionContainer = styled.section` 
    width: 100vw;
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

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

export const BannerSectionContainer = styled.section` 
    margin-bottom: 6rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
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

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    min-height: 400px;

    h2 {
        color: black;
        font-size: 3em;
    }

    div {
        width: 50%;
        
        p {
            font-weight: 300;
            line-height: 1.5rem;
        }
    }

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        min-height: 250px;
        margin-top: 40px; 

        div {
            width: 100%;
            p {
                width: 100%;
                font-weight: 300;
                lineheight: 2rem;
            }
        }
    }

    @media (max-width: 480px) {
        min-height: 200px;
    }
`;

export const InnerContainerTwo = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: nowrap;
    max-width: 1300px;
    width: 85vw;

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        // margin-top: 4rem; 
        flex-wrap: wrap;

        div {
            width: 100%;
        }
    }

    @media (max-width: 480px) {

    }
`;


export const RightSide = styled.div`
    width: 50%;

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: nowrap;
    }

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

export const LeftSide = styled.div`
    width: 50%;

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

export const SectionHeader = styled.section`
    font-size: 3em;
    

    @media (min-width: 1920px) {
        
    }

    @media (max-width: 1366px) {

    }

    @media (max-width: 768px) {
        
    }

    @media (max-width: 480px) {
        
    }
`;
