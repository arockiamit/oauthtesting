const updateContactFunction = require('../testFunctions/updateContactNumber');

const updateContact1 = async (req, res) => {
  const {
    token, contactNumber1,
  } = req.body;
  const data = await updateContactFunction.updateContactNumber1(token, contactNumber1);
  res.json(data);
};

const updateContact2 = async (req, res) => {
  const {
    token, contactNumber2,
  } = req.body;
  const data = await updateContactFunction.updateContactNumber2(token, contactNumber2);
  res.json(data);
};

const updateContact3 = async (req, res) => {
  const {
    token, contactNumber3,
  } = req.body;
  const data = await updateContactFunction.updateContactNumber3(token, contactNumber3);
  res.json(data);
};

module.exports = { updateContact1, updateContact2, updateContact3 };
