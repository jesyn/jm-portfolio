import React from 'react';
import { render } from '@testing-library/react';
import Grid from './Grid';

describe('Grid', () => {
    it('renders children', () => {
        const childElement = <div>Child element</div>;
        const { getByText } = render(<Grid>{childElement}</Grid>);
        expect(getByText('Child element')).toBeInTheDocument();
    });
});
