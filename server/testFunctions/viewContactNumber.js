/* eslint-disable no-console */
/* eslint-disable max-len */
const { UserDetails } = require('../schema');

async function viewContactNumber(req, res) {
  const { token } = req.body;
  await UserDetails.findOne({ userMobileNumber: token }, { userMobileNumber: 0, _id: 0, __v: 0 }).then((data) => {
    res.json(data);
    console.log(data);
  });
}

module.exports = { viewContactNumber };
