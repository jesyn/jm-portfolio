import React from 'react';
import PersonalContact from '../ContactSection/ContactSection';
import * as styles from './PersonalInfo.module.scss';
import cv from './../../../static/CV.pdf';
import Download from './../Icons/Download';
import useLayout from '../../hooks/useLayout';
import { useMediaQuery } from 'react-responsive';
import { SM } from '../../utils/constants';

const PersonalInfo = () => {
    const handleDownloadCV = () => {
        window.open(cv, '_blank', 'noopener,noreferrer');
    };

    const { height } = useLayout();
    const isMobile = useMediaQuery({ query: `(max-width: ${SM})` });

    return (
        <section
            className={styles.personalContainer}
            style={{ height: isMobile ? 'auto' : height }}
        >
            <h1> Sobre mí </h1>
            <div className={styles.mobileLine} />
            <section className={styles.infoContainer}>
                <div className={styles.info}>
                    <article>
                        <div className={styles.desktopLine} />
                        <p className={styles.text}>
                            Como desarrolladora Frontend, siento una gran pasión
                            por mi trabajo y estoy comprometida en aportar valor
                            y resolver problemas de manera eficiente. Soy una
                            persona
                            <strong>
                                {' '}
                                responsable, autodidacta y con iniciativa,{' '}
                            </strong>
                            siempre buscando oportunidades para aprender y
                            crecer en mi carrera profesional.
                        </p>
                    </article>
                    <article>
                        <div className={styles.desktopLine} />
                        <p className={styles.text}>
                            Estoy en busca de nuevos retos y oportunidades que
                            me permitan salir de mi zona de confort y seguir
                            creciendo. Aunque estoy en la búsqueda de un nuevo
                            rumbo, estoy
                            <strong> confiada en mis habilidades </strong>y
                            estoy segura de que mi entusiasmo y conocimientos en
                            el área de desarrollo Frontend me permitirán avanzar
                            rápidamente en este nuevo desafío. Si buscas una
                            <strong>
                                {' '}
                                integrante apasionada y comprometida para tu
                                equipo,{' '}
                            </strong>
                            no dudes en contactarme."
                        </p>
                    </article>
                </div>
                <button onClick={handleDownloadCV}>
                    <h3> descargar mi CV </h3>
                    <Download />
                </button>
            </section>
            <PersonalContact />
        </section>
    );
};

export default PersonalInfo;
