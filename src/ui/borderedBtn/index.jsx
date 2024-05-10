import styles from "./borderedBtn.module.css";

const BorderedBtn = ({ text }) => {
    return <button className={styles.btn}>{text}</button>
};

export default BorderedBtn;