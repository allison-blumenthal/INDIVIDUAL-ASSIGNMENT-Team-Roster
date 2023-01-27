import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useAuth } from '../../utils/context/authContext';
import DogCard from '../../components/DogCard';
import { getDogs } from '../../api/dogData';

export default function SearchOurDogs() {
  const [searchDogs, setSearchDogs] = useState([]);
  const [filteredDogs, setFilteredDogs] = useState(searchDogs);
  const { user } = useAuth();

  const getSearchableDogs = () => {
    getDogs(user.uid).then(setSearchDogs);
  };

  useEffect(() => {
    getSearchableDogs();
  });

  const search = (e) => {
    setFilteredDogs(searchDogs.filter((dog) => dog.name.toLowerCase().includes(e.target.value)));
  };

  return (
    <>
      <Head>
        <title>Search</title>
      </Head>
      <h1>Search Our Doggos</h1>
      <input type="text" placeholder="Search" onKeyUp={search} />

      <div className="d-flex flex-wrap">
        {filteredDogs.map((dog) => (
          <DogCard key={dog.firebaseKey} dogObj={dog} onUpdate={getSearchableDogs} />
        ))}
      </div>
    </>
  );
}
