import { useState, type FormEvent } from 'react';
import styles from './Newsletter.module.scss';

export const Newsletter = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [termsAccepted, setTermsAccepted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!termsAccepted) {
            alert('Por favor, aceite os termos e condições.');
            return;
        }
        alert(`Obrigado por se inscrever, ${name}!`);
        setName('');
        setEmail('');
        setTermsAccepted(false);
    };

    return (
        <section className={styles.newsletter}>
            <div className={styles.container}>
                <div className={styles.textGroup}>
                    <h2>Inscreva-se na nossa newsletter</h2>
                    <p>Assine a nossa newsletter e receba as novidades e conteúdos exclusivos da Econverse.</p>
                </div>

                <form onSubmit={handleSubmit} className={styles.formGroup}>
                    <div className={styles.inputsWrapper}>
                        <div>
                            <input
                                type="text"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                            <input
                                type="email"
                                placeholder="Digite seu e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit">INSCREVER</button>
                        </div>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                checked={termsAccepted}
                                onChange={(e) => setTermsAccepted(e.target.checked)}
                                required
                            />
                            <span>Aceito os termos e condições</span>
                        </label>
                    </div>


                </form>
            </div>
        </section>
    );
};