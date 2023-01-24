import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { deleteDog } from '../api/dogData';

function DogCard({ dogObj, onUpdate }) {
  const deleteThisDog = () => {
    if (window.confirm(`Delete ${dogObj.name}?`)) {
      deleteDog(dogObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card style={{ width: '18rem', margin: '10px' }}>
        <Card.Img variant="top" src={dogObj.image} alt={dogObj.name} style={{ height: '400px' }} />
        <Card.Body>
          <Card.Title>{dogObj.name}</Card.Title>
          <p className="card-text bold">{dogObj.characteristics}</p>
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
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default DogCard;
