/* eslint-disable no-new */
/* eslint-disable no-console */
const { UserDetails } = require('../schema');

const getUserDetails = (token) => new Promise((resolve) => {
  UserDetails.findOne({ userEmail: token }, { _id: 0 })
    .then((data) => resolve(data))
    .catch((error) => {
      resolve({ status: 'failure..', error });
    });
});

module.exports = { getUserDetails };
