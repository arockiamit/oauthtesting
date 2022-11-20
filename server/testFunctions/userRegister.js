/* eslint-disable no-new */
/* eslint-disable no-console */
const { UserDetails } = require('../schema');

const createUserProfile = (name, email) => new Promise((resolve) => {
  const data = UserDetails.findOne({ userEmail: email });
  if (!data) {
    UserDetails.create({ userName: name, userEmail: email })
      .then(() => resolve({ status: 'success', email }))
      .catch((error) => {
        resolve({ status: 'error', error });
      });
  } else {
    resolve({ status: 'success', email });
  }
});

function isEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    );
}

const mailId = (email) => new Promise((resolve) => {
  if (isEmail(email)) {
    resolve(email);
  } else {
    resolve('Enter Valid Mail..');
  }
});

const userRegister = (name, email) => new Promise((resolve) => {
  if (name !== undefined && email !== undefined && mailId(email)) {
    const data = createUserProfile(name, email);
    resolve(data);
  } else {
    resolve({ status: 'error' });
  }
});

module.exports = {
  userRegister, createUserProfile, isEmail, mailId,
};

// ^(\91\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
