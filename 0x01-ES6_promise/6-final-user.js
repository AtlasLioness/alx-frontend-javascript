import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const promise1 = signUpUser(firstName, lastName);
  const promise2 = uploadPhoto(fileName);
  const result = [];
  return Promise.allSettled([promise1, promise2]).then((results) => {
    results.map(({ status, value, reason }) => (
      result.push({
        status,
        value: status === 'fulfilled' ? value : reason.toString(),
      })
    ));
    return result;
  });
}
