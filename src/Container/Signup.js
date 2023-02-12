import React, { useState } from 'react';
import Login from './Login';

function Signup() {
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
  
    <form onSubmit={handleSubmit} style={{textAlign:'center'}} >
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
      </label>
      <br />
      <button type="submit" >Registration</button>
      <br/>
      <h3>Already have an Account? Login</h3>
    </form>
  
    </>
  );
}

export default Signup;