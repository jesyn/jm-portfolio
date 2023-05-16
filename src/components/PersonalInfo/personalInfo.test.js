import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PersonalInfo from './PersonalInfo';

describe('PersonalInfo component', () => {
    it('renders the component', () => {
        render(<PersonalInfo />);
        const headerElement = screen.getByText(/Sobre mí/i);
        const textElement = screen.getByText(/Como desarrolladora Frontend/i);
        const buttonElement = screen.getByRole('button', {
            name: /descargar mi cv/i,
        });
        expect(headerElement).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });
    test('download CV', () => {
        const button = getByRole('button');
        fireEvent.click(button);

        expect(window.open).toHaveBeenCalledWith(
            expect.stringContaining('/static/CV.pdf'),
            '_blank',
            'noopener,noreferrer'
        );
    });
});
