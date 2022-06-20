import React from "react";
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './Layout.module.scss';


interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <div className={styles.wrapper}>
                <Header />
                <div className={styles.bodyWrap}>{children}</div>
                <Footer />
            </div>
        </>
    );
};

export default Layout;