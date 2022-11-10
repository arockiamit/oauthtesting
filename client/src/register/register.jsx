/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import firebase from './firebase';

export default function Register() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();
  // handleChange = (e) =>{
  //   const {name,value}=e.target
  //   this.setState({
  //       [name]:value
  //     })
  // }

  function configureCaptcha() {
    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log('captcha verified');
      },
      defaultCountry: 'IN',
    }, auth);
  }
  function onSignInSubmit() {
    configureCaptcha();
    console.log(phoneNumber);
    const username = name;
    console.log(username);

    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    const phoneNumber = `+91${number}`;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('otp send');
        // fetch('http://localhost:3001/name',
        // { method: 'post', body: JSON.stringify({ name }), headers: { 'content-type': 'application/json' } })
        // ...
      }).catch((error) => {
        // Error; SMS not sent
        // ...

      });
  }
  function onSubmitOtp() {
    const code = otp;
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const { user } = result;
      console.log(JSON.stringify(user));
      fetch(
        `${process.env.REACT_APP_SERVER_PREFIX}/userRegister`,
        { method: 'post', body: JSON.stringify({ number, name }), headers: { 'content-type': 'application/json' } },
      );
      alert('user verified');
      localStorage.setItem('token', number);
      return navigate('/Home');
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
    });
  }

  return (
    <div className="registerForm">
      <div className="whiteBg">
        <h2>Register</h2>
        <input type="text" name="name" placeholder="ENTER YOUR NAME" required onChange={(e) => setName(e.target.value)} />
        <input type="number" name="mobile" placeholder="ENTER YOUR PHONE NUMBER" required value={number} onChange={(e) => setNumber(e.target.value)} />
        <button className="continueBtn" type="submit" onClick={onSignInSubmit}>SEND OTP</button>

        <div className="otpForm">
          <input type="number" name="otp" placeholder="Enter the 6 digit OTP here" required onChange={(e) => setOtp(e.target.value)} />
          <button className="verifyBtn" type="submit" onClick={onSubmitOtp}>VERIFY</button>
        </div>
      </div>
    </div>
  );
}
