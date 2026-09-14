import { useState } from 'react';
import { icons } from '../../assets/icons';
import { NAV_LINKS_HEADER } from '../../constants/navigation';
import styles from './Header.module.scss';

export const Header = () => {
    const [activeLink, setActiveLink] = useState('day-offers');

    const handleNavClick = (id: string) => {
        setActiveLink(id);
    };

    return (
        <header className={styles.header}>
            <div className={styles.topBar}>
                <div className={styles.containerItens}>
                    <div className={styles.benefitItem}>
                        <img src={icons.shieldCheck} alt="Compra segura" />
                        <p>Compra <span>100% segura</span></p>
                    </div>
                    <div className={styles.benefitItem}>
                        <img src={icons.truck} alt="Frete grátis" />
                        <p><span>Frete grátis</span> acima de R$ 200,00</p>
                    </div>
                    <div className={styles.benefitItem}>
                        <img src={icons.creditCard} alt="Parcele suas compras" />
                        <p><span>Parcele</span> suas compras</p>
                    </div>
                </div>
            </div>

            <div className={styles.mainHeader}>
                <div className={styles.container}>
                    <a href="/" className={styles.logo}>
                        <img src={icons.logoEconverse} alt="Logo Econverse" />
                    </a>

                    <div className={styles.searchBar}>
                        <input type="text" placeholder="O que você está procurando?" />
                        <button type="button" aria-label="Buscar">
                            <img src={icons.search} alt="Buscar" />
                        </button>
                    </div>

                    <div className={styles.userActions}>
                        <a href="#meus-pedidos" aria-label="Meus pedidos">
                            <img src={icons.myOrders} alt="Meus pedidos" />
                        </a>
                        <a href="#meus-favoritos" aria-label="Meus favoritos">
                            <img src={icons.heart} alt="Meus favoritos" />
                        </a>
                        <a href="#meu-perfil" aria-label="Meu perfil">
                            <img src={icons.user} alt="Meu perfil" />
                        </a>
                        <a href="#meu-carrinho" aria-label="Meu carrinho">
                            <img src={icons.cart} alt="Meu carrinho" />
                        </a>
                    </div>
                </div>
            </div>

            <nav className={styles.navMenu}>
                <div className={styles.containerNavLink}>
                    <ul>
                        {NAV_LINKS_HEADER.map((link) => (
                            <li key={link.id}>
                                <a
                                    href={link.href}
                                    className={activeLink === link.id ? styles.active : ''}
                                    onClick={() => handleNavClick(link.id)}
                                >
                                    {link.icon && <img src={link.icon} alt={link.label} />}
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};