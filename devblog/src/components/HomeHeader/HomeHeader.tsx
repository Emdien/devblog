import React from "react";
import styles from './HomeHeader.module.scss';
import Profile from '../../images/reze.png'

const HomeHeader = () => {


    // TODO: Hardcoded URL for avatar. Should do an API request  to grab it instead.
    // Ideally it would be cached aswell to prevent API request spam

    return (
        <>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <img className={styles.logo} src="https://avatars.githubusercontent.com/u/56626660?v=4" alt="Profile" />
                </div>

                <div className={styles.about}>
                    <div className={styles.aboutContent}>
                        <h1 className={styles.aboutHeader}>¡Bienvenido a mi devblog!</h1>
                        <p className={styles.aboutText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolorem odit, dolore ipsam delectus exercitationem dicta itaque neque magni, quis tenetur fuga ipsa vitae eligendi, aperiam possimus recusandae accusamus sint.</p>
                    </div>
                    <div className={styles.learnMore}>
                        <button>Leer más</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeader;