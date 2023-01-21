import { clientCredentials } from '../utils/client';

// API CALLS FOR DOGS
const dbUrl = clientCredentials.databaseURL;

// GET BOOKS
const getDogs = (uid) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/DOGS.json?orderBy="uid"&equalTo="${uid}"`, {
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

// DELETE DOG
const deleteDog = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dogs/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// GET SINGLE DOG
const getSingleDog = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dogs/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// CREATE DOG
const createDog = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dogs.json`, {
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

// UPDATE BOOK
const updateDog = (payload) => new Promise((resolve, reject) => {
  fetch(`${dbUrl}/dogs/${payload.firebaseKey}.json`, {
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

export {
  getDogs,
  createDog,
  deleteDog,
  getSingleDog,
  updateDog,
};
