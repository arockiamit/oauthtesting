/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');

async function viewContactNumber(email) {
  const data = await UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
  return data;
}

module.exports = { viewContactNumber };
