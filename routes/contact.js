const express = require("express");
const router = express.Router();
const userController = require("../controllers/contact");
//const validator = require("../middleware/contactValidate");
//const { isAuthenticated } = require("../middleware/authenticate");

router.get("/", contactController.getAllContacts);
router.get("/:id", contactController.getSingle);
router.post("/",isAuthenticated, validator.saveContact, contactController.createContact);
router.put("/id-to-modify/:id",isAuthenticated, validator.updateContact, userController.updateContact);
router.delete("/:id",isAuthenticated, contactController.deleteContact);

module.exports = router;