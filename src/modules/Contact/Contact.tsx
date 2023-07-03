import React from 'react';
import * as styles from './Contact.module.scss';

const Contact = () => {
    return (
        <article className={styles.contactContainer}>
            <h2 className={styles.title}> contacto </h2>
            <h3>
                ¡Contáctame para que colaboremos juntos en tu próximo proyecto!
            </h3>
            <div className={styles.contactDetails}>
                <p> jesica.munoz.avigliano@gmail.com</p>
                <p> +541130474811</p>
            </div>
        </article>
    );
};

export default Contact;
