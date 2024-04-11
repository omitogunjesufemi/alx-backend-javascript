import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {
  const userSignUp = signUpUser(firstName, lastName);
  const userPhotoUpload = uploadPhoto(filename);

  return Promise.allSettled([userSignUp, userPhotoUpload]);
}
