import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import Logo from './Logo';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <div>
        <Logo />
      </div>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Login
      </Button>
    </div>
  );
}

export default Signin;
