import { useState } from 'react';
import { icons } from '../../assets/icons';
import type { ProductCarouselProps } from '../../types/types';
import { ProductCard } from '../ProductCard';
import styles from './ProductCarousel.module.scss';


export const ProductCarousel = ({
    products,
    onOpenModal,
    isAllActive = false,
}: ProductCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex + 4 < products.length;

    const handlePrev = () => {
        if (canGoPrev) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const handleNext = () => {
        if (canGoNext) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const visibleProducts = products.slice(currentIndex, currentIndex + 4);

    return (
        <div className={styles.carouselWrapper}>
            <button
                type="button"
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={handlePrev}
                disabled={!canGoPrev}
                aria-label="Anterior"
            >
                <img src={icons.arrowLeft} alt="Anterior" />
            </button>
            <div className={styles.cardsTrack}>
                {visibleProducts.map((product, index) => (
                    <div key={product.productName || index} className={styles.cardItem}>
                        <ProductCard
                            product={product}
                            onOpenModal={onOpenModal}
                            isAllActive={isAllActive}
                        />
                    </div>
                ))}
            </div>
            <button
                type="button"
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={handleNext}
                disabled={!canGoNext}
                aria-label="Próximo"
            >
                <img src={icons.arrowRight} alt="Próximo" />
            </button>
        </div>
    );
};