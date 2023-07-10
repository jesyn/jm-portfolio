import { useEffect, useState } from 'react';

const useLayout = () => {
    const [height, setHeight] = useState('0');

    const getHeight = () => {
        const navbarHeight =
            document.getElementById('navbar')?.offsetHeight || 0;
        const footerHeight =
            document.getElementById('footer')?.offsetHeight || 0;

        const resultHeight = `calc(100vh - ${navbarHeight}px - ${footerHeight}px)`;
        setHeight(`${resultHeight}`);
    };
    useEffect(() => {
        getHeight();
    }, []);

    return { height };
};

export default useLayout;
