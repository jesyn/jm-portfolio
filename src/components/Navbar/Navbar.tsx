import React, { useState } from 'react';
import BurguerMenu from './BurguerMenu';
import { useMediaQuery } from 'react-responsive';
import { MD } from '../../utils/constants';
import Menu from './Menu';
import * as styles from './Navbar.module.scss';
import Drawer from './Drawer';
import LanguagesButton from './LanguagesButton';

const Navbar = () => {
    const userName = process.env.GATSBY_USER_NAME;
    const isMobile = useMediaQuery({ query: `(max-width: ${MD})` });
    const [drawer, setDrawer] = useState(false);

    if (!userName) {
        throw new Error('username not found in env');
    }

    return (
        <div className={styles.NavContainer}>
            <p className={styles.user}> {userName}</p>
            {isMobile ? (
                <>
                    <LanguagesButton />
                    <div
                        onClick={() => setDrawer(true)}
                        className={styles.burger_icon}
                    >
                        <BurguerMenu />
                    </div>
                </>
            ) : (
                <Menu />
            )}

            {drawer && (
                <div className={styles.menu}>
                    {isMobile && (
                        <Drawer closeDrawer={() => setDrawer(false)} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Navbar;
