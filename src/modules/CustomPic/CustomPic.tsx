import React from 'react';
import * as styles from './CustomPic.module.scss';
import cn from 'classnames';

interface CustomPicProps {
    img: string;
    height: string;
    alt: string;
    disable?: boolean;
}

const CustomPic = ({ img, height, alt, disable }: CustomPicProps) => {
    return (
        <article
            className={cn(styles.imgContainer, {
                [styles['desable']]: disable,
            })}
            style={{ height }}
        >
            <img src={img} alt={alt} />
        </article>
    );
};

export default CustomPic;
