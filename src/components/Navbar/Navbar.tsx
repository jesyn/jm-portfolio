import React, { useState } from 'react';
import BurguerMenu from './BurguerMenu';
import { useMediaQuery } from 'react-responsive';
import { MD } from '../../utils/constants';
import Menu from './Menu';
import * as styles from './Navbar.module.scss';
import Drawer from './Drawer';
import LanguagesButton from './LanguagesButton';
import cn from 'classnames';

const Navbar = () => {
    const userName = process.env.GATSBY_USER_NAME;
    const isMobile = useMediaQuery({ query: `(max-width: ${MD})` });
    const [drawer, setDrawer] = useState<null | boolean>(null);
    //const menu = drawer ? styles['openMenu'] : styles['closeMenu'];

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

            {drawer !== null && (
                <div
                    className={cn(styles.menu, {
                        [styles['openMenu']]: drawer,
                        [styles['closeMenu']]: !drawer,
                    })}
                >
                    {isMobile && <Drawer closeDrawer={handdleDrawer} />}
                </div>
            )}
        </div>
    );
};

export default Navbar;
