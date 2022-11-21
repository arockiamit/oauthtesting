const callContactNumber = async (req, res) => {
  const { token, mobileNum } = req.body;
  const mobNumber = `+91${mobileNum}`;
  const { data } = await callContactNumber(token, mobNumber);
  return res.json({ data });
};

module.exports = { callContactNumber };
