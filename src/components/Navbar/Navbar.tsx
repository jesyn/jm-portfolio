import React from 'react';
import BurguerMenu from './BurguerMenu';
import { useMediaQuery } from 'react-responsive';
import { MD } from '../../utils/constants';
import Menu from './Menu';

const Navbar = () => {
    const userName = process.env.GATSBY_USER_NAME;
    const isMobile = useMediaQuery({ query: `(max-width: ${MD})` });

    if (!userName) {
        throw new Error('username not found in env');
    }

    return (
        <div>
            <p> {userName}</p>
            {isMobile ? <BurguerMenu /> : <Menu />}
        </div>
    );
};

export default Navbar;
