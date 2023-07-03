import React from 'react';
import * as styles from './Footer.module.scss';

const year = new Date().getFullYear();
const userName = process.env.GATSBY_USER_NAME;

const Footer = () => {
    return (
        <section id='footer' className={styles.container}>
            <p>
                © {year} Creado por {userName}
            </p>
        </section>
    );
};

export default Footer;
