import AuthButton from "../../Shared/AuthButton/AuthButton"
import AuthTitle from "../../Shared/AuthTitle/AuthTitle"

function ResetPassword() {
  return (
    <div>
      <AuthTitle title="Forgot password" />

      <form action="" className="px-4 py-4">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Your email address</label>
          <input type="email" placeholder="Type your email address" className="form-control" id="email" aria-describedby="emailHelp" />
        </div>

        <div className="mb-3">
          <label htmlFor="otp" className="form-label">OTP</label>
          <input type="text" placeholder="Type your OTP" className="form-control" id="otp" />
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" placeholder="Type your password" className="form-control" id="password" />
        </div>

        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" placeholder="Confirm your password" className="form-control" id="confirmPassword" />
        </div>

        <AuthButton title="Reset" />
      </form>
    </div>
  )
}

export default ResetPassword
