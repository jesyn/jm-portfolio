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
import ProfileLink from '../../modules/ProfileLink/ProfileLink';
import useBreakpoint from '../../hooks/useBreakpoint';

export const Home = () => {
    const bk = useBreakpoint();
    console.log(bk);

    return (
        <>
            <Grid>
                <>
                    <CustomPic
                        img='/profile-pic.jpg'
                        height={
                            ['md', 'lg'].includes(bk as string)
                                ? '100%'
                                : '300px'
                        }
                        alt='imagen de perfil'
                    />
                    <AboutMe />
                    <CustomPic
                        img='/desk.jpg'
                        height={
                            ['md', 'lg'].includes(bk as string)
                                ? '100%'
                                : '80px'
                        }
                        alt='imagen de escritorio'
                        labelPosition='center'
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
                </>
            </Grid>
            <ScrollToTopButton />
        </>
    );
};
