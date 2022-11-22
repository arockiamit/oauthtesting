/* eslint-disable no-useless-escape */
/* eslint-disable no-else-return */
/* eslint-disable no-return-await */
const { UserDetails } = require('../schema');

const isNumber = (number) => String(number)
  .match(
    /^(\91[\-\s]?)?[0]?(91)?[6789]\d{9}$/,
  );

const updateContactNumber1 = (token, number) => new Promise((resolve) => {
  if (isNumber(number)) {
    UserDetails.updateOne(
      { userEmail: token },
      {
        $set: { contactNumber1: number },
      },
    )
      .then(() => resolve({ status: 'success', msg: 'Updated Successfully' }));
  } else {
    const msg = 'Please Enter valid phone number';
    resolve({ status: 'fail', msg });
  }
});

const updateContactNumber2 = (token, number) => new Promise((resolve) => {
  if (isNumber(number)) {
    UserDetails.updateOne(
      { userEmail: token },
      {
        $set: { contactNumber2: number },
      },
    )
      .then(() => resolve({ status: 'success', msg: 'Updated Successfully' }));
  } else {
    const msg = 'Please Enter valid phone number';
    resolve({ status: 'fail', msg });
  }
});

const updateContactNumber3 = (token, number) => new Promise((resolve) => {
  if (isNumber(number)) {
    UserDetails.updateOne(
      { userEmail: token },
      {
        $set: { contactNumber3: number },
      },
    )
      .then(() => resolve({ status: 'success', msg: 'Updated Successfully' }));
  } else {
    const msg = 'Please Enter valid phone number';
    resolve({ status: 'fail', msg });
  }
});

const updateCallNumber = (token, number) => new Promise((resolve) => {
  if (isNumber(number)) {
    UserDetails.updateOne(
      { userEmail: token },
      {
        $set: { contactNumber3: number },
      },
    )
      .then(() => resolve({ status: 'success', msg: 'Updated Successfully' }));
  } else {
    const msg = 'Please Enter valid phone number';
    resolve({ status: 'fail', msg });
  }
});

module.exports = {
  updateContactNumber1, updateContactNumber2, updateContactNumber3, updateCallNumber,
};
