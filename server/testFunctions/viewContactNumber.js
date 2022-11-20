/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');

async function viewContactNumber(token) {
  return await UserDetails.findOne({ userEmail: token }, { userEmail: 0, _id: 0, __v: 0 }).then((data) => data);
}

module.exports = { viewContactNumber };
