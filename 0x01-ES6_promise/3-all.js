import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const promise1 = uploadPhoto();
  const promise2 = createUser();
  Promise.allSettled([promise1, promise2])
    .then((results) => {
      let message = '';
      let isError = false;
      let errormessage = '';
      results.forEach((result) => {
        if (result.status === 'fulfilled') {
          if (result.value.body) message += `${result.value.body} `;
          if (result.value.firstName) message += `${result.value.firstName} `;
          if (result.value.lastName) message += `${result.value.lastName}`;
        } else {
          isError = true;
          errormessage = 'Signup system offline';
        }
      });
      if (message) console.log(message);
      if (isError) console.log(errormessage);
    });
}
