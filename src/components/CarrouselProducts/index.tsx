import { useState, useEffect } from 'react';
import type { CarrouselProductsProps, Product } from '../../types/types';
import { SHELF_CATEGORIES } from '../../constants/products';
import { fetchProducts } from '../../services/api';
import { ProductCarousel } from '../ProductCarousel';
import styles from './CarrouselProducts.module.scss';

export const CarrouselProducts = ({
  onOpenModal,
  hasTabs = false,
  hasSimpleLink = false,
  sectionId,
}: CarrouselProductsProps) => {
  const [activeTab, setActiveTab] = useState('CELULAR');
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isVerTodosActive, setIsVerTodosActive] = useState(false);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchProducts();
        if (data.length === 0) {
          setError('Nenhum produto foi encontrado na API.');
        } else {
          setProducts(data);
        }
      } catch (err) {
        setError('Não foi possível carregar os produtos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleTabClick = (e: React.MouseEvent<HTMLAnchorElement>, label: string, slug: string) => {
    e.preventDefault();
    setActiveTab(label);
    window.history.pushState(null, '', slug);

    if (label === 'VER TODOS') {
      const targetElement = document.getElementById('ver-todos');
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleSimpleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsVerTodosActive((prev) => !prev);
    window.history.pushState(null, '', '#ver-todos');
  };

  const isShowAll = hasSimpleLink ? isVerTodosActive : false;

  return (
    <section
      id={sectionId}
      className={`${styles.carrouselProducts} ${isShowAll ? styles.showAllActive : ''}`}
    >
      <div className={styles.container}>
        <div className={styles.headerTitle}>
          <div className={styles.line} />
          <h2>Produtos relacionados</h2>
          <div className={styles.line} />
        </div>

        {hasSimpleLink && (
          <div className={styles.simpleLinkWrapper}>
            <a
              href="#ver-todos"
              className={isShowAll ? styles.activeLink : ''}
              onClick={handleSimpleLinkClick}
            >
              <span>{isShowAll ? 'Ver menos' : 'Ver todos'}</span>
            </a>
          </div>
        )}

        {hasTabs && (
          <ul className={styles.categoriesTab}>
            {SHELF_CATEGORIES.map(({ label, slug }) => (
              <li key={label}>
                <a
                  href={slug}
                  className={activeTab === label ? styles.active : ''}
                  onClick={(e) => handleTabClick(e, label, slug)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {loading ? (
          <p className={styles.loadingText}>Carregando produtos...</p>
        ) : error ? (
          <p className={styles.errorText}>{error}</p>
        ) : (


          <ProductCarousel
            products={products}
            onOpenModal={onOpenModal}
            isAllActive={isShowAll}
          />
        )}
      </div>
    </section>
  );
};