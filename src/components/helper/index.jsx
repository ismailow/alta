import styles from './helper.module.css';

import helperImg from '../../images/helper.jpg';
import arrowIcon from '../../icons/arrow.svg';

const Hepler = () => {
    return (
        <div className={styles.helper}>
            <div className={styles.titleBlock}>
                <h2 className={styles.title}>Ваш помощник по разработке лекал </h2>
                <p className={styles.subtitle}>Готовые выкройки можно отредактировать с помощью режима “конструктор”, двигая модель по точкам и регулируя угол наклона</p>
            </div>
            <div className={styles.content}>
                <div className={styles.tiles}>
                    <div className={styles.tile}>
                        <h3 className={styles.tileTitle}>1-й</h3>
                        <p className={styles.tileSubtitle}>в своем роде </p>
                    </div>
                    <div className={`${styles.tile} ${styles.tileDark}`}>
                        <h3 className={styles.tileTitle}>ДО 30%</h3>
                        <p className={styles.tileSubtitle}>экономии средств </p>
                    </div>
                    <div className={styles.tile}>
                        <h3 className={styles.tileTitle}>×3</h3>
                        <p className={styles.tileSubtitle}>к скорости расчета</p>
                    </div>
                    <div className={styles.tile}>
                        <h3 className={styles.tileTitle}>В 100</h3>
                        <p className={styles.tileSubtitle}>раз проще, чем руками</p>
                    </div>
                </div>
                <div className={styles.description}>
                    <div className={styles.info}>
                        <h2 className={styles.descriptionTitle}>Будущее легкой промышленности</h2>
                        <p className={styles.text}>Использование интеллектуальной системы позволяет избежать ошибки  при конструировании лекала одежды, оптимизировать производственные процессы, повысить качество готовой продукции и сэкономить ваше время.</p>
                        <button className={styles.btn}>
                            <img src={arrowIcon} />
                        </button>
                    </div>
                    <div className={styles.imageBlock}>
                        <img className={styles.img} src={helperImg} alt='helper'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hepler;