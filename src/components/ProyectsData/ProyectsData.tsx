import React from 'react';
import PersonalContact from '../ContactSection/ContactSection';
import * as styles from './ProyectsData.module.scss';
import { proyectsInfo } from '../../lib/ProyectsInfo';
import Github from '../Icons/Github';
import Web from '../Icons/Web';
import Hammer from '../Icons/Hammer';
import { ScrollToTopButton } from '../Buttons/Scrolltotop';
import useLayout from '../../hooks/useLayout';

export interface IProyectsInfo {
    id: number;
    date: string;
    img: { src: string; alt: string };
    title: string;
    company: string;
    description: string;
    technologies: string[];
    github: string;
    url: string;
    underConstruction?: boolean;
}

const ProyectsData = () => {
    const { height } = useLayout();

    return (
        <section className={styles.container} /* style={{ height }} */>
            <h1> Mis últimos proyectos </h1>
            <div className={styles.mobileLine} />
            <div className={styles.proyectsContainer}>
                {proyectsInfo.map((proyect) => (
                    <article key={proyect.id} className={styles.proyects}>
                        <div className={styles.image}>
                            <div className={styles.desktopLine} />
                            <img src={proyect.img.src} alt={proyect.img.alt} />
                        </div>
                        <h4> {proyect.date} </h4>
                        <h3>
                            {proyect.title} - {proyect.company}
                        </h3>
                        <p className={styles.text}>{proyect.description}</p>
                        <ul>
                            {proyect.technologies.map((tec) => (
                                <li> {tec} </li>
                            ))}
                        </ul>
                        <div className={styles.icons}>
                            {!!proyect.github && (
                                <a
                                    href={proyect.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Github />
                                    <span> Ir a github </span>
                                </a>
                            )}
                            {!!proyect.url && (
                                <a
                                    href={proyect.url}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Web />
                                    <span> Ir al webSite</span>
                                </a>
                            )}
                            {proyect.underConstruction && (
                                <div className={styles.hammer}>
                                    <Hammer />
                                    <span> En construcción </span>
                                </div>
                            )}
                        </div>
                        <div className={styles.proyectline} />
                    </article>
                ))}
            </div>
            <ScrollToTopButton />
            <PersonalContact />
        </section>
    );
};

export default ProyectsData;
