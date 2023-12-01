import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  let upload;

  uploadPhoto()
    .then((result) => {
      upload = result.body;
      return createUser();
    })
    .then((userData) => {
      console.log(upload, userData.firstName, userData.lastName);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
