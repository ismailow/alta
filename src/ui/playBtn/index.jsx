import styles from "./playBtn.module.css";

const PlayBtn = () => {
    return <a className={styles.btn} href="#">
            <svg width="54" height="51" viewBox="0 0 54 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className={styles.circle} d="M52.666 25.5C52.666 38.9836 41.1488 50 26.833 50C12.5172 50 1 38.9836 1 25.5C1 12.0164 12.5172 1 26.833 1C41.1488 1 52.666 12.0164 52.666 25.5Z" stroke="#3D3C3E" stroke-opacity="0.8" stroke-width="2"/>
                <path className={styles.play} d="M21 33.2128V16.7872C21 16.0054 21.8568 15.5259 22.5231 15.9349L35.903 24.1477C36.5389 24.538 36.5388 25.462 35.903 25.8523L22.5231 34.0651C21.8568 34.4741 21 33.9946 21 33.2128Z" fill="#3D3C3E" fill-opacity="0.8"/>
            </svg>
            Посмотреть видео гайд
        </a>
}

export default PlayBtn;