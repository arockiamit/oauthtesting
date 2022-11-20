/* eslint-disable consistent-return */
/* eslint-disable no-promise-executor-return */
const { UserDetails } = require('../schema');

// eslint-disable-next-line no-async-promise-executor
const callContactNumber = (token, mobNumber) => new Promise((resolve) => {
  if (mobNumber !== null && mobNumber !== undefined) {
    // eslint-disable-next-line max-len
    UserDetails.updateOne({ userEmail: token }, { $set: { callingNumber: mobNumber } })
      .then(() => resolve({ status: 'success', token }))
      .catch((error) => resolve({ status: 'Error', error }));
  } else {
    return resolve({ status: 'Please enter the details' });
  }
});

module.exports = { callContactNumber };
