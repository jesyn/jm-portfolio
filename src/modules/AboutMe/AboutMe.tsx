import React from 'react';
import { Link } from 'gatsby';
import * as styles from './AboutMe.module.scss';

const AboutMe = () => {
    return (
        <section className={styles.container}>
            <article className={styles.aboutContainer}>
                <h3>Hola, soy Jesica </h3>
                <p>
                    <strong>Frontend developer, </strong>
                    centrada en la creación de código claro y con capacidad para
                    cumplir con los objetivos y necesidades del cliente.
                </p>
            </article>
            <Link to='/about-me' className={styles.title}>
                Sobre mí {'>'}
            </Link>
        </section>
    );
};

export default AboutMe;
