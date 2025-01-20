import React, { useState } from 'react';
import './FormStyles.css';

function OTPVerification({ isLogin }) {
  const [otp, setOtp] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleVerifyOtp = () => {
    // Simulate OTP verification
    if (otp === '123456') {
      setIsVerified(true);
    }
  };

  return (
    <div className="otp-container">
      <input
        type="text"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
        placeholder="Enter OTP"
        required
      />
      <button onClick={handleVerifyOtp}>Verify OTP</button>
      {isVerified && <div className="success-message">{isLogin ? 'Login Successful' : 'Registration Successful'}</div>}
    </div>
  );
}

export default OTPVerification;
