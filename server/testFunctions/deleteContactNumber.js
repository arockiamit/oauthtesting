const { UserDetails } = require('../schema');

async function deleteContactNumber1(req, res) {
  const { token } = req.body;
  await UserDetails.updateOne({ userMobileNumber: token }, { $unset: { contactNumber1: '' } });
  await UserDetails.find({}).then((data) => {
    res.json(data);
  });
}

async function deleteContactNumber2(req, res) {
  const { token } = req.body;
  await UserDetails.updateOne({ userMobileNumber: token }, { $unset: { contactNumber2: '' } });
  await UserDetails.find({}).then((data) => {
    res.json(data);
  });
}

async function deleteContactNumber3(req, res) {
  const { token } = req.body;
  await UserDetails.updateOne({ userMobileNumber: token }, { $unset: { contactNumber3: '' } });
  await UserDetails.find({}).then((data) => {
    res.json(data);
  });
}

module.exports = { deleteContactNumber1, deleteContactNumber2, deleteContactNumber3 };
