import { useState, useEffect } from 'react';
import _ from 'lodash';

const getDeviceConfig = (width: number) => {
    if (width < 320) {
        return 'xs';
    } else if (width >= 320 && width < 720) {
        return 'sm';
    } else if (width >= 720 && width < 1024) {
        return 'md';
    } else if (width >= 1024) {
        return 'lg';
    }
};

const useBreakpoint = () => {
    const isBrowser = () => typeof window !== 'undefined';
    const [brkPnt, setBrkPnt] = useState(() =>
        getDeviceConfig(isBrowser() ? window.innerWidth : 0)
    );

    useEffect(() => {
        const calcInnerWidth = _.throttle(function () {
            setBrkPnt(getDeviceConfig(isBrowser() ? window.innerWidth : 0));
        }, 200);
        if (isBrowser()) window.addEventListener('resize', calcInnerWidth);
        return () => {
            if (isBrowser())
                window.removeEventListener('resize', calcInnerWidth);
        };
    }, [isBrowser(), window]);

    return brkPnt;
};
export default useBreakpoint;
