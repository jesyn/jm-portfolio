import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer', () => {
    it('renders the current year and user name', () => {
        const wrapper = shallow(<Footer />);
        const expectedText = `© ${new Date().getFullYear()} Creado por ${
            process.env.GATSBY_USER_NAME
        }`;
        expect(wrapper.find('p').text()).toBe(expectedText);
    });
});
