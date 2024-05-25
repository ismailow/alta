import BorderedBtn from "../../ui/borderedBtn";

import logo from "../../icons/logo.svg";

import styles from "./header.module.css";
import SimpleBtn from "../../ui/simpleBtn";
import BurgerBtn from "../../ui/burgerBtn";
import { useEffect, useState } from "react";
import { useRef } from "react";

const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const navRef = useRef();

    console.log(isOpenMenu);
    
    useEffect(() => {
        if (isOpenMenu) {
            navRef.current.classList.add('nav-active');
        } else {
            navRef.current.classList.remove('nav-active');
        }
    }, [isOpenMenu])

    return (
        <header className={styles.header}>
            <div className={styles.logoBlock}>
                <img src={logo} alt="ALTA.ai" />
            </div>
            <nav className={styles.nav} ref={navRef}>
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
                        <SimpleBtn text="Вход" />
                    </li>
                    <li className={styles.loginItem}>
                        <BorderedBtn text="Регистрация" />
                    </li>
                </ul>
                <BurgerBtn onClickBtn={() => setIsOpenMenu(!isOpenMenu)} />
            </div>
        </header>
    )
};

export default Header;
