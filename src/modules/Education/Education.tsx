import React from 'react';
import * as styles from './Education.module.scss';
import { certificates } from '../../lib/certificates';

export interface ICertificateProps {
    title: string;
    institution: string;
    duration: string;
}

const Education = () => {
    return (
        <section className={styles.container}>
            <div>
                <h2 className={styles.title}> formación </h2>
            </div>
            <article className={styles.educationContainer}>
                {certificates.map((certificate, index) => (
                    <div key={index} className={styles.certificates}>
                        <h3> {certificate.title} </h3>
                        <h4> {certificate.institution}</h4>
                        <p> {certificate.duration} </p>
                        <br />
                    </div>
                ))}
            </article>
        </section>
    );
};

export default Education;
