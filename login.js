import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/login.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the input fields
    const validationErrors = {};

    // Email validation
    if (!email.trim()) {
      validationErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = 'Invalid email address';
    }

    // Password validation
    if (!password.trim()) {
      validationErrors.password = 'Password is required';
    }

    // Set the validation errors in the state
    setErrors(validationErrors);

    // If there are no validation errors, you can proceed with the login process
    if (Object.keys(validationErrors).length === 0) {
      // Your login logic goes here
      console.log('Login successful!');
    }
  };

  return (
    <>
      <div className="first-div">
        <h1 className="giv">GovManager</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="first-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <div className="erro">{errors.email}</div>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="first-input second-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="erros">{errors.password}</div>}

          <button type="submit" className="btn">
            Log in
          </button>
          <p className="forgot">Forgot your password?</p>
          <p className="reg">
            <Link to="/apps" className="ret">
              Register
            </Link>
          </p>
        </form>
      </div>
    </>
  );
}
