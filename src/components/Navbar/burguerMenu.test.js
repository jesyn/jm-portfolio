import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BurguerMenu from './BurguerMenu';

describe('BurguerMenu', () => {
    it('should render without crashing', () => {
        const { getByRole } = render(<BurguerMenu />);
        const menuIcon = getByRole('menu_icon');
        expect(menuIcon).toBeInTheDocument();
    });

    it('should call function when clicked', () => {
        const handleClick = jest.fn();
        const { getByRole } = render(<BurguerMenu onClick={handleClick} />);
        const button = getByRole('button');
        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalled();
    });
});
