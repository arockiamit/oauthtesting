/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable consistent-return */
/* eslint-disable no-promise-executor-return */
const { UserDetails } = require('../schema');

// eslint-disable-next-line no-async-promise-executor
const isNumber = (number) => String(number)
  .match(
    /^(\+91[ \-\s]?)?[0]?(91)?[6789]\d{9}$/,
  );

const callContactNumber = async (email, name, mobileNumber) => {
  try {
    if (isNumber(mobileNumber) && name !== null && name !== undefined) {
      // eslint-disable-next-line max-len
      const data = await UserDetails.findOne({ userEmail: email });
      if (data.callingNumber === undefined) {
        await UserDetails.updateOne({ userEmail: email }, { $set: { callingNumber: mobileNumber, callingPersonName: name } });
        return ({ status: 'success' });
      } else {
        return ({ status: 'Already 1 person for calling is added..' });
      }
    } else {
      return ({ status: 'Please enter valid details' });
    }
  } catch (err) {
    return ({ status: 'failure' });
  }
};

module.exports = { callContactNumber };
