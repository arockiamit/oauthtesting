const { UserDetails } = require('../schema');

async function userRegister(req, res) {
  const { phoneNumber, name } = req.body;
  try {
    await UserDetails.create({ userName: name, userMobileNumber: phoneNumber });
    return res.json({ status: 'success', phoneNumber });
  } catch (error) {
    return res.json({ error });
  }
}

module.exports = { userRegister };
