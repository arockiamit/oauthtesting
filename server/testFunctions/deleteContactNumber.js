/* eslint-disable no-return-await */
const { UserDetails } = require('../schema');

// async function deleteContactNumber1(token) {
//   await UserDetails.updateOne({ userEmail: token }, { $unset: { contactNumber1: '' } });
//   return await UserDetails.find({}).then((data) => data);
// }
const deleteContactNumber1 = (token) => new Promise((resolve) => {
  UserDetails.updateOne({ userEmail: token }, { $unset: { contactNumber1: '' } })
    .then(() => resolve({ status: 'success' }))
    .catch((error) => {
      // console.log(error);
      resolve({ status: 'error', error });
    });
});
// module.exports = { userRegister };

async function deleteContactNumber2(token) {
  return await UserDetails.updateOne({ userEmail: token }, { $unset: { contactNumber2: '' } });
}

async function deleteContactNumber3(token) {
  await UserDetails.updateOne({ userEmail: token }, { $unset: { contactNumber3: '' } });
  return await UserDetails.find({}).then((data) => data);
}

module.exports = { deleteContactNumber1, deleteContactNumber2, deleteContactNumber3 };
