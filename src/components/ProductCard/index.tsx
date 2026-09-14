import type { ProductCardProps } from '../../types/types';
import styles from './ProductCard.module.scss';

export const ProductCard = ({ product, onOpenModal, isAllActive }: ProductCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.content}>
                <div className={styles.imageBox}>
                    <img src={product.photo} alt={product.productName} />
                </div>

                <p className={styles.description}>{product.productName}</p>
                <p className={styles.oldPrice}>
                    R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className={styles.price}>
                    R$ {(product.price * 0.95).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>
                <p className={styles.installments}>
                    ou 2x de R$ {(product.price / 2).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros
                </p>
                <p className={`${styles.freeShipping} ${isAllActive ? styles.activePink : ''}`}>Frete grátis</p>

                <button
                    type="button"
                    className={`${styles.buyButton} ${isAllActive ? styles.activePink : ''}`}
                    onClick={(e) => {
                        e.stopPropagation();
                        onOpenModal?.(product);
                    }}
                >
                    COMPRAR
                </button>
            </div>
        </div>
    );
};