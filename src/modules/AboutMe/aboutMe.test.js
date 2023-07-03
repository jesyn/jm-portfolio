import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe component', () => {
    it('should render the correct title', () => {
        render(<AboutMe />);
        const title = screen.getByText('Sobre mí >');
        expect(title).toBeInTheDocument();
    });

    it('should render the correct text', () => {
        render(<AboutMe />);
        const text = screen.getByText('Frontend developer');
        expect(text).toBeInTheDocument();
    });

    it('should have a link to the about me page', () => {
        render(<AboutMe />);
        const link = screen.getByRole('link', { name: 'Sobre mí >' });
        expect(link).toHaveAttribute('href', '/about-me');
    });
});
