import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Drawer from './Drawer';

const links = [
    { to: '/about', name: 'About' },
    { to: '/blog', name: 'Blog' },
    { to: '/contact', name: 'Contact' },
];

test('renders Drawer component with links and closes when clicked on X button', () => {
    const closeDrawerMock = jest.fn();
    render(<Drawer closeDrawer={closeDrawerMock} show={true} links={links} />);

    // check that all links are present
    links.forEach((link) => {
        const linkElement = screen.getByRole('link', { name: link.name });
        expect(linkElement).toBeInTheDocument();
    });

    // check that drawer is open
    const drawerElement = screen.getByTestId('drawer');
    expect(drawerElement).toHaveClass('open');

    // click on X button
    const closeButton = screen.getByRole('button', { name: 'Close drawer' });
    userEvent.click(closeButton);

    // check that drawer is closed
    expect(closeDrawerMock).toHaveBeenCalledTimes(1);
    expect(drawerElement).not.toHaveClass('open');
});
