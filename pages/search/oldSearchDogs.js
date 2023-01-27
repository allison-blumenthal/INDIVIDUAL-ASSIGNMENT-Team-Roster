import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { getDogs } from '../../api/dogData';
import DogCard from '../../components/DogCard';
import SearchBar from '../../components/SearchBar';

export default function SearchDogs() {
  const [search, setSearch] = useState([]);
  const { user } = useAuth();
  const router = useRouter();

  const { searchText } = router.query;

  const searchAllTheDogs = () => {
    getDogs(user.uid).then((dogs) => {
      const filteredDogs = dogs.filter((dog) => dog.name.toLowerCase().includes(searchText));
      setSearch(filteredDogs);
    });
  };

  useEffect(() => {
    searchAllTheDogs();
    return () => {
      setSearch([]);
    };
  }, []);

  return (
    <>
      <SearchBar />
      <div className="d-flex flex-wrap">
        {search.map((dog) => <DogCard key={dog.firebaseKey} dogObj={dog} onUpdate={searchAllTheDogs} />)}
      </div>
    </>
  );
}
