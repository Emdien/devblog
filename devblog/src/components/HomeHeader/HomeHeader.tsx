import React from "react";
import { Link } from "react-router-dom";
import styles from './HomeHeader.module.scss';

interface HomeHeaderProps {
    avatar: string
}

const HomeHeader = ({avatar}: HomeHeaderProps) => {

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src={avatar} alt="Profile" />
                </div>

                <div className={styles.about}>
                    <div className={styles.aboutContent}>
                        <h1 className={styles.aboutHeader}>¡Bienvenido a mi devblog!</h1>
                        <p className={styles.aboutText}>En esta página me dedico simplemente a escribir sobre mis experiencias a la hora de utilizar ciertas tecnologías o aspectos de estas, de forma que pueda ser útil para otras personas que se enfrenten a la misma situación.</p>
                    </div>
                    <div className={styles.learnMore}>
                        <Link to={"/aboutme"}>
                            <button className={styles.learnBtn}>Leer más</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeader;