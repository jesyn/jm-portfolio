import React from 'react';
import { render } from '@testing-library/react';
import { Home } from './Home';

describe('Home component', () => {
    it('should render all sections', () => {
        const { getByAltText, getByTestId } = render(<Home />);
        const profilePic = getByAltText('imagen de perfil');
        const deskPic = getByAltText('imagen de escritorio');
        const aboutMeSection = getByTestId('about-me-section');
        const educationSection = getByTestId('education-section');
        const experienceSection = getByTestId('experience-section');
        const hardSkillsSection = getByTestId('hard-skills-section');
        const softSkillsSection = getByTestId('soft-skills-section');
        const contactSection = getByTestId('contact-section');
        const languagesSection = getByTestId('languages-section');
        const scrollToTopButton = getByTestId('scroll-to-top-button');

        expect(profilePic).toBeInTheDocument();
        expect(deskPic).toBeInTheDocument();
        expect(aboutMeSection).toBeInTheDocument();
        expect(educationSection).toBeInTheDocument();
        expect(experienceSection).toBeInTheDocument();
        expect(hardSkillsSection).toBeInTheDocument();
        expect(softSkillsSection).toBeInTheDocument();
        expect(contactSection).toBeInTheDocument();
        expect(languagesSection).toBeInTheDocument();
        expect(scrollToTopButton).toBeInTheDocument();
    });
});
