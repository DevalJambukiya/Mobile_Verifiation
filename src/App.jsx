import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="form-container">
          <h2>Welcome</h2>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <div className="toggle-container">
            <Link to="/register" className="toggle-btn">
              Don't have an account? Register
            </Link>
            <Link to="/" className="toggle-btn">
              Already have an account? Login
            </Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
