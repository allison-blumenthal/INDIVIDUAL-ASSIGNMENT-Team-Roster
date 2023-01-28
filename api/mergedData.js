import { getSingleLocation, getLocationDogs } from './locationData';

const viewLocationDetails = (locationFirebaseKey) => new Promise((resolve, reject) => {
  Promise.all([getSingleLocation(locationFirebaseKey), getLocationDogs(locationFirebaseKey)])
    .then(([locationObj, locationDogsArray]) => {
      resolve({ ...locationObj, dogs: locationDogsArray });
    }).catch((error) => reject(error));
});

export default viewLocationDetails;
