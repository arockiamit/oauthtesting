/* eslint-disable no-else-return */
// const { deleteContactNumber1 } = require('./testFunctions/deleteContactNumber');
const deletefunction = require('../testFunctions/deleteContactNumber');
// eslint-disable-next-line no-unused-vars
const deletenum1 = async (req, res) => {
  const { token } = req.body;
    // eslint-disable-next-line no-undef
    const data = await deletefunction.deleteContactNumber1(token);
    // eslint-disable-next-line no-console
    return res.json({ data });
};
const deletenum2 = async (req, res) => {
  const { token } = req.body;
  // eslint-disable-next-line no-undef
  const data = await deletefunction.deleteContactNumber2(token);
  // eslint-disable-next-line no-console
  return res.json({ data });
};
const deletenum3 = async (req, res) => {
  const { token } = req.body;
  // eslint-disable-next-line no-undef
  const data = await deletefunction.deleteContactNumber3(token);
  // eslint-disable-next-line no-console
  return res.json({ data });
};
module.exports = { deletenum1, deletenum2, deletenum3 };

