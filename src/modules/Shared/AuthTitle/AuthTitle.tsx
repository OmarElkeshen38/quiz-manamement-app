import styles from './AuthTitle.module.css';

function AuthTitle({title}: { title: string }) {
  return (
    <>
      <h2 className={styles.authTitle}>{title}</h2>
    </>
  )
}

export default AuthTitle
