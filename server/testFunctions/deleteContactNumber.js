/* eslint-disable no-else-return */
/* eslint-disable max-len */
/* eslint-disable no-return-await */
const { UserDetails } = require('../schema');

async function deleteContactNumber1(email) {
  if (email) {
    await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber1: '' } });
    const userData = await UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return userData;
  } else {
    return ({ status: 'error' });
  }
}
async function deleteContactNumber2(email) {
  if (email) {
    await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber2: '' } });
    const userData = await UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return userData;
  } else {
    return ({ status: 'error' });
  }
}
async function deleteContactNumber3(email) {
  if (email) {
    await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber3: '' } });
    const userData = await UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return userData;
  } else {
    return ({ status: 'error' });
  }
}

module.exports = { deleteContactNumber1, deleteContactNumber2, deleteContactNumber3 };
