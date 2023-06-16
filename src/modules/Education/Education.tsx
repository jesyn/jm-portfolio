import React from 'react';
import * as styles from './Education.module.scss';

const Education = () => {
    return (
        <section className={styles.container}>
            <div>
                <h2 className={styles.title}> formación </h2>
            </div>
            <article className={styles.educationContainer}>
                <h3> CERTIFICATE TECH DEVELOPER </h3>
                <h4> DIGITAL HOUSE</h4>
                <p> Jun 2021 - Dic 2022 </p>
                <br />
                <h3> FRONTEND SPECIALIST </h3>
                <h4> DIGITAL HOUSE</h4>
                <p> Feb 2023 - Dic 2023</p>
            </article>
        </section>
    );
};

export default Education;
