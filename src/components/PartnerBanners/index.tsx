import styles from './PartnerBanners.module.scss';

export const PartnerBanners = () => {
    const banners = [1, 2];

    return (
        <section className={styles.partnerBanners}>
            <div className={styles.container}>
                {banners.map((item) => (
                    <div key={item} className={styles.card}>
                        <div className={styles.overlay} />
                        <div className={styles.content}>
                            <h3>Parceiros</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                            <button type="button">CONFIRA</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};