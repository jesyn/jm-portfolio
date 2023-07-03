import React from 'react';
import * as styles from './ContactSection.module.scss';
import Linkedin from './../Icons/Linkedin';

const ContactSection = () => {
    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <p> jesica.munoz.avigliano@gmail.com </p>
                <p> +54 11 3047 4811</p>
            </div>
            <a
                href='https://www.linkedin.com/in/jesica-munoz-avigliano/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <Linkedin />
            </a>
        </div>
    );
};

export default ContactSection;
