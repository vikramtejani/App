import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

import "./login.css"
function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with email, password, and confirmPassword
  };

  //2
  return (
    <>

      <div className="auth-header">
        <h1 className="primary-text">SAYALNI WELFARE</h1>
        <h4 className="secondary-text">ONLINE DISCOUNT STORE</h4>
      </div>

      <form onSubmit={handleSubmit} className="form" >

        <input type="email" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Email" className='text-field' />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Password" className='text-field' />
        <br />
        <Link to="#" className="primary-link">Forgot Password?</Link>

        <br />
        <button type="button" className="primary-btn"

          onClick={() => navigate("/home")}>Log In</button>
        <br />
        <Link to="/signup" className="primary-link">Don’t have an account? Register</Link>
      </form>

    </>
  );
}

export default Signup;