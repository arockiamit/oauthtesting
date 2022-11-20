/* eslint-disable no-return-await */
const { UserDetails } = require('../schema');

async function updateContactNumber(token, num1, num2, num3) {
  if (num1 !== '' && num2 !== '' && num3 !== '') {
    await UserDetails.updateOne(
      { userEmail: token },
      {
        $set: { contactNumber1: num1, contactNumber2: num2, contactNumber3: num3 },
      },
    );
    const data = '';
    return data;
  }
  const data = 'Please fill all numbers';
  return data;
}

module.exports = { updateContactNumber };
