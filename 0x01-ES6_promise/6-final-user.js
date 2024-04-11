import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const userSignUp = signUpUser(firstName, lastName);
  const userPhotoUpload = uploadPhoto(filename);
  const status = [];

  return Promise.allSettled([userSignUp, userPhotoUpload]).then((responses) => {
    responses.forEach((response) => {
      if (response.status === 'fulfilled') {
        status.push({ status: response.status, value: response.value });
      } else {
        status.push({ status: response.status, value: `${response.reason}` });
      }
    });

    return status;
  });
}
