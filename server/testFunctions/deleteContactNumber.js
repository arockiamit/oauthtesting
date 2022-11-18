/* eslint-disable no-return-await */
const { UserDetails } = require('../schema');

async function deleteContactNumber1(email) {
  await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber1: '' } });
  const userData = UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
  return userData;
}

async function deleteContactNumber2(email) {
  await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber2: '' } });
  const userData = UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
  return userData;
}

async function deleteContactNumber3(email) {
  await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber3: '' } });
  const userData = UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
  return userData;
}

module.exports = { deleteContactNumber1, deleteContactNumber2, deleteContactNumber3 };
