const express = require("express");
const router = express.Router();
const { getContact } = require("../controllers/contactController");

router.route("/").get(getContact);

router.route("/").post((req, res) => {
  res.status(200).json({ message: "create contact" });
});

router.route("/:id").get((req, res) => {
  res.status(200).json({ message: `get contact for ${req.params.id}` });
});

router.route("/:id").put((req, res) => {
  res.status(200).json({ message: `update contact ${req.params.id}` });
});

router.route("/:id").delete((req, res) => {
  res.status(200).json({ message: `delete contact ${req.params.id}` });
});

module.exports = router;
