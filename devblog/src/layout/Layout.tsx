import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './Layout.module.scss';
import LayoutController from "./Layout.controller";


interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    
    const { theme, switchTheme } = LayoutController();

    return (
        <div className={styles.wrapper} data-theme={theme}>
            <Header theme={theme} handleTheme={switchTheme} />
            <div className={styles.bodyWrapper}>
                <div className={styles.bodyContent}>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;