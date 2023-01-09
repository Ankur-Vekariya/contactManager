//@desc get all contact
//@route GET /api/contacts

const getContact = (req, res) => {
  res.status(200).json({ message: "server started" });
};

module.exports = { getContact };
