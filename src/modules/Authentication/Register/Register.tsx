import { Link } from "react-router-dom"
import AuthTitle from "../../Shared/AuthTitle/AuthTitle";
import styles from './Register.module.css';
import AuthButton from "../../Shared/AuthButton/AuthButton";

function Register() {
  return (
    <>
      <AuthTitle title="Create your account and start using QuizWiz!" />

      <div className={`${styles.authLinks} d-flex align-items-center gap-5 my-4`}>
        <Link to={'/login'} className={styles.loginLink}>
          <i className={`fa-solid fa-user-tie ${styles.loginIcon}`}></i>
          <p>Sign in</p>
        </Link>
        <Link to={'/register'} className={styles.registerLink}>
          <i className={`fa-solid fa-user-plus`}></i>
          <p>Sign Up</p>
        </Link>
      </div>

      <form action="" className="px-4 py-2">
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your first name</label>
              <input type="text" placeholder="Type your first name" className="form-control" id="name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your last name</label>
              <input type="email" placeholder="Type your last name" className="form-control" id="email" aria-describedby="emailHelp" />
            </div>
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your email address</label>
          <input type="email" placeholder="Type your email address" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">Your role</label>
          <select className="form-contro" id="role" aria-describedby="roleHelp" defaultValue="">
            <option value="" disabled>Choose your role</option>
            <option value="instructor">Instructor</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" placeholder="Type your password" className="form-control" id="password" />
        </div>

        <AuthButton title="Sign Up" />
      </form>

    </>
  )
}

export default Register
