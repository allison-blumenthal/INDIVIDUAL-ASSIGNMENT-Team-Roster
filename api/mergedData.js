import { getSingleDog } from './dogData';
import { getSingleLocation } from './locationData';

const viewDogDetails = (dogFirebaseKey) => new Promise((resolve, reject) => {
  getSingleDog(dogFirebaseKey)
    .then((dogObj) => {
      getSingleLocation(dogObj.location_id)
        .then((locationObj) => {
          resolve({ locationObj, ...dogObj });
        });
    }).catch((error) => reject(error));
});

export default { viewDogDetails };
