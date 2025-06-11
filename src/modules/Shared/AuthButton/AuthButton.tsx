import styles from './AuthButton.module.css';

function AuthButton({ title }: { title: string }) {
    return (
        <>
            <button type='submit' className={styles.authButton}>
                <span>{title}</span>
                <i className="fa-solid fa-circle-check"></i>
            </button>
        </>
    )
}

export default AuthButton
