import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
    className: 'align-self-center'
}))`
    height: 100px;
    max-width: 100%;
    padding: 0 20px;

    margin: 70px 0;

`;

export const Content = styled.div`
    position: relative;
    max-width: 100%;
    height: 55px;
    margin: 0 auto;
    border-radius: 40px;
    color: var(--darkGrey);

    img {
        position: absolute;
        left: 15px;
        top: 14px;
        width: 30px;
        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }

    input {
        position: absolute;
        left: 0;
        margin: 8px 0;
        padding: 0 0 0 60px;
        border: 0;
        width: 95%;
        height: 40px;

        :focus {
            outline: none;
        }
    }
`;