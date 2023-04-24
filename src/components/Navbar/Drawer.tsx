import React from 'react';
import * as styles from './Drawer.module.scss';

interface DrawerProps {
    closeDrawer: () => void;
}

function Drawer({ closeDrawer }: DrawerProps) {
    return (
        <>
            <div className={styles.burger_header}>
                <button onClick={closeDrawer}> X </button>
                <h2> Menú </h2>
            </div>
            <ul className={styles.burguer_list}>
                <li onClick={closeDrawer}> Inicio </li>
                <li onClick={closeDrawer}> Sobre mí </li>
                <li onClick={closeDrawer}> Proyectos </li>
            </ul>
        </>
    );
}

export default Drawer;
