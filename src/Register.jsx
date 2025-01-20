import React, { useState } from 'react';
import OTPVerification from './OTPVerification';
import './FormStyles.css';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);

  const handleRegisterSubmit = () => {
    // Handle registration logic (e.g., send OTP to email)
    setIsOtpSent(true);
  };

  return (
    <div className="form-wrapper">
      <h3>Register</h3>
      {!isOtpSent ? (
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            required
          />
          <button onClick={handleRegisterSubmit}>Send OTP</button>
        </div>
      ) : (
        <OTPVerification isLogin={false} />
      )}
    </div>
  );
}

export default Register;
