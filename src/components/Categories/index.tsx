import { useState } from 'react';
import { CATEGORIES_LIST } from '../../constants/categories';
import styles from './Categories.module.scss';

export const Categories = () => {
    const [activeCategory, setActiveCategory] = useState('tech');

    return (
        <section className={styles.categories}>
            <div className={styles.container}>
                {CATEGORIES_LIST.map((item) => {
                    const isActive = activeCategory === item.id;

                    return (
                        <button
                            key={item.id}
                            type="button"
                            className={`${styles.categoryCard} ${isActive ? styles.active : ''}`}
                            onClick={() => setActiveCategory(item.id)}
                        >
                            <div className={styles.iconBox}>
                                <img src={item.icon} alt={item.label} />
                            </div>
                            <span>{item.label}</span>
                        </button>
                    );
                })}
            </div>
        </section>
    );
};