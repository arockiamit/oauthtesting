/* eslint-disable no-alert */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

import firebase from './firebase';

export default function Register() {
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const phoneNumber = `+91${number}`;
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
      callback: () => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        onSignInSubmit();
        console.log('captcha verified');
      },
      defaultCountry: 'IN',
    }, auth);
  }
  function onSignInSubmit() {
    configureCaptcha();

    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('otp send');
        // fetch('http://localhost:3001/name',
        // { method: 'post', body: JSON.stringify({ name }), headers: { 'content-type': 'application/json' } })
        // ...
      }).catch(() => {
        // Error; SMS not sent
        // ...
        console.log('SMS NOT SENT');
      });
  }
  function onSubmitOtp() {
    const code = otp;
    console.log(code);
    window.confirmationResult.confirm(code).then(() => {
      fetch(
        `${process.env.REACT_APP_SERVER_PREFIX}/userRegister`,
        { method: 'post', body: JSON.stringify({ phoneNumber, name }), headers: { 'content-type': 'application/json' } },
      ).then((data) => {
        console.log(data);
        localStorage.setItem('token', phoneNumber);
        return navigate('/Menu');
      });
      alert('user verified');
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      console.log(error);
    });
  }

  return (
    <div>
      <h2>PHONE NUMBER</h2>

      <div id="sign-in-button" />
      <input type="number" name="mobile" placeholder="mobile number" required onChange={(e) => setNumber(e.target.value)} />
      <input type="text" name="name" placeholder="name" required value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" onClick={onSignInSubmit}>submit</button>

      <h2>OTP NUMBER</h2>

      <input type="number" name="otp" placeholder="otp number" required onChange={(e) => setOtp(e.target.value)} />
      <button type="button" onClick={onSubmitOtp}>submit</button>

    </div>
  );
}
