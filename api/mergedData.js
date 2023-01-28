import { deleteDog } from './dogData';
import { getSingleLocation, getLocationDogs, deleteSingleLocation } from './locationData';

const viewLocationDetails = (locationFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleLocation(locationFirebaseKey), getLocationDogs(locationFirebaseKey)])
    .then(([locationObj, locationDogsArray]) => {
      resolve({ ...locationObj, dogs: locationDogsArray });
    }).catch((error) => reject(error));
});

const deleteLocationDogs = (locationId) => new Promise((resolve, reject) => {
  getLocationDogs(locationId).then((dogsArray) => {
    console.warn(dogsArray, 'Location Dogs');
    const deleteDogPromises = dogsArray.map((dog) => deleteDog(dog.firebaseKey));

    Promise.all(deleteDogPromises).then(() => {
      deleteSingleLocation(locationId).then(resolve);
    });
  }).catch((error) => reject(error));
});

export { viewLocationDetails, deleteLocationDogs };
