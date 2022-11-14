const { UserDetails } = require('../schema');

async function updateContactNumber(req, res) {
  const { num1, num2, num3 } = req.body;
  if (num1 !== '' && num2 !== '' && num3 !== '') {
    await UserDetails.updateOne(
      {},
      {
        $set: { contactNumber1: num1, contactNumber2: num2, contactNumber3: num3 },
      },
    );
  } else {
    const data = 'Please fill all numbers';
    res.json(data);
  }
}

module.exports = { updateContactNumber };
