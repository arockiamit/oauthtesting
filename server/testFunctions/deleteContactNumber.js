/* eslint-disable no-return-await */
const { UserDetails } = require('../schema');

async function deleteContactNumber1(email) {
  if (email) {
    await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber1: '' } });
    // eslint-disable-next-line max-len
    const userData = await UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return userData;
  }
  return ({ status: 'error' });
}
async function deleteContactNumber2(email) {
  if (email) {
    await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber2: '' } });
    const userData = UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return userData;
  // eslint-disable-next-line no-else-return
  } else {
    return ({ status: 'error' });
  // eslint-disable-next-line padded-blocks
  }

}
async function deleteContactNumber3(email) {
  if (email) {
    await UserDetails.updateOne({ userEmail: email }, { $unset: { contactNumber3: '' } });
    const userData = UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return userData;
  }

  return ({ status: 'error' });
}

module.exports = { deleteContactNumber1, deleteContactNumber2, deleteContactNumber3 };
