import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const uploadPhotoResponse = uploadPhoto();
  const createUserResponse = createUser();

  return Promise.all([uploadPhotoResponse, createUserResponse])
    .then((responses) => {
      console.log(`${responses[0].body} ${responses[1].firstName} ${responses[1].lastName}`);
    })
    .catch(() => { console.log('Signup system offline'); });
}
