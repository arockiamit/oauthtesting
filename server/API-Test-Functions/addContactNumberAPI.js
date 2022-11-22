const addContactNumberFunction = require('../testFunctions/addContactNumber');

async function addContactNumberAPI(req, res) {
  const { token, userName, mobileNumber } = req.body;
  const number = `91${mobileNumber}`;
  const data = await addContactNumberFunction.addContactNumber(token, userName, number);
  return res.json(data);
}

module.exports = { addContactNumberAPI };
