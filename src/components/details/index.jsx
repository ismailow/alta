import firstImg from '../../images/details/first.jpg';
import secondImg from '../../images/details/second.jpg';
import thirdImg from '../../images/details/thrid.jpg';
import fourhtImg from '../../images/details/fourth.jpg';

import styles from './details.module.css';

const Details = () => {
    return (
        <div className={styles.details}>
            <div className={styles.titleBlock}>
                <h3 className={styles.title}>Пусть на фото будут все важные детали</h3>
                <p className={styles.subtitle}>Это нужно для точного результата</p>
            </div>
            <div className={styles.imagesBlock}>
                <img src={firstImg} className={`${styles.img} ${styles.firstImg}`} />
                <img src={secondImg} className={`${styles.img} ${styles.secondImg}`} />
                <img src={thirdImg} className={`${styles.img} ${styles.thirdImg}`} />
                <img src={fourhtImg} className={`${styles.img} ${styles.fourhtImg}`} />
            </div>
        </div>
    );
};

export default Details;