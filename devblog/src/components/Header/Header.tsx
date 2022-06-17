import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Link to='/'>
                <h1>MdN</h1>
            </Link>
            <a>
                Settings icon
            </a>
            <a href="https://github.com/Emdien" target="_blank">
                GitHub icon
            </a>
            
            <a href="https://twitter.com/Gonima08" target="_blank">
                Twitter icon
            </a>
        </>
    );
};

export default Header;