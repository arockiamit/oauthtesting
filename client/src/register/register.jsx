/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLoginButton } from 'react-social-login-buttons';
import { LoginSocialGoogle } from 'reactjs-social-login';

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
      localStorage.setItem('accesstoken', email);
      fetch(`${process.env.REACT_APP_SERVER_PREFIX}/userRegister`, { method: 'post', body: JSON.stringify({ name, email }), headers: { 'content-type': 'application/json' } });
      alert('Inserted');
    } else {
      alert('Your mail verification failed... Try again');
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
          client_id="530955858644-71apt0ig4qtbthpn284i54plflp5s0qs.apps.googleusercontent.com"
          onResolve={({ provider, data }) => {
            console.log(provider, data);
            navigate('/Home');
            localStorage.setItem('accesstoken', data.email);
            const { userName } = data;
            const { userEmail } = data;
            fetch(`${process.env.REACT_APP_SERVER_PREFIX}/googledata`, { method: 'post', body: JSON.stringify({ userName, userEmail }), headers: { 'content-type': 'application/json' } });
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
