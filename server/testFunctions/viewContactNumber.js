/* eslint-disable no-else-return */
const { UserDetails } = require('../schema');

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
