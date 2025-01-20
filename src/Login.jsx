import React, { useState } from 'react';
import OTPVerification from './OTPVerification';
import './FormStyles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleLoginSubmit = () => {
    // Handle login logic (e.g., send OTP to email)
    setIsOtpSent(true);
  };

  return (
    <div className="form-wrapper">
      <h3>Login</h3>
      {!isOtpSent ? (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button onClick={handleLoginSubmit}>Send OTP</button>
        </div>
      ) : (
        <OTPVerification isLogin={true} />
      )}
    </div>
  );
}

export default Login;
