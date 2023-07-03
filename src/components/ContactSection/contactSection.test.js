import React from 'react';
import { render } from '@testing-library/react';
import ContactSection from './ContactSection';

describe('ContactSection', () => {
    it('should render contact information', () => {
        const { getByText } = render(<ContactSection />);
        expect(
            getByText('jesica.munoz.avigliano@gmail.com')
        ).toBeInTheDocument();
        expect(getByText('+54 11 3047 4811')).toBeInTheDocument();
    });

    it('should render a link to LinkedIn profile', () => {
        const { getByRole } = render(<ContactSection />);
        const link = getByRole('link');
        expect(link).toHaveAttribute(
            'href',
            'https://www.linkedin.com/in/jesica-munoz-avigliano/'
        );
        expect(link).toHaveAttribute('target', '_blank');
        expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });
});
