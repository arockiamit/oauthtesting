/* eslint-disable consistent-return */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');

async function addContactNumber(req, res) {
  const { token, mobileNumber } = req.body;
  // const userPhoneNUmber = tokenDecode(token);
  const number = `91${mobileNumber}`;
  if (mobileNumber !== null) {
    await UserDetails.findOne({ userMobileNumber: token }).then(async (data) => {
      if (data.contactNumber1 === undefined) {
        await UserDetails.updateOne({ userMobileNumber: token }, { $set: { contactNumber1: number } });
        return res.json({ status: 'Successfully added..' });
      } if (data.contactNumber2 === undefined) {
        await UserDetails.updateOne({ userMobileNumber: token }, { $set: { contactNumber2: number } });
        return res.json({ status: 'Successfully added..' });
      } if (data.contactNumber3 === undefined) {
        await UserDetails.updateOne({ userMobileNumber: token }, { $set: { contactNumber3: number } });
        return res.json({ status: 'Successfully added..' });
      }
      return res.json({ status: 'Already 3 users have been added' });
    });
  } else {
    return res.json({ status: 'Please enter the details' });
  }
}

module.exports = { addContactNumber };
