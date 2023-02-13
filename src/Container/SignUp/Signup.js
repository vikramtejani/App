import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./signup.css"
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

        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="Full Name" className='text-field' />
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="Contact " className='text-field' />
        <input type="email" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Email" className='text-field' />
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required placeholder="Password" className='text-field' />
        <br />
        <br />
        <button type="button" className="primary-btn" onClick={() => navigate("/Login")}>Sign Up</button>
        <br />
        <Link to="/login" className="primary-link">Already have an Account? Login</Link>
      </form>

    </>
  );
}

export default Signup;