import { Link } from 'gatsby';
import React from 'react';
import LanguagesButton from './LanguagesButton';
import * as styles from './Menu.module.scss';

interface MenuProps {
    links: { to: string; name: string }[];
}

const Menu = ({ links }: MenuProps) => {
    return (
        <section className={styles.menuContainer}>
            {/* <LanguagesButton /> */}
            <div className={styles.menuOptions}>
                {links.map((link) => (
                    <nav key={link.to}>
                        <Link to={link.to} className={styles.links}>
                            {link.name}
                        </Link>
                    </nav>
                ))}
            </div>
        </section>
    );
};

export default Menu;
