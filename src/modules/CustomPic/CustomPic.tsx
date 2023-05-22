import React from 'react';
import * as styles from './CustomPic.module.scss';

interface CustomPicProps {
    img: string;
    height: string;
    alt: string;
    label?: string;
    labelPosition?: 'center' | 'top' | 'bottom';
}

const CustomPic = ({ img, height, alt }: CustomPicProps) => {
    return (
        <article className={styles.imgContainer} style={{ height }}>
            <img src={img} alt={alt} />
        </article>
    );
};

export default CustomPic;
