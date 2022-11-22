/* eslint-disable no-else-return */
const { UserDetails } = require('../schema');

async function viewNumber(email) {
  if (email) {
    const data = await UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return data;
  } else {
    return ({ status: 'Email Not Found..' });
  }
}

module.exports = { viewNumber };
