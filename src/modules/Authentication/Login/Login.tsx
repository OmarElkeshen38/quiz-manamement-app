import { Link } from "react-router-dom";
import AuthTitle from "../../Shared/AuthTitle/AuthTitle";
import styles from './Login.module.css';
import AuthButton from "../../Shared/AuthButton/AuthButton";

function Login() {
  return (
    <>
      <AuthTitle title="Continue your learning journey with QuizWiz!" />

      <div className={`${styles.authLinks} d-flex align-items-center gap-5 my-4`}>
        <Link to={'/'} className={styles.loginLink}>
          <i className="fa-solid fa-user-tie"></i>
          <p>Sign in</p>
        </Link>
        <Link to={'/register'} className={styles.registerLink}>
          <i className={`fa-solid fa-user-plus ${styles.registerIcon}`}></i>
          <p>Sign Up</p>
        </Link>
      </div>

      <form action="" className="px-4 py-2">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Registered email address</label>
          <input type="email" placeholder="Type your email" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" placeholder="Type your password" className="form-control" id="password" />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <AuthButton title="Sign In" />
          <div className="d-flex align-items-center gap-1">
            <p className="p-0 m-0">Forgot Password?</p>
            <Link to={'forget-password'} className={styles.forgotPasswordLink}>
              click here
            </Link>
          </div>
        </div>
      </form>

    </>
  )
}

export default Login
