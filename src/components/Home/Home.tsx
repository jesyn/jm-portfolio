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
import { darkBlue } from '../../utils/constants';
import softSkillPic from './../../../static/soft-skills-pic.jpg';
import languagesPic from './../../../static/languages.jpg';
import { ScrollToTopButton } from '../Buttons/Scrolltotop';
import useBreakpoint from '../../hooks/useBreakpoint';
import ProfileLinks from '../ProfileLinks/ProfileLinks';

export const Home = () => {
    const bk = useBreakpoint();

    return (
        <>
            <Grid>
                <>
                    <CustomPic
                        img='/profile-pic.jpg'
                        height={
                            ['md', 'lg'].includes(bk as string)
                                ? '510px'
                                : '300px'
                        }
                        alt='imagen de perfil'
                    />
                    <AboutMe />
                    <CustomPic
                        img='/desk.jpg'
                        height={
                            ['md', 'lg'].includes(bk as string)
                                ? '510px'
                                : '80px'
                        }
                        alt='imagen de escritorio'
                        disable={['md'].includes(bk as string) && true}
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
