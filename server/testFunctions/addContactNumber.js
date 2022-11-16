/* eslint-disable no-promise-executor-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');

const addContactNumber = (token, number) => {
  if (number !== null) {
    UserDetails.findOne({ userEmail: token }).then(async (data) => {
      if (data.contactNumber1 === undefined) {
        await UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber1: number } })
          .then(() => ({ status: 'Successfully added..' }))
          .catch((error) => ({ status: 'User Not added..', error }));
      } if (data.contactNumber2 === undefined) {
        await UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber2: number } })
          .then(() => ({ status: 'Successfully added..' }))
          .catch((error) => ({ status: 'User Not added..', error }));
      } if (data.contactNumber3 === undefined) {
        await UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber3: number } })
          .then(() => ({ status: 'Successfully added..' }))
          .catch((error) => ({ status: 'User Not added..', error }));
      }
      return ({ status: 'Already 3 users have been added' });
    });
  } else {
    return ({ status: 'Please enter the details' });
  }
};

module.exports = { addContactNumber };
