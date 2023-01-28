/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { viewLocationDetails } from '../../api/mergedData';
import DogCard from '../../components/DogCard';

export default function ViewLocation() {
  const [locationDetails, setLocationDetails] = useState([]);
  const router = useRouter();

  const { firebaseKey } = router.query;

  const getLocationDetails = () => {
    viewLocationDetails(firebaseKey).then(setLocationDetails);
  };

  useEffect(() => {
    getLocationDetails();
  }, [firebaseKey]);

  return (
    <>
      <div className="text-white ms-5 details">
        <h2>
          {locationDetails.location_name}
        </h2>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img src={locationDetails.location_image} alt={locationDetails.location_name} style={{ width: '300px' }} />
      </div>
      <div
        className="d-flex flex-wrap"
        style={{
          display: 'flex',
          justifyContent: 'center',
          padding: '20px',
        }}
      >
        {locationDetails.dogs?.map((dog) => (
          <DogCard key={dog.firebaseKey} dogObj={dog} onUpdate={getLocationDetails} />
        ))}
      </div>
    </>
  );
}
