import React from "react";
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
                        <p className={styles.aboutText}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam dolorem odit, dolore ipsam delectus exercitationem dicta itaque neque magni, quis tenetur fuga ipsa vitae eligendi, aperiam possimus recusandae accusamus sint.</p>
                    </div>
                    <div className={styles.learnMore}>
                        <button className={styles.learnBtn}>Leer más</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomeHeader;