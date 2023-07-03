import React, { useState } from 'react';
import { experience } from '../../lib/Experience';
import * as styles from './ExperienceCarrousel.module.scss';
import cn from 'classnames';
import ChevronLeft from '../../components/Icons/ChevronLeft';
import ChevronRight from '../../components/Icons/ChevronRight';
import { Link } from 'gatsby';

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
        <section className={styles.container}>
            <button
                onClick={handlePreviousClick}
                className={cn(styles.leftButton, {
                    [styles['desable']]: currentIndex === 0,
                })}
            >
                <ChevronLeft />
            </button>
            <article
                className={styles.experienceContainer}
                key={experience[currentIndex].id}
            >
                <h4>{experience[currentIndex].date}</h4>
                <h3>{experience[currentIndex].title}</h3>
                <h4>{experience[currentIndex].company}</h4>
                <p>{experience[currentIndex].description}</p>
            </article>
            <button
                onClick={handleNextClick}
                className={cn(styles.rightButton, {
                    [styles['desable']]: currentIndex === lastIndex,
                })}
            >
                <ChevronRight />
            </button>
            <Link to='/proyects' className={styles.title}>
                {experience[currentIndex].label}
            </Link>
        </section>
    );
};

export default ExperienceCarrousel;
