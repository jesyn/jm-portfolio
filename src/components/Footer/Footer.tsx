import React from 'react';
import * as styles from './Footer.module.scss';

const year = new Date().getFullYear();
const userName = process.env.USER_NAME;

const Footer = () => {
    return (
        <div className={styles.container}>
            <p>
                © {year} Creado por {userName}
            </p>
        </div>
    );
};

export default Footer;
