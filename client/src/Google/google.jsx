/* eslint-disable no-console */
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import './google.css';

const CLIENT_ID = '530955858644-71apt0ig4qtbthpn284i54plflp5s0qs.apps.googleusercontent.com';
function Login() {
  const responseGoogle = (response) => {
    console.log(response.accessToken);
    localStorage.setItem('accessToken', response.accessToken);
  };

  return (
    <div className="loginGoogle">
      <GoogleLogin
        clientId={CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy="single_host_origin"
      />
    </div>
  );
}
export default Login;
