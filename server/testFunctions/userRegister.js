/* eslint-disable no-else-return */
/* eslint-disable no-new */
/* eslint-disable no-console */
const { UserDetails } = require('../schema');

const createUserProfile = async (name, email) => {
  const data = await UserDetails.findOne({ userEmail: email });
  if (!data) {
    console.log(data);
    await UserDetails.create({ userName: name, userEmail: email });
    return ({ status: 'success', email });
  } else {
    return ({ status: 'success', email });
  }
};

function isEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    );
}

const mailId = (email) => new Promise((resolve) => {
  if (isEmail(email)) {
    resolve(email);
  } else {
    resolve('Enter Valid Mail..');
  }
});

const userRegister = async (name, email) => {
  if (name !== undefined && email !== undefined && mailId(email)) {
    const data = await createUserProfile(name, email);
    return data;
  } else {
    return ({ status: 'error' });
  }
};

module.exports = {
  userRegister, createUserProfile, isEmail, mailId,
};

// ^(\91\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$
