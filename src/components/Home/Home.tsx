import React from 'react';
import {
    CustomPic,
    AboutMe,
    CustomList,
    Education,
    ExperienceCarrousel,
    Contact,
} from '../../modules';
import { hardSkills, softSkills, languages } from '../../lib';

import Grid from '../Grid/Grid';
import { MD, SM, darkBlue } from '../../utils/constants';
import softSkillPic from './../../../static/soft-skills-pic.jpg';
import languagesPic from './../../../static/languages.jpg';
import { ScrollToTopButton } from '../Buttons/Scrolltotop';
import ProfileLinks from '../ProfileLinks/ProfileLinks';
import { useMediaQuery } from 'react-responsive';

export const Home = () => {
    const isMobile = useMediaQuery({ query: `(max-width: ${SM})` });
    const isTablet = useMediaQuery({ query: `(max-width: ${MD})` });

    return (
        <>
            <Grid>
                <>
                    <CustomPic
                        img='/profile-pic.jpg'
                        height={!isMobile ? '510px' : '300px'}
                        alt='imagen de perfil'
                    />
                    <AboutMe />
                    <CustomPic
                        img='/desk.jpg'
                        height={!isMobile ? '510px' : '80px'}
                        alt='imagen de escritorio'
                        disable={isTablet}
                    />
                    <Education />
                    <ExperienceCarrousel />
                    <CustomList
                        title='habilidades técnicas'
                        list={hardSkills}
                        background={darkBlue}
                    />
                    <CustomList
                        title='habilidades blandas'
                        list={softSkills}
                        background={`url('${softSkillPic}')`}
                    />
                    <Contact />
                    <CustomList
                        title='idiomas'
                        list={languages}
                        background={`url('${languagesPic}')`}
                    />
                </>
            </Grid>
            <ProfileLinks />
            <ScrollToTopButton />
        </>
    );
};
