import React from 'react';
import PersonalContact from '../ContactSection/ContactSection';
import * as styles from './ProyectsData.module.scss';
import { proyectsInfo } from '../../lib/ProyectsInfo';
import { ScrollToTopButton } from '../Buttons/Scrolltotop';
import ProyectIcons from './ProyectIcons';

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
    return (
        <section className={styles.container}>
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
                        <div className={styles.iconContainer}>
                            <ProyectIcons
                                github={proyect.github}
                                url={proyect.url}
                                underConstruction={proyect.underConstruction}
                            />
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
