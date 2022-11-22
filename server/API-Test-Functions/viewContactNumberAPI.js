const viewContactNumber = require('../testFunctions/viewContactNumber');

async function viewContactAPI(req, res) {
  const { token } = req.body;
  const data = await viewContactNumber.viewNumber(token);
  res.json(data);
}

module.exports = { viewContactAPI };
