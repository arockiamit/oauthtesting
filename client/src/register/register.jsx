import React from "react";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { signInWithPhoneNumber } from "firebase/auth";
import firebase from './firebase'

class App extends React.Component{
  handleChange = (e) =>{
    const {name,value}=e.target
    this.setState({
        [name]:value
      })
  }

  configureCaptcha = () =>{
    const auth = getAuth();
window.recaptchaVerifier = new RecaptchaVerifier('sign-in-button', {
  'size': 'invisible',
  'callback': (response) => {
    // reCAPTCHA solved, allow signInWithPhoneNumber.
    this.onSignInSubmit();
    console.log("captcha verified")
  },
  defaultCountry :"IN"
}, auth);
  }
  onSignInSubmit = (e) =>{
    e.preventDefault()
    this.configureCaptcha()
    const phoneNumber ="+91" + this.state.mobile
    console.log(phoneNumber  )
    const name=this.state.name
    console.log(name)
  
        
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
          console.log('otp not send');
        });
  }
  onSubmitOtp = (e) =>{
    e.preventDefault()
    const code = this.state.otp
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
  render(){
    return(
      <div>
      <h2>PHONE NUMBER</h2>
      <form onSubmit={this.onSignInSubmit}>
        <div id="sign-in-button"></div>
        <input type="number" name="mobile" placeholder="mobile number" required onChange={this.handleChange}  />
        <input type="text" name="name" placeholder="name" required onChange={this.handleChange}  />
        <button type="submit">submit</button>
      </form>
      <h2>OTP NUMBER</h2>
      <form onSubmit={this.onSubmitOtp}>
        <input type="number" name="otp" placeholder="otp number" required onChange={this.handleChange}/>
        <button type="submit">submit</button>
      </form>
      </div>
    )
  }
}
export default App