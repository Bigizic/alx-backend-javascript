import signUpUser from './4-user-promise';

import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const filePromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, filePromise]).then((rest) => rest.map((result) => ({
    status: result.status,
    value: result.status === 'fulfilled' ? result.value : String(result.reason),
  })));
}
