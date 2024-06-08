import logo from '../../icons/footerLogo.svg';
import arrow from '../../icons/arrow2.svg';
import clip from '../../icons/clip.svg';

import styles from './footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <img src={clip} className={`${styles.clip} ${styles.leftClip}`} />
            <img src={clip} className={`${styles.clip} ${styles.rightClip}`} />
            <div className={styles.header}>
                <img src={logo} className={styles.logo}/>
                <span className={styles.decorativeText}>Работа в удовольствие</span>
            </div>
            <div className={styles.block}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>Готовы работать с нами?</h2>
                    <div className={styles.subtitle}>
                        <p>Скидка на первую  подписку <span className={styles.accent}>50%</span></p>
                        <img src={arrow} />
                    </div>
                </div>
                <nav className={styles.navBlock}>
                    <ul className={styles.navList}>
                        <li className={styles.navTitle}>О нас</li>
                        <li className={styles.navItem}>Компания</li>
                        <li className={styles.navItem}>Продукт</li>
                    </ul>
                    <ul className={styles.navList}>
                        <li className={styles.navTitle}>Контакты</li>
                        <li className={styles.navItem}>Telegram</li>
                        <li className={styles.navItem}>Instagram</li>
                    </ul>
                    <ul className={styles.navList}>
                        <li className={styles.navTitle}>Безопасность</li>
                        <li className={styles.navItem}>Тех поддержка</li>
                        <li className={styles.navItem}>Copyright © 2024</li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;