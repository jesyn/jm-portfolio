import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ScrollToTopButton } from './ScrollToTopButton';

describe('ScrollToTopButton', () => {
    it('should render the component', () => {
        const { container } = render(<ScrollToTopButton />);
        expect(container.firstChild).toBeInTheDocument();
    });

    it('should not show the button when the page is at the top', () => {
        Object.defineProperty(window, 'scrollY', { value: 0 });
        const { queryByTestId } = render(<ScrollToTopButton />);
        expect(queryByTestId('scrollIcon')).not.toBeInTheDocument();
    });

    it('should show the button when the page is scrolled down', () => {
        Object.defineProperty(window, 'scrollY', { value: 500 });
        const { queryByTestId } = render(<ScrollToTopButton />);
        expect(queryByTestId('scrollIcon')).toBeInTheDocument();
    });

    it('should scroll to top when the button is clicked', () => {
        Object.defineProperty(window, 'scrollY', { value: 500 });
        const { queryByTestId } = render(<ScrollToTopButton />);
        fireEvent.click(queryByTestId('scrollIcon'));
        expect(window.scrollY).toBe(0);
    });
});
