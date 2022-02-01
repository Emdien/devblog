import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);

`;

export const Content = styled.div`
    
    display: flex;
    max-width: 250px;

    @media (max-width: 768px) {
        float: none;
        margin: auto;
        text-align: center;
    }

    h1 {
        text-decoration: none;

        margin: 0;

        @media (max-width: 768px) {
            margin-top: 30px;
            margin-bottom: 30px;
        }
        
    }

    a {
        margin: auto;
        text-decoration: none;
    }
`;

export const Buttons = styled.div`
    justify-content: right;
    max-width: 250px;
    min-width: 250px;
    display: flex;
    float: right;

    @media (max-width: 768px) {
        float: none;
        margin: auto;
    }

    a {
        margin: auto;

        @media (max-width: 768px) {
            margin-bottom: 15px;
        }
        
    }



`;

