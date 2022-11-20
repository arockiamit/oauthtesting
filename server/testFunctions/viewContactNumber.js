/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-return-await */
/* eslint-disable no-console */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');
const { isEmail } = require('./userRegister');
// all test conditions must be in the file..

// function phonenumber(num1, num2, num3) {
//   return String(num1, num2, num3)
//     .match(
//       /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
//     );
// }
async function viewNumber(email) {
  if (email) {
    const data = await UserDetails.findOne({ userEmail: email }, { userEmail: 0, _id: 0, __v: 0 });
    return data;
  } else {
    return ({ status: 'Email Not Found..' });
  }
}

module.exports = { viewNumber };
