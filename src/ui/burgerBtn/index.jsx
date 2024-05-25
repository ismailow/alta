import styles from './burgerBtn.module.css';

const BurgerBtn = (props) => {
    return <button onClick={props.onClickBtn} className={styles.btn}><span className={styles.line}></span></button>
}

export default BurgerBtn;