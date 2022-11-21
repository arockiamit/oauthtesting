const { callContactNumber } = require('../testFunctions/callContactNumber');

const callContactNumberAPI = async (req, res) => {
  const { token, userName, mobileNum } = req.body;
  const mobileNumber = `+91${mobileNum}`;
  const data = await callContactNumber(token, userName, mobileNumber);
  return res.json({ data });
};

module.exports = { callContactNumberAPI };
