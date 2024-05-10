import styles from "./filledBtn.module.css";

const FilledBtn = ({ text }) => {
    return <button className={`${styles.btn} ${styles.color}`}>{ text }</button>
}

export default FilledBtn;