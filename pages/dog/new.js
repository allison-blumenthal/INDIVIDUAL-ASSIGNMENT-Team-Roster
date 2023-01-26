import React from 'react';
import Head from 'next/head';
import DogForm from '../../components/forms/DogForm';

export default function AddDog() {
  return (
    <>
      <Head>
        <title>New LuckyDog</title>
      </Head>
      <div>
        <DogForm />
      </div>
    </>
  );
}
