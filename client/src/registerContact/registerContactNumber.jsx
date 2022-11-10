/* eslint-disable no-console */
import React, { useState } from 'react';

function RegisterContact() {
  const [userName, setUsername] = useState('');
  const [mobileNumber, setNumber] = useState();
  const token = localStorage.getItem('token');

  const addContactNumber = () => {
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/registerContact`, { method: 'POST', body: JSON.stringify({ token, mobileNumber }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="App">
      <form className="registerForm">
        <h1>REGISTER USER</h1>
        <input
          type="text"
          name="username"
          value={userName}
          placeholder="Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="number"
          name="mobile number"
          value={mobileNumber}
          placeholder="Contact Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button type="submit" className="registerButton" onClick={addContactNumber}>REGISTER</button>
      </form>
    </div>
  );
}

export default RegisterContact;
