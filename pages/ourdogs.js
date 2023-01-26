import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import DogCard from '../components/DogCard';
import { getDogs } from '../api/dogData';
// import SearchBar from '../components/SearchBar';

export default function ShowOurDogs() {
  const [dogs, setDogs] = useState([]);

  const { user } = useAuth();

  const getAllTheDogs = () => {
    getDogs(user.uid).then(setDogs);
  };

  useEffect(() => {
    getAllTheDogs();
  });

  return (
    <>
      <Head>
        <title>Our LuckyDogs</title>
      </Head>
      <h1>LuckyDog Daycare Doggos</h1>
      {/* <SearchBar /> */}
      <div className="d-flex flex-wrap">
        {dogs.map((dog) => (
          <DogCard key={dog.firebaseKey} dogObj={dog} onUpdate={getAllTheDogs} />
        ))}
      </div>
    </>
  );
}
