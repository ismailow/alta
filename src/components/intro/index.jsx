import styles from "./intro.module.css";

import waves from "../../icons/waves.svg";
import introBG from "../../images/intro.jpg";
import FilledBtn from "../../ui/filledBtn";
import PlayBtn from "../../ui/playBtn";

const Intro = () => {
    return (
        <div className={styles.intro}>
            <div className={styles.introTitleBlock}>
                <h1 className={styles.introTitle}>Создайте уникальное <span className={styles.accent}>лекало </span> 
                    по фотоизображению c ИИ
                </h1>
            </div>
            <div className={styles.introBlock}>
                <div className={styles.introContent}>
                    <h2 className={styles.introSubtitle}>Загрузите фото и выбери желаемый формат</h2>
                    <div className={styles.introText}>
                        <p className={styles.text}>Инновационный подход к созданию лекал: превращаем фотографии в точные шаблоны для вашей одежды с учетом разных размеров.</p>
                        <img src={waves} />
                    </div>
                    <div className={styles.contentBlock}>
                        <div>
                            <h3 className={styles.title}>Больше возможностей</h3>
                            <div className={styles.capacities}>
                                <div className={styles.item}>Индивидуальные параметры</div>
                                <div className={styles.item}>Высокая эффекивность</div>
                                <div className={styles.item}>Автоматизация процесса</div>
                            </div>
                        </div>
                        <div className={styles.btns}>
                            <FilledBtn text="Сгенерировать выкройку" />
                            <PlayBtn />
                        </div>
                    </div>
                </div>
                <div className={styles.img}>
                    <img src={introBG} alt="image" />
                </div>
            </div>
        </div>
    );
};

export default Intro;