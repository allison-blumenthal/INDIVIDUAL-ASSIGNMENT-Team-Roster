import React from 'react';
import { Card, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { deleteLocationDogs } from '../api/mergedData';

export default function LocationCard({ locationObj, onUpdate }) {
  const deleteThisLocation = () => {
    if (window.confirm(`Delete ${locationObj.location_name}?`)) {
      deleteLocationDogs(locationObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={locationObj.location_image} alt={locationObj.location_name} style={{ height: '200px' }} />
        <Card.Body>
          <Card.Title>{locationObj.location_name}</Card.Title>
          <Link href={`/location/${locationObj.firebaseKey}`} passHref>
            <Button variant="warning" className="view-btn">VIEW</Button>
          </Link>
          <Link href={`/location/edit/${locationObj.firebaseKey}`} passHref>
            <Button variant="info" className="edit-btn">EDIT</Button>
          </Link>
          <Button variant="danger" onClick={deleteThisLocation} className="delete-btn">DELETE
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

LocationCard.propTypes = {
  locationObj: PropTypes.shape({
    location_image: PropTypes.string,
    location_name: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
