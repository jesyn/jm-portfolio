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

    const handdleDrawer = () => {
        setDrawer(!drawer);
    };

    return (
        <div className={styles.NavContainer}>
            <h1 className={styles.user}> {userName}</h1>
            {isMobile ? (
                <>
                    <LanguagesButton />
                    <div onClick={handdleDrawer} className={styles.burger_icon}>
                        <BurguerMenu />
                    </div>
                </>
            ) : (
                <Menu />
            )}

            {isMobile && <Drawer show={drawer} closeDrawer={handdleDrawer} />}
        </div>
    );
};

export default Navbar;
