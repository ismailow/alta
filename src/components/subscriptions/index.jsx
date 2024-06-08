import check from '../../icons/check.svg';
import cross from '../../icons/cross.svg';
import lightning from '../../icons/lightning.png';

import styles from './subscriptions.module.css';

const Subscriptions = () => {
    return (
        <div className={styles.subscriptions}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Откройте для себя новые возможности прямо сейчас!</h2>
                <p className={styles.subtitle}>Здесь представлены доступные подписки</p>
            </div>
            <div className={styles.items}>
                <div className={styles.subscriptionItem}>
                    <div className={styles.subscriptionBorder}>
                        <div className={styles.subscription}>
                            <h3 className={styles.itemTitle}>БАЗОВАЯ</h3>
                            <ul className={styles.itemList}>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Ограниченная генерация</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Генерация задней модели </span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Архив с генерациями лекал</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Возможность редактирования</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Генерация с размерной сеткой</span>
                                    <img src={cross} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Личный профиль без доступа к коммерческим возможностям</span>
                                    <img src={cross} />
                                </li>
                            </ul>
                            <div className={styles.buttonBorder}>
                                <button className={styles.button}>
                                    <span>ПОЛУЧИТЬ</span>
                                    <span className={styles.price}>3000р/мес</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.subscriptionItem} ${styles.pro}`}>
                    <div className={styles.subscriptionBorder}>
                        <div className={styles.subscription}>
                            <h3 className={styles.itemTitle}>ПРОДВИНУТАЯ</h3>
                            <ul className={styles.itemList}>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}><span className={styles.accent}>Расширенная</span> генерация</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Генерация задней модели </span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Архив с генерациями лекал</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Возможность редактирования</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Генерация с размерной сеткой</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Личный профиль без доступа к коммерческим возможностям</span>
                                    <img src={cross} />
                                </li>
                            </ul>
                            <div className={styles.buttonBorder}>
                                <button className={styles.button}>
                                    <span>ПОЛУЧИТЬ</span>
                                    <span className={styles.price}>6000р/мес</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.subscriptionItem} ${styles.premium}`}>
                    <img className={styles.itemIcon} src={lightning} />
                    <div className={styles.subscriptionBorder}>
                        <div className={styles.subscription}>
                            <h3 className={styles.itemTitle}>КОРПОРАТИВНАЯ</h3>
                            <ul className={styles.itemList}>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}><span className={styles.accent}>Безлимитная</span> генерация</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Генерация задней модели </span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Архив с генерациями лекал</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Возможность редактирования</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Генерация с размерной сеткой</span>
                                    <img src={check} />
                                </li>
                                <li className={styles.listItem}>
                                    <span className={styles.listItemText}>Личный профиль <span className={styles.accent}>с доступом</span> к коммерческим возможностям</span>
                                    <img src={check} />
                                </li>
                            </ul>
                            <div className={styles.buttonBorder}>
                                <button className={styles.button}>
                                    <span>ПОЛУЧИТЬ</span>
                                    <span className={styles.price}>10000р/мес</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.postscriptum}>Также имеются разовые генерации, стоимость  зависит от модели</div>
        </div>
    );
};

export default Subscriptions;