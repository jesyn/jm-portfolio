import React from 'react';
import * as styles from './ProfileLink.module.scss';

interface profileLinkProps {
    linkUrl: string;
    linkData: string;
}

const ProfileLink = ({ linkUrl, linkData }: profileLinkProps) => {
    return (
        <section className={styles.profileContainer}>
            <a href={linkUrl} target='_blank' rel='noopener noreferrer'>
                {linkData}
            </a>
        </section>
    );
};

export default ProfileLink;
