/* eslint-disable no-else-return */
/* eslint-disable no-promise-executor-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');

const addContactNumber = (token, number) => new Promise((resolve) => {
  if (number !== null) {
    UserDetails.findOne({ userEmail: token }).then((data) => {
      if (data.contactNumber1 === undefined) {
        UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber1: number } })
          .then(() => resolve({ status: 'success', token }))
          .catch((error) => resolve({ status: 'Error', error }));
      } else if (data.contactNumber2 === undefined) {
        UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber2: number } })
          .then(() => resolve({ status: 'success', token }))
          .catch((error) => resolve({ status: 'Error', error }));
      } else if (data.contactNumber3 === undefined) {
        UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber3: number } })
          .then(() => resolve({ status: 'success', token }))
          .catch((error) => resolve({ status: 'Error', error }));
      } else if (number !== '91undefined' && data.contactNumber1 !== undefined && data.contactNumber2 !== undefined && data.contactNumber3 !== undefined) {
        return resolve({ status: 'Already 3 users have been added' });
      } else {
        return resolve({ status: 'Please enter the details' });
      }
    }).catch((error) => {
      resolve({ status: 'Error', error });
    });
  } else {
    return resolve({ status: 'Please enter the details' });
  }
});

module.exports = { addContactNumber };
