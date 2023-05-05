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
                        <CheckList />
                        {li}
                    </li>
                ))}
            </ul>
            <h2 className={styles.title}> {title} </h2>
        </article>
    );
};

export default CustomList;
