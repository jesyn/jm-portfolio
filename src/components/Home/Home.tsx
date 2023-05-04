import React from 'react';
import { CustomPic, AboutMe } from '../../modules';
import CustomList from '../../modules/CustomList';
import Education from '../../modules/Education';
import ExperienceCarrousel from '../../modules/ExperienceCarrousel';
import { hardSkills, softSkills, languages } from '../../lib';

import Grid from '../Grid/Grid';
import Contact from '../../modules/Contact/Contact';
import { darkBlue } from '../../utils/constants';
import softSkillPic from './../../../static/soft-skills-pic.jpg';
import languagesPic from './../../../static/languages.jpg';

export const Home = () => {
    return (
        <>
            <Grid>
                <>
                    <CustomPic
                        img='/profile-pic.jpg'
                        height='300px'
                        alt='imagen de perfil'
                    />
                    <AboutMe />
                    <CustomPic
                        img='/desk.jpg'
                        height='80px'
                        alt='imagen de escritorio'
                        label='mi estudio'
                        labelPosition='center'
                    />
                    <CustomPic
                        img='/laptop.jpg'
                        height='80px'
                        alt='imagen de escritorio'
                    />
                    <ExperienceCarrousel />
                    <CustomPic
                        img='/dog.jpeg'
                        height='300px'
                        alt='foto perro'
                        label='mi perra, Ibiza'
                        labelPosition='top'
                    />
                    <Education />
                    <CustomPic
                        img='/hard-skills-pic.png'
                        height='auto'
                        alt='logos lenguages programación'
                    />
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
                        title='lenguages'
                        list={languages}
                        background={`url('${languagesPic}')`}
                    />
                </>
            </Grid>
        </>
    );
};
