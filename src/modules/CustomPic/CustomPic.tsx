import React from 'react';
import * as styles from './CustomPic.module.scss';
import cn from 'classnames';

interface CustomPicProps {
    img: string;
    height: string;
    alt: string;
    label?: string;
    labelPosition?: 'center' | 'top' | 'bottom';
}

const CustomPic = ({
    img,
    height,
    alt,
    label,
    labelPosition,
}: CustomPicProps) => {
    return (
        <article className={styles.imgContainer} style={{ height }}>
            <img src={img} alt={alt} />
            <h2
                className={cn({
                    [styles['center']]: labelPosition === 'center',
                    [styles['top']]: labelPosition === 'top',
                })}
            >
                {label}
            </h2>
        </article>
    );
};

export default CustomPic;
