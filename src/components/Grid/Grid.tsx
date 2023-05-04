import React, { ReactNode } from 'react';
import * as styles from './Grid.module.scss';

interface GridProps {
    children: JSX.Element;
}

const Grid = ({ children }: GridProps) => {
    return <div className={styles.grid}> {children}</div>;
};

export default Grid;
