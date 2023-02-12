import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin(event) {
    event.preventDefault();
    // logic for authenticating user
  }

  return (
    <form onSubmit={handleLogin} style={{textAlign:'center', marginTop:'14pc', color:'red'}}>
      <div style={{lineHeight:'50px'}} >
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
      </div>
      <div style={{lineHeight:'50px'}}>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      <button style={{height:'2pc', width:'4pc',color:'pink',backgroundColor:'black'}} type="submit">Login</button>
    </form>
  );
}

export default Login;
