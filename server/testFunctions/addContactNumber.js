/* eslint-disable no-promise-executor-return */
/* eslint-disable consistent-return */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');

const addContactNumber = (token, number) => new Promise((resolve) => {
  if (number !== null) {
    UserDetails.findOne({ userEmail: token }).then(async (data) => {
      if (data.contactNumber1 === undefined) {
        await UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber1: number } });
        return resolve({ status: 'Successfully added..' });
      } if (data.contactNumber2 === undefined) {
        await UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber2: number } });
        return resolve({ status: 'Successfully added..' });
      } if (data.contactNumber3 === undefined) {
        await UserDetails.updateOne({ userEmail: token }, { $set: { contactNumber3: number } });
        return resolve({ status: 'Successfully added..' });
      }
      return resolve({ status: 'Already 3 users have been added' });
    });
  } else {
    return resolve({ status: 'Please enter the details' });
  }
});

module.exports = { addContactNumber };
