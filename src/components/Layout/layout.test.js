import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout';

describe('Layout component', () => {
    it('should render Navbar, children and Footer components', () => {
        const children = <div data-testid='test-children' />;
        const { getByTestId } = render(<Layout children={children} />);
        const navbar = getByTestId('navbar');
        const childrenComponent = getByTestId('test-children');
        const footer = getByTestId('footer');

        expect(navbar).toBeInTheDocument();
        expect(childrenComponent).toBeInTheDocument();
        expect(footer).toBeInTheDocument();
    });
});
