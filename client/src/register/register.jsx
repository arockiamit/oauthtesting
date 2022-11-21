/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';
import toast from 'toast-me';

import './register.css';

export default function Register() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subotp, setSubotp] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  function verify() {
    console.log(email);
    fetch(`${process.env.REACT_APP_SERVER_PREFIX}/otp`, { method: 'post', body: JSON.stringify({ email }), headers: { 'content-type': 'application/json' } })
      .then((res) => res.json())
      .then((data) => {
        setSubotp(data);
      });
  }
  function submit() {
    if (otp === subotp) {
      navigate('/Home');
      window.location.reload();
      localStorage.setItem('accesstoken', email);
      fetch(`${process.env.REACT_APP_SERVER_PREFIX}/userRegister`, { method: 'post', body: JSON.stringify({ name, email }), headers: { 'content-type': 'application/json' } })
        .then((data) => console.log(data));
      toast('Inserted');
    } else {
      toast('Your mail verification failed... Try again');
    }
  }

  return (
    <div className="registerForm">
      <div className="whiteBg">
        <h2>Register</h2>
        <input type="text" name="name" placeholder="ENTER YOUR NAME" required onChange={(e) => setName(e.target.value)} />
        <input type="email" name="email" placeholder="ENTER YOUR EMAIL ID" onChange={(e) => setEmail(e.target.value)} />
        <button className="continueBtn" type="submit" onClick={verify}>VERIFICATION</button>
        <input type="text" name="otp" placeholder="ENTER OTP" onChange={(e) => setOtp(e.target.value)} />
        <button className="continueBtn" type="submit" onClick={submit}>REGISTER</button>
        <LoginSocialGoogle
          client_id="530955858644-kdkehhqf98s21lprjcm6hj8alnd6ddrd.apps.googleusercontent.com"
          scope="openid profile email"
          discoveryDocs="claims_supported"
          access_type="offline"
          onResolve={({ provider, data }) => {
            console.log(provider, data);
            navigate('/Home');
            window.location.reload();
            localStorage.setItem('accesstoken', data.email);
            const { name } = data;
            const { email } = data;
            fetch(`${process.env.REACT_APP_SERVER_PREFIX}/userRegister`, { method: 'post', body: JSON.stringify({ name, email }), headers: { 'content-type': 'application/json' } });
          }}
          onReject={(err) => {
            console.log(err);
          }}
        >
          <GoogleLoginButton />
        </LoginSocialGoogle>
      </div>
    </div>
  );
}
