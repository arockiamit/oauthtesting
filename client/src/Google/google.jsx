import React from 'react';
import { GoogleLogin } from 'react-google-login';

const CLIENT_ID = '530955858644-71apt0ig4qtbthpn284i54plflp5s0qs.apps.googleusercontent.com';
function Login() {
  const responseGoogle = (response: any) => {
    console.log(response.accessToken);
  };

  return (
    <div className="App">
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
