import { useState, useEffect } from 'react';
import type { Product } from '../../types/types';
import styles from './Modal.module.scss';

interface ModalProps {
    isOpen: boolean;
    product: Product | null;
    onClose: () => void;
}

const DEFAULT_BANNER_PRODUCT: Product = {
    productName: 'LOREM IPSUM DOLOR SIT AMET',
    descriptionShort: 'Many desktop publishing packages and web page editors now many desktop publishing',
    photo: 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 1499.90,
};

export const Modal = ({ isOpen, product, onClose }: ModalProps) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        if (isOpen) {
            setQuantity(1);
        }
    }, [isOpen, product]);

    if (!isOpen) return null;

    const isBannerProduct = !product;
    const currentProduct = product || DEFAULT_BANNER_PRODUCT;

    const handleDecrease = () => {
        if (quantity > 1) setQuantity((prev) => prev - 1);
    };

    const handleIncrease = () => {
        setQuantity((prev) => prev + 1);
    };

    const unitPrice = isBannerProduct ? currentProduct.price : currentProduct.price * 0.95;
    const totalPrice = unitPrice * quantity;

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div>
                <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                    <button type="button" className={styles.closeButton} onClick={onClose}>
                        ✕
                    </button>

                    <div className={styles.productImage}>
                        <img src={currentProduct.photo} alt={currentProduct.productName} />
                    </div>

                    <div className={styles.productDetails}>
                        <h2 className={styles.title}>{currentProduct.productName}</h2>

                        <span className={styles.price}>
                            R$ {totalPrice.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>

                        <p className={styles.description}>
                            {currentProduct.descriptionShort ||
                                'Many desktop publishing packages and web page editors now many desktop publishing'}
                        </p>

                        <a href="#detalhes" className={styles.moreDetails}>
                            Veja mais detalhes do produto &gt;
                        </a>

                        <div className={styles.actionGroup}>
                            <div className={styles.counter}>
                                <button type="button" onClick={handleDecrease}>
                                    −
                                </button>
                                <span>{String(quantity).padStart(2, '0')}</span>
                                <button type="button" onClick={handleIncrease}>
                                    +
                                </button>
                            </div>

                            <button type="button" className={styles.buyButton}>
                                COMPRAR
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};