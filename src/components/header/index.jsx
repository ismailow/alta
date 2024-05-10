import BorderedBtn from "../../ui/borderedBtn";

import logo from "../../icons/logo.svg"

import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logoBlock}>
                <img src={logo} alt="ALTA.ai" />
            </div>
            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    <li className={styles.menuItem}>
                        <a className={`${styles.menuLink} ${styles.menuLinkActive}`} href="#">Главная</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">Рынок лекал</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">Генерация</a>
                    </li>
                    <li className={styles.menuItem}>
                        <a className={styles.menuLink} href="#">Контакты</a>
                    </li>
                </ul>
            </nav>
            <div className={styles.loginBlock}>
                <ul className={styles.loginList}>
                    <li className={styles.loginItem}>
                        <a className={styles.menuLink} href="#">Вход</a>
                    </li>
                    <li className={styles.loginItem}>
                        <BorderedBtn text="Регистрация" />
                    </li>
                </ul>
            </div>
        </header>
    )
};

export default Header;
