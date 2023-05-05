import React from 'react';
import * as styles from './Drawer.module.scss';
import { Link } from 'gatsby';
import cn from 'classnames';

interface DrawerProps {
    closeDrawer: () => void;
    show: boolean;
    links: { to: string; name: string }[];
}

function Drawer({ closeDrawer, show, links }: DrawerProps) {
    return (
        <div
            className={cn(styles.drawer, {
                [styles['open']]: show,
            })}
        >
            <div className={styles.burguer_container}>
                <div className={styles.burguer_header}>
                    <button onClick={closeDrawer}> X </button>
                    <h2> Menú </h2>
                </div>
                <ul className={styles.burguer_list}>
                    {links.map((link) => (
                        <li key={link.to} onClick={closeDrawer}>
                            <Link to={link.to} className={styles.links}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Drawer;
