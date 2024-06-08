import styles from "./filledBtn.module.css";

const FilledBtn = ({ text }) => {
    return (<button className={styles.btn}>
        { text }
        <div className={styles.border}></div>
        </button>)
}

export default FilledBtn;