import Footer from './Footer';
import { render, screen } from '@testing-library/react';

describe('footer', () => {
    it('deberia renderizar el componente correctamente', () => {
        render(<Footer />);
    });
});
