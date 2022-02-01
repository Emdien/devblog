import styled from 'styled-components';


export const Wrapper = styled.div.attrs(() => ({
    className: 'container border',
}))`

    text-decoration: none !important;
    background-color: #f5f5f5;

    margin-top: 70px;

    animation: fadeIn 1s;

    @keyframes fadeIn {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export const Content = styled.div`
    padding: 20px;
    max-width: 100%;

`;
