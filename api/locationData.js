import { clientCredentials } from '../utils/client';

// API CALLS FOR LOCATIONS
const dbUrl = clientCredentials.databaseURL;

// GET LOCATIONS
const getLocations = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/locations.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// CREATE LOCATION
const createLocation = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/locations.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE LOCATION
const getSingleLocation = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/locations/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE LOCATION
const deleteSingleLocation = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/locations/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE LOCATION
const updateLocation = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/locations/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// GET A SINGLE LOCATION'S DOGS
const getLocationDogs = (locationFirebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dogs.json?orderBy="location_id"&equalTo="${locationFirebaseKey}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

export {
  getLocations,
  createLocation,
  getSingleLocation,
  deleteSingleLocation,
  updateLocation,
  getLocationDogs,
};
