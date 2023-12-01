import signUpUser from "./4-user-promise.js";

import uploadPhoto from "./5-photo-reject.js";

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const filePromise = uploadPhoto(fileName);

  return Promise.allSettled([userPromise, filePromise]).then((rest) => {
    return rest.map((result) => {
      return {
        status: result.status,
        value: result.status === "fulfilled" ? result.value : result.reason,
      };
    });
  });
}
