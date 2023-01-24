import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { getDogs } from '../api/dogData';
import { useAuth } from '../utils/context/authContext';
import DogCard from '../components/DogCard';

function Home() {
  const [dogs, setDogs] = useState([]);

  const { user } = useAuth();

  const getAllTheDogs = () => {
    getDogs(user.uid).then(setDogs);
  };

  useEffect(() => {
    getAllTheDogs();
  }, []);

  return (
    <>
      <Head>
        <title>LuckyDog Daycare</title>
      </Head>
      <div className="d-flex flex-wrap">
        {dogs.map((dog) => (
          <DogCard key={dog.firebaseKey} dogObj={dog} onUpdate={getAllTheDogs} />
        ))}
      </div>
    </>
  );
}

export default Home;
