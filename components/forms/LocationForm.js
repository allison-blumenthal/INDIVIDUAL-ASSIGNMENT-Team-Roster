import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { useAuth } from '../../utils/context/authContext';
import { createLocation, updateLocation } from '../../api/locationData';

const initialState = {
  name: '',
  image: '',
  characteristics: '',
};

function LocationForm({ locationObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (locationObj.firebaseKey) setFormInput(locationObj);
  }, [locationObj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (locationObj.firebaseKey) {
      updateLocation(formInput)
        .then(() => router.push('/locations'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createLocation(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateLocation(patchPayload);
      }).then(() => {
        router.push('/locations');
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <h1 className="text-white mt-5">{locationObj.firebaseKey ? 'Update' : 'New'} Location</h1>

        <FloatingLabel controlId="floatingInput1" label="Location Name" className="mb-3">
          <Form.Control
            type="text"
            placeholder="Location Name"
            name="location_name"
            value={formInput.location_name}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <FloatingLabel controlId="floatingInput2" label="Location Image" className="mb-3">
          <Form.Control
            type="url"
            placeholder="Enter an image url"
            name="location_image"
            value={formInput.location_image}
            onChange={handleChange}
            required
          />
        </FloatingLabel>

        <Button type="submit">{locationObj.firebaseKey ? 'Update' : 'Add'} Location</Button>
      </Form>
    </>
  );
}

LocationForm.propTypes = {
  locationObj: PropTypes.shape({
    location_name: PropTypes.string,
    location_image: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

LocationForm.defaultProps = {
  locationObj: initialState,
};

export default LocationForm;
