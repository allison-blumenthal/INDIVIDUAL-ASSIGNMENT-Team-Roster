import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleLocation } from '../../../api/locationData';
import LocationForm from '../../../components/forms/LocationForm';

export default function EditLocation() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();

  const { firebaseKey } = router.query;

  useEffect(() => {
    getSingleLocation(firebaseKey).then(setEditItem);
  }, [firebaseKey]);

  return (<LocationForm locationObj={editItem} />);
}
