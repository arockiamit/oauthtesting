const { userRegister } = require('../testFunctions/userRegister');

const userRegisterAPI = async (res, req) => {
  const { name, email } = req.body;
  const data = await userRegister(name, email);
  res.json(data);
};

module.exports = { userRegisterAPI };
