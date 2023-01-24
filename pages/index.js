import React from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

function Home() {
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
      <h1>Welcome to LuckyDogs Daycare!</h1>
      <h2>Click below to see our awesome dogs!</h2>
      <Link href="/ourdogs" passHref>
        <Button>Our Dogs</Button>
      </Link>
    </div>
  );
}

export default Home;
