import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useAuth } from '../utils/context/authContext';
import DogCard from '../components/DogCard';
import { getDogs } from '../api/dogData';

export default function ShowOurDogs() {
  const [dogs, setDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState(dogs);
  const { user } = useAuth();

  const getAllTheDogs = () => {
    getDogs(user.uid).then(setDogs);
  };

  useEffect(() => {
    getAllTheDogs();
  });

  const search = (e) => {
    setFilteredDogs(dogs.filter((dog) => dog.name.toLowerCase().includes(e.target.value)));
  };

  return (
    <>
      <Head>
        <title>Our LuckyDogs</title>
      </Head>
      <h1>LuckyDog Daycare Doggos</h1>
      <input type="text" placeholder="Search" onKeyUp={search} />
      <div className="d-flex flex-wrap">
        {filteredDogs.map((dog) => (
          <DogCard key={dog.firebaseKey} dogObj={dog} onUpdate={getAllTheDogs} />
        ))}
      </div>
    </>
  );
}
