import { Banners } from '../../assets/images';
import styles from './Banner.module.scss';

interface BannerProps {
    onOpenModal: () => void;
}

export const Banner = ({ onOpenModal }: BannerProps) => {
    return (
        <section
            className={styles.banner}
            style={{ backgroundImage: `url(${Banners.BannerHome})` }}
        >
            <div className={styles.overlay} />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Venha conhecer nossas promoções</h1>

                    <h2><span>50% Off</span> nos produtos</h2>
                    <button type="button" onClick={onOpenModal}>
                        Ver produto
                    </button>
                </div>
            </div>
        </section>
    );
};