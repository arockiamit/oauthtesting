/* eslint-disable no-console */
import React, { useState } from 'react';

function RegisterNumber() {
  const [userName, setUsername] = useState('');
  const [mobileNumber, setNumber] = useState();
  const [message, setMessage] = useState('');
  const token = localStorage.getItem('token');

  const addContactNumber = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/api/registerContact`, { method: 'POST', body: JSON.stringify({ token, mobileNumber }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 'success') {
          setNumber('');
          setUsername('');
        }
        setMessage(data.status);
      });
  };

  return (
    <div className="App">
      <div className="RegisterContactHeading">REGISTER CONTACT</div>
      <form className="registerForm">
        <input
          className="registerUserName"
          type="text"
          name="username"
          value={userName}
          placeholder="Name"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          className="registerUserNumber"
          type="number"
          name="mobile number"
          value={mobileNumber}
          placeholder="Contact Number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <h3>{message}</h3>
        <button type="submit" className="registerUserButton" onClick={addContactNumber}>REGISTER</button>
      </form>
    </div>
  );
}

export default RegisterNumber;
