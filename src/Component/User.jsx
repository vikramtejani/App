import React from "react";

import { useState } from 'react';

function User() {
  const [name, setName] = useState('Vikram'); // state for name input
  const [photo, setPhoto] = useState('https://tse3.mm.bing.net/th?id=OIP.I1eMmioPknf57DC0Pz3BXQHaFj&pid=Api&P=0'); // state for photo input

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: call API to update user info in backend
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePhotoChange(e) {
    setPhoto(e.target.files[0]);
  }

  return (
    <div style={{textAlign:'center'}}>
      <h1 >Account Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input style={{textAlign:"center" , color:'red'}} type="text" value={name} placeholder="Vikram"  onChange={handleNameChange} />
        </label>
        <br />
        <label>
          Profile Photo:
          <input type="file" onChange={handlePhotoChange} />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

 

  export default User;
  

  