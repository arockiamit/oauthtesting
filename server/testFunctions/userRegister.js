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

function isEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

const mailId = (email) => new Promise((resolve) => {
  if (isEmail(email)) {
    // throw new Error('not an email');
    resolve(email);
  }
});

const userRegister = (name, email) => new Promise((resolve) => {
  if (name !== undefined && email !== undefined) {
    if (mailId(email)) {
      const data = createUserProfile(name, email);
      resolve(data);
    } else {
      resolve({ status: 'Invalid Email' });
    }
  } else {
    resolve({ status: 'error' });
  }
});

module.exports = { userRegister, createUserProfile, isEmail };

// ^(\91\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
