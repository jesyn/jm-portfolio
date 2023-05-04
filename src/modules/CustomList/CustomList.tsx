import React from 'react';
import * as styles from './CustomList.module.scss';

interface CustomListProps {
    list: string[];
    title: string;
    background: string;
}

const CustomList = ({ list, title, background }: CustomListProps) => {
    return (
        <article
            className={styles.listContainer}
            style={{
                background,
                backgroundSize: '100% auto',
                backgroundPosition: 'center',
            }}
        >
            <div className={styles.overlay} />
            <ul className={styles.list}>
                {list.map((li, index) => (
                    <li key={index}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='icon icon-tabler icon-tabler-circle-check'
                            width='28'
                            height='28'
                            viewBox='0 0 24 24'
                            stroke-width='1'
                            stroke='#ffffff'
                            fill='none'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                        >
                            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                            <circle cx='12' cy='12' r='9' />
                            <path d='M9 12l2 2l4 -4' />
                        </svg>
                        {li}
                    </li>
                ))}
            </ul>
            <h2 className={styles.title}> {title} </h2>
        </article>
    );
};

export default CustomList;
