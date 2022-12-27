
import React from 'react';
import { Button } from '@mui/material';
import "./Login.css";
import { auth, provider } from "./firebase";

function Login() {

  const signIn = () => {
    auth
    .signInWithPopup(provider)
    .then(result => console.log(result))
    .catch(error => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__container">
         <img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-whatsapp-phone-icon-png-image_6315989.png" 
             alt=""
          /> 
          <div className="login__text">
              <h1>Sign in to WhatsApp</h1>
          </div>
          <Button onClick={signIn}>
              Sign In With Google
          </Button>
      </div>
    </div>
  );
}

export default Login;