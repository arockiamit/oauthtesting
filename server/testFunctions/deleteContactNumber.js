/* eslint-disable no-return-await */
const { UserDetails } = require('../schema');

async function deleteContactNumber1(token) {
  await UserDetails.updateOne({ userEmail: token }, { $unset: { contactNumber1: '' } }).then((data) => data);
  return await UserDetails.find({}).then((data) => data);
}

async function deleteContactNumber2(token) {
  await UserDetails.updateOne({ userEmail: token }, { $unset: { contactNumber2: '' } });
  return await UserDetails.find({}).then((data) => data);
}

async function deleteContactNumber3(token) {
  await UserDetails.updateOne({ userEmail: token }, { $unset: { contactNumber3: '' } });
  return await UserDetails.find({}).then((data) => data);
}

module.exports = { deleteContactNumber1, deleteContactNumber2, deleteContactNumber3 };
