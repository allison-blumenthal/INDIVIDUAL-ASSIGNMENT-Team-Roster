import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleDog } from '../../../api/dogData';
import DogForm from '../../../components/forms/DogForm';

export default function EditDog() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleDog(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<DogForm dogObj={editItem} />);
}
