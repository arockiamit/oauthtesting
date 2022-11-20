/* eslint-disable no-new */
/* eslint-disable no-console */
const { UserDetails } = require('../schema');

const userRegister = (name, email) => new Promise((resolve) => {
  UserDetails.create({ userName: name, userEmail: email })
    .then(() => resolve({ status: 'success', email }))
    .catch((error) => {
      console.log(error);
      resolve({ status: 'error' });
    });
});

module.exports = { userRegister };
