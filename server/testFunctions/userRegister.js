/* eslint-disable no-new */
/* eslint-disable no-console */
const { UserDetails } = require('../schema');

const userRegister = (name, phoneNumber) => new Promise((resolve) => {
  UserDetails.create({ userName: name, userEmail: 'poomathi.k@kaaviansys.com', userMobileNumber: phoneNumber })
    .then(() => resolve({ status: 'success', phoneNumber }))
    .catch((error) => {
      console.log(error);
      resolve({ status: 'error' });
    });
});

module.exports = { userRegister };
