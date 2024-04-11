import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const uploadPhotoResponse = uploadPhoto();
  const createUserResponse = createUser();

  Promise.all([uploadPhotoResponse, createUserResponse])
    .then((responses) => {
      console.log(responses);
    })
    .catch(() => { console.log('Signup system offline'); });
}
