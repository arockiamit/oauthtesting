/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

export default function Register() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const navigate = useNavigate();
  function onSignInSubmit() {
    const phoneNumber = `+91${number}`;
    fetch(
      `${process.env.REACT_APP_SERVER_PREFIX}/userRegister`,
      { method: 'post', body: JSON.stringify({ phoneNumber, name }), headers: { 'content-type': 'application/json' } },
    ).then((res) => (res.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        return navigate('/Home');
      }));
  }

  return (
    <div className="registerForm">
      <div className="whiteBg">
        <h2>Register</h2>
        <input type="text" name="name" placeholder="ENTER YOUR NAME" required onChange={(e) => setName(e.target.value)} />
        <input type="number" name="mobile" placeholder="ENTER YOUR PHONE NUMBER" required value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className="continueBtn" type="submit" onClick={onSignInSubmit}>REGISTER</button>
      </div>
    </div>
  );
}
