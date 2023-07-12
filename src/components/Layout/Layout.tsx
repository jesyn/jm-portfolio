import React from 'react';
import Footer from '../Footer/Footer';
import BurguerMenu from '../Navbar/BurguerMenu';
import Navbar from '../Navbar/Navbar';

interface LayoutProps {
    children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
