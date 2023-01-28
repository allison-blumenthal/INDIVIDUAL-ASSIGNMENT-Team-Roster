import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import Head from 'next/head';
import LocationCard from '../components/LocationCard';
import { getLocations } from '../api/locationData';
import { useAuth } from '../utils/context/authContext';

function Home() {
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
        <title>LuckyDog Daycare</title>
      </Head>
      <h1>Welcome to LuckyDog Daycare!</h1>
      <h5>Click here to see all of our adorable dogs!</h5>
      <Link href="/dogs" passHref>
        <Button>LuckyDogs</Button>
      </Link>
      <div className="d-flex flex-wrap">
        {locations.map((location) => (
          <LocationCard key={location.firebaseKey} locationObj={location} onUpdate={getAllTheLocations} />
        ))}
      </div>
    </>
  );
}

export default Home;
