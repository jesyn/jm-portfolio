import React, { useEffect, useState } from 'react';
import ChevronUp from '../Icons/ChevronUp';
import * as styles from './Scrolltotop.module.scss';

export const ScrollToTopButton = (): JSX.Element => {
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

    const changeScrollToTop = (): void => {
        if (window.scrollY > 400) {
            setShowScrollToTopButton(true);
        } else {
            setShowScrollToTopButton(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeScrollToTop);

        return () => {
            window.removeEventListener('scroll', changeScrollToTop);
        };
    }, []);

    const goToTop = (): void => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={styles.scrollIconContainer}>
            {showScrollToTopButton && (
                <div className={styles.scrollIcon} onClick={goToTop}>
                    <ChevronUp />
                </div>
            )}
        </div>
    );
};
