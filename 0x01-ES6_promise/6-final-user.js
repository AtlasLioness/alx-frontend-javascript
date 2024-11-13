import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  return Promise.allSettled([promise1, promise2])
    .then((results) => {
      const array = [];
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          array.push({ status: result.status, value: result.value });
        } else {
          array.push({ status: result.status, value: result.reason });
        }
      });
      return array;
    });
}
