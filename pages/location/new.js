import React from 'react';
import Head from 'next/head';
import LocationForm from '../../components/forms/LocationForm';

export default function AddLocation() {
  return (
    <>
      <Head>
        <title>New Location</title>
      </Head>
      <h1>Add a Location</h1>
      <div>
        <LocationForm />
      </div>
    </>
  );
}
