import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignUp() {
  const uploadPhotoResponse = uploadPhoto();
  const createUserResponse = createUser();

  Promise.all([uploadPhotoResponse, createUserResponse])
    .then((responses) => {
      if (responses) {
        let stringSet = '';
        for (const response of responses) {
          if ('body' in response) {
            stringSet += `${response.body} `;
          } else {
            stringSet += `${response.firstName} ${response.lastName}`;
          }
        }
        console.log(stringSet);
      }
    })
    .catch(() => { console.log('Signup system offline'); });
}
