import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import themeImg from '../../images/theme-light-dark-1.svg'
import user from '../../images/User_font_awesome.svg'
import { HeaderProps } from './Header.types';

const Header = ({ theme, handleTheme }: HeaderProps) => {


    const test = () => {
        console.log('test')
    }

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Link to='/'>
                        <p className={styles.logo}>Emdien</p>
                    </Link>
                    
                </div>

                <div className={styles.hBlock} />

                <div className={styles.settingsContainer}>
                    <button className={styles.theme} onClick={handleTheme}>
                        <img src={themeImg} width='30' height='30' alt="" />
                    </button>

                    <button className={styles.login}>
                        <img src={user} width='30' height='30' alt="" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;