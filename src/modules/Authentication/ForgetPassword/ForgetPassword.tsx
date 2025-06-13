import { Link } from "react-router-dom"
import AuthButton from "../../Shared/AuthButton/AuthButton"
import AuthTitle from "../../Shared/AuthTitle/AuthTitle"
import styles from './ForgetPassword.module.css'

function ForgetPassword() {
  return (
    <div>
      <AuthTitle title="Forgot password" />

      <form action="" className="px-4 py-2">
        <div className="my-4">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" placeholder="Type your email address" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <AuthButton title="Send email" />
          <div className="d-flex align-items-center gap-1">
            <p className="p-0 m-0">Login?</p>
            <Link to={'/login'} className={styles.forgotPasswordLink}>
              click here
            </Link>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ForgetPassword
