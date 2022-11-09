import React from "react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import firebase from './firebase'
import { useState } from "react";

export default function App(){
  const [number,setNumber]=useState('')
  const [name,setName]=useState('')
  const [otp,setOtp]=useState('')
  // handleChange = (e) =>{
  //   const {name,value}=e.target
  //   this.setState({
  //       [name]:value
  //     })
  // }

  function configureCaptcha(){
    const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    onSignInSubmit();
    console.log("captcha verified")
  },
  defaultCountry :"IN"
}, auth);
  }
  function onSignInSubmit(){
    
    configureCaptcha()
    const phoneNumber ="+91" + number
    console.log(phoneNumber  )
    const username =name 
    console.log(username)
  
        
    const appVerifier = window.recaptchaVerifier;
    const auth = getAuth();
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          console.log('otp send');
          fetch('http://localhost:3001/number', 
          { method: 'post', body: JSON.stringify({ phoneNumber,name }), headers: { 'content-type': 'application/json' } })
          // fetch('http://localhost:3001/name', 
          // { method: 'post', body: JSON.stringify({ name }), headers: { 'content-type': 'application/json' } })
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          
        });
  }
  function onSubmitOtp(){
  
    const code = otp
    console.log(code);
window.confirmationResult.confirm(code).then((result) => {
  // User signed in successfully.
  const user = result.user;
  console.log(JSON.stringify(user))
  alert("user verified")
  // ...
}).catch((error) => {
  // User couldn't sign in (bad verification code?)
  // ...
});
  }
  
    return(
      <div>
      <h2>PHONE NUMBER</h2>
      
        <div id="sign-in-button"></div>
        <input type="number" name="mobile" placeholder="mobile number" required onChange={e=>setNumber(e.target.value)}  />
        <input type="text" name="name" placeholder="name" required onChange={e=>setName(e.target.value)}  />
        <button onClick={onSignInSubmit}>submit</button>
      
      <h2>OTP NUMBER</h2>
      
        <input type="number" name="otp" placeholder="otp number" required onChange={e=>setOtp(e.target.value)}/>
        <button onClick={ onSubmitOtp}>submit</button>
      
      </div>
    )
  }
