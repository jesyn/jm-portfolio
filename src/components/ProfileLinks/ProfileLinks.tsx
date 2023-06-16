import React from 'react';
import ProfileLink from '../../modules/ProfileLink/ProfileLink';
import * as styles from './ProfileLinks.module.scss';

const ProfileLinks = () => {
    return (
        <section className={styles.container}>
            <ProfileLink
                linkUrl='https://github.com/jesyn'
                linkData={'Github'}
            />
            <ProfileLink
                linkUrl='https://www.linkedin.com/in/jesica-munoz-avigliano/'
                linkData={'Linkedin'}
            />
            <ProfileLink
                linkUrl='mailto:jesica.munoz.avigliano@gmail.com'
                linkData={'Email'}
            />
        </section>
    );
};

export default ProfileLinks;
