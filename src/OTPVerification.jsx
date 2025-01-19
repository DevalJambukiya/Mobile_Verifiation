import React, { useState } from 'react';
import { auth } from './firebase';  // Firebase initialization

function OTPVerification({ isLogin }) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [confirmResult, setConfirmResult] = useState(null);
  const [error, setError] = useState('');

  const handlePhoneNumberSubmit = async () => {
    try {
      const recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container', {
        size: 'invisible',
      });

      const confirmationResult = await auth.signInWithPhoneNumber(phoneNumber, recaptchaVerifier);
      setConfirmResult(confirmationResult);
    } catch (err) {
      setError('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyCode = async () => {
    if (confirmResult) {
      try {
        await confirmResult.confirm(verificationCode);
        alert(isLogin ? 'Logged in successfully!' : 'Registered successfully!');
      } catch (err) {
        setError('Invalid OTP. Please try again.');
      }
    }
  };

  return (
    <div className="otp-form">
      <div id="recaptcha-container"></div>
      <input
        type="text"
        placeholder="Enter phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="input-field"
      />
      <button onClick={handlePhoneNumberSubmit} className="submit-btn">
        Send OTP
      </button>

      {confirmResult && (
        <div>
          <input
            type="text"
            placeholder="Enter OTP"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
            className="input-field"
          />
          <button onClick={handleVerifyCode} className="submit-btn">
            Verify OTP
          </button>
        </div>
      )}

      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default OTPVerification;
