import React from 'react';
import * as styles from './Languages.module.scss';

const LanguagesButton = () => {
    return (
        <section className={styles.languagesContainer}>
            <button> ESP </button>
            <p> | </p>
            <button> ING </button>
        </section>
    );
};

export default LanguagesButton;
