import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <>
            <Link to='/'>
                <h1>MdN</h1>
            </Link>
            <a>
                Settings icon
            </a>
            <a href="https://github.com/Emdien" target="_blank" rel="noreferrer">
                GitHub icon
            </a>
            
            <a href="https://twitter.com/Gonima08" target="_blank" rel="noreferrer">
                Twitter icon
            </a>
        </>
    );
};

export default Header;