import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { deleteDog } from '../api/dogData';
import viewDogDetails from '../api/mergedData';

export default function DogCard({ dogObj, onUpdate }) {
  const [dogDetails, setDogDetails] = useState([]);

  useEffect(() => {
    viewDogDetails().then(setDogDetails);
  }, []);

  const deleteThisDog = () => {
    if (window.confirm(`Delete ${dogObj.name}?`)) {
      deleteDog(dogObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={dogObj.image} alt={dogObj.name} style={{ height: '200px' }} />
        <Card.Body>
          <Card.Title>{dogObj.name}</Card.Title>
          <p className="card-text bold">{dogObj.characteristics}</p>
          <h6> {dogDetails.locationObj?.location_name}</h6>
          <Link href={`/dog/edit/${dogObj.firebaseKey}`} passHref>
            <Button variant="info">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisDog} className="m-2">DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

DogCard.propTypes = {
  dogObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    characteristics: PropTypes.string,
    firebaseKey: PropTypes.string,
    location_id: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  locationObj: PropTypes.shape({
    location_name: PropTypes.string,
  }).isRequired,
};
