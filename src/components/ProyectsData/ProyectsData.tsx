import React from 'react';
import PersonalContact from '../ContactSection/ContactSection';
import * as styles from './ProyectsData.module.scss';
import { proyectsInfo } from '../../lib/ProyectsInfo';
import Github from '../Icons/Github';
import Web from '../Icons/Web';
import Hammer from '../Icons/hammer';

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
    console.log(proyectsInfo);
    return (
        <div className={styles.proyectsContainer}>
            <h1> Mis últimos proyectos </h1>
            <div className={styles.line} />
            {proyectsInfo.map((proyect) => (
                <article key={proyect.id} className={styles.proyects}>
                    <div className={styles.image}>
                        <img src={proyect.img.src} alt={proyect.img.alt} />
                    </div>
                    <h4> {proyect.date} </h4>
                    <h3> {proyect.title} </h3>
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
                </article>
            ))}

            <PersonalContact />
        </div>
    );
};

export default ProyectsData;
