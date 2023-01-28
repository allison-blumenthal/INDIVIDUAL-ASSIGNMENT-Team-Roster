import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';
import Logo from './Logo';

export default function Signin() {
  return (
    <>
      <div
        style={{
          padding: '20px',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <Logo />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Button
          id="login-btn"
          type="button"
          size="lg"
          className="copy-btn"
          onClick={signIn}
        >
          Login
        </Button>
      </div>
    </>
  );
}
