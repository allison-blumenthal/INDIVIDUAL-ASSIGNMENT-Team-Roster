import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import DogCard from '../components/DogCard';
import { getDogs } from '../api/dogData';

const getSearchDogs = (query, dogs) => {
  if (!query) {
    return dogs;
  }
  return dogs.filter((dog) => dog.name.toLowerCase().includes(query.toLowerCase()) || dog.characteristics.toLowerCase().includes(query.toLowerCase()));
};

export default function ShowOurDogs() {
  const [dogs, setDogs] = useState([]);
  const [query, setQuery] = useState('');
  const { user } = useAuth();

  const getAllTheDogs = () => {
    getDogs(user.uid).then(setDogs);
  };

  useEffect(() => {
    getAllTheDogs();
  }, []);

  const filteredDogs = getSearchDogs(query, dogs);

  return (
    <>
      <Head>
        <title>Our LuckyDogs</title>
      </Head>
      <h1>LuckyDog Daycare Doggos</h1>
      <input type="text" placeholder="Search" onChange={(e) => setQuery(e.target.value)} />
      <div className="d-flex flex-wrap">
        {filteredDogs.map((dog) => (
          <DogCard key={dog.firebaseKey} dogObj={dog} onUpdate={getAllTheDogs} />
        ))}
      </div>
    </>
  );
}
