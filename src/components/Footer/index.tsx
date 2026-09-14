import { icons } from '../../assets/icons';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.mainContent}>
                <div className={styles.container}>
                    <div className={styles.brandCol}>
                        <div className={styles.brandContent}>
                            <img src={icons.logoEconverse} alt="Econverse" className={styles.logo} />
                            <p className={styles.brandDescription}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                        <div className={styles.socialIcons}>
                            <a href="#instagram" aria-label="Instagram">
                                <img src={icons.instagram} alt="Instagram" />
                            </a>
                            <a href="#facebook" aria-label="Facebook">
                                <img src={icons.facebook} alt="Facebook" />
                            </a>
                            <a href="#linkedin" aria-label="LinkedIn">
                                <img src={icons.linkedin} alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.divider} />

                    <div className={styles.linksNav}>
                        <div className={styles.linkGroupcorporate}>
                            <h4>Institucional</h4>
                            <ul>
                                <li><a href="#sobre">Sobre Nós</a></li>
                                <li><a href="#movimento">Movimento</a></li>
                                <li><a href="#trabalhe">Trabalhe conosco</a></li>
                            </ul>
                        </div>

                        <div className={styles.linkGroupabout}>
                            <h4>Ajuda</h4>
                            <ul>
                                <li><a href="#suporte">Suporte</a></li>
                                <li><a href="#fale-conosco">Fale Conosco</a></li>
                                <li><a href="#faq">Perguntas Frequentes</a></li>
                            </ul>
                        </div>

                        <div className={styles.linkGroupterms}>
                            <h4>Termos</h4>
                            <ul>
                                <li><a href="#termos">Termos e Condições</a></li>
                                <li><a href="#politica">Política de Privacidade</a></li>
                                <li><a href="#troca">Troca e Devolução</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.copyrightBar}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    );
};