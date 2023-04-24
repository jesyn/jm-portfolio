import React from 'react';
import * as styles from './Languages.module.scss';

const LanguagesButton = () => {
    return (
        <div className={styles.languagesContainer}>
            <button> ESP </button>
            <p> | </p>
            <button> ING </button>
        </div>
    );
};

export default LanguagesButton;
