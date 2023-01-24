import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FloatingLabel, { Form, Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createDog, updateDog } from '../../api/dogData';

const initialState = {
  name: '',
  image: '',
  characteristics: '',
};

function DogForm({ dogObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth;

  useEffect(() => {
    if (dogObj.firebaseKey) setFormInput(dogObj);
  }, [dogObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dogObj.firebaseKey) {
      updateDog(formInput)
        .then(() => router.push('/ourdogs'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createDog(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateDog(patchPayload);
      }).then(() => {
        router.push('/ourDogs');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{dogObj.firebaseKey ? 'Update' : 'Add'} Dog</h2>

      <FloatingLabel controlId="floatingInput1" label="Dog's Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Dog's Name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingInput2" label="Dog's Image" className="mb-3">
        <Form.Control
          type="url"
          placeholder="Enter an image url"
          name="image"
          value={formInput.image}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <FloatingLabel controlId="floatingTextarea" label="Characteristics" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Characteristics"
          style={{ height: '100px' }}
          name="characteristics"
          value={formInput.characteristics}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      <Button type="submit">{dogObj.firebaseKey ? 'Update' : 'Add'} Dog</Button>
    </Form>
  );
}

DogForm.propTypes = {
  dogObj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    characteristics: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

DogForm.defaultProps = {
  dogObj: initialState,
};

export default DogForm;
