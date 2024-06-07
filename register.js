import '../style/register.css'
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <>
      <div className="register-container">
        <div className="register-form">
          <h1 className="register-title">GovManager</h1>
          <form>
            <input
              type="text"
              name="name"
              placeholder="Full name"
              className="register-input third-input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="register-input first-input"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="register-input  second-input"
            />
            <input
              type="password"
              name="confirm"
              placeholder="Repeat password"
              className="register-input  fourth-input"
            />
            <button type="submit" className="register-button">
              Register
            </button>
            <p className="register-link">
              Already have an account{' '}
              <Link to="/login" className="login-link">
                Log in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}
