/* eslint-disable no-console */
const { UserDetails } = require('../schema');

async function getRegisteredNumber(req, res) {
  const { TOKEN } = req.body;
  console.log(TOKEN);
  await UserDetails.findOne({ userMobileNumber: TOKEN }, { userMobileNumber: 0 }).then((data) => {
    console.log(data);
    return res.json(data);
  });
}

module.exports = { getRegisteredNumber };
