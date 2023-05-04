import React from 'react';
import * as styles from './Drawer.module.scss';
import { Link } from 'gatsby';
import cn from 'classnames';

interface DrawerProps {
    closeDrawer: () => void;
    show: boolean;
}

function Drawer({ closeDrawer, show }: DrawerProps) {
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
                    <li onClick={closeDrawer}>
                        <Link to='/' className={styles.links}>
                            Inicio
                        </Link>
                    </li>
                    <li onClick={closeDrawer}>
                        <Link to='/about-me' className={styles.links}>
                            Sobre mí
                        </Link>
                    </li>
                    <li onClick={closeDrawer}>
                        <Link to='/proyects' className={styles.links}>
                            Proyectos
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Drawer;
