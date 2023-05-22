import React, { useState } from 'react';
import BurguerMenu from './BurguerMenu';
import { useMediaQuery } from 'react-responsive';
import { SM } from '../../utils/constants';
import Menu from './Menu';
import * as styles from './Navbar.module.scss';
import Drawer from './Drawer';
import LanguagesButton from './LanguagesButton';
import { Link } from 'gatsby';

const Navbar = () => {
    const userName = process.env.GATSBY_USER_NAME;
    const isMobile = useMediaQuery({ query: `(max-width: ${SM})` });
    const [drawer, setDrawer] = useState(false);

    const links = [
        { to: '/', name: 'Inicio' },
        { to: '/about-me', name: 'Sobre mí' },
        { to: '/proyects', name: 'Proyectos' },
    ];

    const handdleDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <div id="navbar" className={styles.NavContainer}>
            <div className={styles.userContainer}>
                <h1 className={styles.user}>
                    <Link to='/'> {userName}</Link>
                </h1>
            </div>
            {isMobile ? (
                <>
                    <LanguagesButton />
                    <div onClick={handdleDrawer} className={styles.burger_icon}>
                        <BurguerMenu />
                    </div>
                    <Drawer
                        show={drawer}
                        closeDrawer={handdleDrawer}
                        links={links}
                    />
                </>
            ) : (
                <Menu links={links} />
            )}
        </div>
    );
};

export default Navbar;
