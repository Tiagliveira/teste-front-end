import { icons } from './../../assets/icons/index'
import styles from './BrandList.module.scss';

export const BrandList = () => {
    const brands = [1, 2, 3, 4, 5];

    return (
        <section className={styles.brandList}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <h2>Navegue por marcas</h2>
                </div>

                <div className={styles.brandsWrapper}>
                    {brands.map((item) => (
                        <div key={item} className={styles.brandCard}>
                            <img src={icons.logoEconverse} alt="Marca Econverse" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};