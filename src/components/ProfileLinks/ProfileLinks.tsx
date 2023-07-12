import React from 'react';
import * as styles from './ProfileLinks.module.scss';
import { contactLinks } from '../../lib/contactLinks';

export interface IProfileLinkProps {
    linkUrl: string;
    linkData: string;
}

const ProfileLinks = () => {
    return (
        <section className={styles.container}>
            {contactLinks.map((contact, index) => (
                <article key={index} className={styles.profileContainer}>
                    <a
                        href={contact.linkUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        {contact.linkData}
                    </a>
                </article>
            ))}
        </section>
    );
};

export default ProfileLinks;
