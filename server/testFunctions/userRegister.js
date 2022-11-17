/* eslint-disable no-new */
/* eslint-disable no-console */
const { UserDetails } = require('../schema');

const createUserProfile = (name, email) => new Promise((resolve) => {
  UserDetails.create({ userName: name, userEmail: email })
    .then(() => resolve({ status: 'success', email }))
    .catch((error) => {
      resolve({ status: 'error', error });
    });
});

// const isEmail = (email) => {

// };

const userRegister = (name, email) => new Promise((resolve) => {
  if (name !== undefined && email !== undefined) {
    const data = createUserProfile(name, email);
    resolve(data);
  } else {
    resolve({ status: 'error' });
  }
});

module.exports = { userRegister, createUserProfile };
