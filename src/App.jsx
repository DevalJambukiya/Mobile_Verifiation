import React, { useState } from 'react';
import OTPVerification from './OTPVerification';
import './App.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="app-container">
      <div className="form-container">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <button onClick={toggleForm} className="toggle-btn">
          {isLogin ? "Don't have an account? Register" : "Already have an account? Login"}
        </button>

        <OTPVerification isLogin={isLogin} />
      </div>
    </div>
  );
}

export default App;
