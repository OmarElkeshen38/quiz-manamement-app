import { Link } from "react-router-dom"
import AuthTitle from "../../Shared/AuthTitle/AuthTitle";
import styles from './Register.module.css';
import AuthButton from "../../Shared/AuthButton/AuthButton";

function Register() {
  return (
    <>
      <AuthTitle title="Create your account and start using QuizWiz!" />

      <div className={`${styles.authLinks} d-flex align-items-center gap-5 my-4`}>
        <Link to={'/'} className={styles.loginLink}>
          <i className={`fa-solid fa-user-tie ${styles.loginIcon}`}></i>
          <p>Sign in</p>
        </Link>
        <Link to={'/register'} className={styles.registerLink}>
          <i className={`fa-solid fa-user-plus`}></i>
          <p>Sign Up</p>
        </Link>
      </div>

      <form action="" className="px-4 py-2">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>

        <AuthButton title="Sign Up" />
      </form>

    </>
  )
}

export default Register
