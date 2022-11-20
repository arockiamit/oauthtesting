/* eslint-disable no-new */
/* eslint-disable no-console */
const { UserDetails } = require('../schema');

const getCallDetails = (token) => new Promise((resolve) => {
  UserDetails.findOne({ userEmail: token })
    .then((data) => resolve(data))
    .catch((error) => {
      resolve({ status: 'failure..', error });
    });
});

module.exports = { getCallDetails };
