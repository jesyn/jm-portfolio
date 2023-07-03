import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education';

describe('Education component', () => {
    test('renders the title', () => {
        render(<Education />);
        const titleElement = screen.getByText(/formación/i);
        expect(titleElement).toBeInTheDocument();
    });

    test('renders the education details', () => {
        render(<Education />);
        const certificateElement = screen.getByText(
            /certificate tech developer/i
        );
        const institutionElement = screen.getByText(/digital house/i);
        const durationElement = screen.getByText(/jun 2021 - dic 2022/i);

        expect(certificateElement).toBeInTheDocument();
        expect(institutionElement).toBeInTheDocument();
        expect(durationElement).toBeInTheDocument();
    });
});
