import React from 'react';
import * as styles from './BurguerMenu.module.scss';

const BurguerMenu = () => {
    return (
        <>
            <button className={styles.burguerContainer}>
                <span role='menu_icon' className='material-icons'>
                    menu
                </span>
            </button>
        </>
    );
};

export default BurguerMenu;
