import React from "react";
import Header from '../components/Header/Header';


interface LayoutProps {
    children?: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            <div>{children}</div>
        </>
    );
};

export default Layout;