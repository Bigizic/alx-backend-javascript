import { uploadPhoto, createUser} from "./utils.js";

export default function handleProfileSignup() {
  let upload;

  uploadPhoto()
    .then(result => {
      upload = result.body;
      return createUser();
    })
    .then(userData => {
      console.log(upload, userData.firstName, userData.lastName);
    })
    .catch(error => {
      console.error("Signup system offline");
    });
}
