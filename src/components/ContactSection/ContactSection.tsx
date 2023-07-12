import React from 'react';
import * as styles from './ContactSection.module.scss';
import Linkedin from './../Icons/Linkedin';

const ContactSection = () => {
    return (
        <section className={styles.contactContainer}>
            <div className={styles.contactInfo}>
                <p> jesica.munoz.avigliano@gmail.com </p>
            </div>
            <a
                href='https://www.linkedin.com/in/jesica-munoz-avigliano/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <Linkedin />
            </a>
        </section>
    );
};

export default ContactSection;
