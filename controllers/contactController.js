//@desc get all contact
//@route GET /api/contacts

const getContacts = (req, res) => {
  res.status(200).json({ message: "server started" });
};

const createContact = (req, res) => {
  res.status(200).json({ message: "create contact" });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
};

module.exports = {
  getContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
