import React from 'react';
import { Link } from 'gatsby';
import * as styles from './AboutMe.module.scss';

const AboutMe = () => {
    return (
        <article className={styles.aboutContainer}>
            <h3>Hola, soy Jesica </h3>
            <p>
                <strong>Frontend developer, </strong>
                centrada en la creación de código claro y con capacidad para
                cumplir con los objetivos y necesidades del cliente.
            </p>
            <Link to='/about-me' className={styles.title}>
                Sobre mí {'>'}
            </Link>
        </article>
    );
};

export default AboutMe;
