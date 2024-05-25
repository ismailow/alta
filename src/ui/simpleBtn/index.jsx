import styles from './simpleBtn.module.css';

const SimpleBtn = ({ text }) => {
    return <button className={styles.btn}>{text}</button>
}

export default SimpleBtn;