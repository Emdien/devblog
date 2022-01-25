import React from "react";
import { Link } from 'react-router-dom';
import MDNLogo from '../../images/ef3-placeholder-image.jpg';
import GHLogoImg from '../../images/ghlogo.jpg';
import TWLogoImg from '../../images/twlogo.jpg';

import { Wrapper, Content, LogoImg, GHLogo, TWLogo } from './Header.styles';

const Header = () => (
    <Wrapper>
        <Content>
            <Link to='/'>
                <LogoImg src={MDNLogo} alt='mdn-logo' />
            </Link>
            <Socials>
                <Link to='github.com/Emdien'>
                    <GHLogo src={GHLogoImg} alt='github-page' />
                </Link>
                <Link to='twitter.com/Gonima08'>
                    <TWLogo src={TWLogoImg} alt='twitter-page' />
                </Link>
            </Socials>
        </Content>
    </Wrapper>
);

export default Header;