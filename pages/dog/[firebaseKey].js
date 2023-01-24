import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDog } from '../../api/dogData';

export default function ViewDog() {
  const [dogDetails, setDogDetails] = useState([]);
  const router = useRouter;

  // get the firebaseKey from the url
  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDog(firebaseKey).then(setDogDetails);
  }, [firebaseKey]);

  return (
    <>
      <div className="mt-5 d-flex flex-wrap">
        <div className="d-flex flex-column">
          <img src={dogDetails.image} alt={dogDetails.name} style={{ width: '300px' }} />
        </div>
        <div className="text-white ms-5 details">
          <h2>
            {dogDetails.name}
          </h2>
          <p>{dogDetails.characteristics}</p>
        </div>
      </div>
    </>
  );
}
