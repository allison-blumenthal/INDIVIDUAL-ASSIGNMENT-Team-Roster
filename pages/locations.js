import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import { getLocations } from '../api/locationData';
import LocationCard from '../components/LocationCard';

export default function ShowLocations() {
  const [locations, setLocations] = useState([]);
  const { user } = useAuth();

  const getAllTheLocations = () => {
    getLocations(user.uid).then(setLocations);
  };

  useEffect(() => {
    getAllTheLocations();
  }, []);

  return (
    <>
      <Head>
        <title>LuckyDog Locations</title>
      </Head>
      <h1>LuckyDog Daycare Locations</h1>
      <div className="d-flex flex-wrap">
        {locations.map((location) => (
          <LocationCard key={location.firebaseKey} locationObj={location} onUpdate={getAllTheLocations} />
        ))}
      </div>
    </>
  );
}
