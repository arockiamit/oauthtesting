const registerUser = require('../testFunctions/userRegister');

const userRegisterAPI = async (req, res) => {
  const { name, email } = req.body;
  const data = await registerUser.userRegister(name, email);
  res.json(data);
};

module.exports = { userRegisterAPI };
