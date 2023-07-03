import React from 'react';
import * as styles from './ProyectIcons.module.scss';
import Github from '../Icons/Github';
import Web from '../Icons/Web';
import Hammer from '../Icons/Hammer';

interface IProyectIcon {
    github: string;
    url: string;
    underConstruction?: boolean;
}

const ProyectIcons = ({ github, url, underConstruction }: IProyectIcon) => {
    return (
        <div>
            <div className={styles.icons}>
                {!!github && (
                    <a href={github} target='_blank' rel='noopener noreferrer'>
                        <Github />
                        <span> Ir a github </span>
                    </a>
                )}
                {!!url && (
                    <a href={url} target='_blank' rel='noopener noreferrer'>
                        <Web />
                        <span> Ir al webSite</span>
                    </a>
                )}
                {underConstruction && (
                    <div className={styles.hammer}>
                        <Hammer />
                        <span> En construcción </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProyectIcons;
