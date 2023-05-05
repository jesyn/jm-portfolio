import React, { useState } from 'react';
import { experience } from '../../lib/Experience';
import * as styles from './ExperienceCarrousel.module.scss';
import cn from 'classnames';
import ChevronLeft from '../../components/Icons/ChevronLeft';
import ChevronRight from '../../components/Icons/ChevronRight';

export interface IExperienceCarrousel {
    id: number;
    date: string;
    title: string;
    company: string;
    description: string;
    label: 'experiencia >' | 'proyecto >';
}
const ExperienceCarrousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const lastIndex = experience.length - 1;

    const handlePreviousClick = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNextClick = () => {
        if (currentIndex < experience.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <section className={styles.experienceContainer}>
            <button
                onClick={handlePreviousClick}
                className={cn(styles.leftButton, {
                    [styles['desable']]: currentIndex === 0,
                })}
            >
                <ChevronLeft />
            </button>
            <article
                key={experience[currentIndex].id}
                className={styles.experienceList}
            >
                <h4>{experience[currentIndex].date}</h4>
                <h3>{experience[currentIndex].title}</h3>
                <h4>{experience[currentIndex].company}</h4>
                <p>{experience[currentIndex].description}</p>
                <h2 className={styles.title}>
                    {experience[currentIndex].label}
                </h2>
            </article>
            <button
                onClick={handleNextClick}
                className={cn(styles.rightButton, {
                    [styles['desable']]: currentIndex === lastIndex,
                })}
            >
                <ChevronRight />
            </button>
        </section>
    );
};

export default ExperienceCarrousel;
