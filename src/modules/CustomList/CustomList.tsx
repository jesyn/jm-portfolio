import React from 'react';
import CheckList from '../../components/Icons/CheckList';
import * as styles from './CustomList.module.scss';

interface CustomListProps {
    list: string[];
    title: string;
    background: string;
}

const CustomList = ({ list, title, background }: CustomListProps) => {
    return (
        <article
            className={styles.container}
            style={{
                background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <h2 className={styles.title}> {title} </h2>
            <div className={styles.overlay} />
            <section className={styles.listContainer}>
                <ul className={styles.list}>
                    {list.map((li, index) => (
                        <li key={index}>
                            <CheckList />
                            {li}
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default CustomList;
