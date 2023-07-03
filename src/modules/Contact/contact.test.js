import React from 'react';
import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact', () => {
    test('renders contact information', () => {
        render(<Contact />);
        const titleElement = screen.getByText('contacto');
        const detailsElement = screen.getByText(
            'jesica.munoz.avigliano@gmail.com'
        );
        expect(titleElement).toBeInTheDocument();
        expect(detailsElement).toBeInTheDocument();
    });
});
