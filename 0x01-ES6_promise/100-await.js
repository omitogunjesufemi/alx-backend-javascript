import { uploadPhoto, createUser } from './utils';

export default async function asyncUploaderUser() {
  const userPhotoUpload = await uploadPhoto();
  const userCreation = await createUser();

  return Promise.all([userPhotoUpload, userCreation])
    .then((response) => {
      const result = {
        photo: response[0],
        user: response[1],
      };
      return result;
    }).catch((err) => {
      const errResult = {
        photo: err[0],
        user: err[1],
      };
      return errResult;
    });
}
